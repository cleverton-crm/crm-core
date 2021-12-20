#!/usr/bin/env node
('use strict');
export namespace EnvTool {
  export interface ETOptions {
    version?: any;
    help?: any;
    verbose?: any;
    key?: any;
  }
}

const path = require('path');
const fs = require('fs');
const { cyan, red, green } = require('cli-color');

function log(opts, output) {
  if (opts.verbose) {
    process.stdout.write(output);
  }
}

function isCamelCase(str) {
  return !!str.match(/^[a-z]+[A-Z]/);
}

function camelToSnakeCase(str) {
  if (isCamelCase(str)) {
    return str.replace(/[A-Z]/g, '_$&');
  }
  return str;
}

function build(obj, key, writableStream, config) {
  let prefix, prefix2, prefix3;
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v == 'string' || typeof v == 'number') {
      prefix = k.toUpperCase() + '_';
      console.log(green(prefix), v);
      backData(prefix, v, writableStream);
    } else if (typeof v == 'object') {
      prefix = k.toUpperCase() + '_';
      backData(prefix, v, writableStream);
    }
  }
}

function backData(prefix, obj, writableStream) {
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v == 'string' || typeof v == 'number') {
      let prefixNM = prefix + k.toUpperCase();
      let exportString = prefixNM + '=' + v + '\n';
      writableStream.write(exportString);
      console.log(cyan(exportString));
    } else {
      let prefixNM = prefix + k.toUpperCase() + '_';
      backData(prefixNM, v, writableStream);
    }
  }
}

const pkg = require('../../package.json');

const args = process.argv.slice(2);

const OPTIONS = {
  version: {
    commands: ['--version', '-V'],
    text: 'Returns the version',
    out: function () {
      process.stdout.write('Version: ' + pkg.version + '\n');
      process.exit(0);
    },
  },
  help: {
    commands: ['--help', '-h'],
    text: 'Returns how to use json-to-env',
    out: function () {
      return printUsage(OPTIONS);
    },
  },
  verbose: {
    commands: ['--verbose', '-v'],
    text: 'Runs it in verbose',
  },
  key: {
    commands: ['--key', '-k'],
    text: 'Specify a key to be converted (can be an object or string)',
  },
};

function printUsage(options: EnvTool.ETOptions) {
  let usageString =
    'Using envtools\n\n\t' +
    'envtools <inputfile.json> <outputfile.config> <options>\n\n';
  for (var key in options) {
    usageString +=
      key +
      '\n\t' +
      options[key].commands.join(', ') +
      '\n\t' +
      options[key].text +
      '\n';
  }
  process.stdout.write(usageString);
  process.exit(0);
}

function getOptions(optionArr, optionalCmds) {
  // Check for any options
  const options = OPTIONS;
  let opts = optionArr
    .filter(function (arg) {
      if (/\=/.test(arg)) {
        arg = arg.split('=')[0];
      }
      return ~optionalCmds.indexOf(arg);
    })
    .map(function (o) {
      const obj = {};
      let value = '';
      if (/\=/.test(o)) {
        value = o.split('=')[1];
        o = o.split('=')[0];
      }
      if (o) {
        for (var m in options) {
          if (~options[m].commands.indexOf(o)) {
            obj[m] = options[m];
            if (value) {
              obj[m].value = value;
            }
            return obj;
          }
        }
      }
    });
  // Run any functions from options here and exit
  opts.forEach(function (cmd) {
    if (cmd) {
      for (var k in cmd) {
        if (cmd[k].out) {
          cmd[k].out();
        }
      }
    }
  });

  return opts;
}

function getOptionsCommands(opts) {
  var optionalCmds = [];
  for (let k in opts) {
    optionalCmds = optionalCmds.concat(opts[k].commands);
  }

  return optionalCmds;
}

function parseArgs(args) {
  let out = {} as any;

  const optCmds = getOptionsCommands(OPTIONS);

  if (/^[\-]/.test(args[0])) {
    process.stderr.write(
      'Please put option arguments at the end\n' + printUsage(OPTIONS),
    );
  }

  out.input = args.shift();
  out.output = args.shift();

  let opts = getOptions(args, optCmds);
  if (opts.length) {
    opts.forEach(function (opt) {
      let key = Object.keys(opt);
      out[key[0]] = opt[key[0]];
    });
  }
  return out;
}
if (!args.length) {
  printUsage(OPTIONS);
  //process.stdout.write();
  //return process.exit(0);
}

const config = parseArgs(args);

if (config.help) {
  printUsage(OPTIONS);
  //process.stdout.write(printUsage());
  //return process.exit(0);
}

if (config.version) {
  const pkgs = require('../../package.json');
  process.stdout.write('json-to-env version: ' + pkgs.version);
  //return process.exit(0);
}

if (config.verbose) {
  process.stdout.write('Running verbose mode\nStarting...\n');
}

module.exports = function buildEnv(config) {
  const inputFile = config.input;
  const outputFile = config.output;

  const optionKey = config.key ? config.key.value : null;

  if (!/\.json/.test(inputFile)) {
    return process.stdout.write('Requires json input file\n');
  }

  if (!outputFile) {
    return process.stdout.write('Requires output file\n');
  }

  const jsonFile = path.resolve(inputFile);
  const envFile = path.resolve(outputFile);
  log(config, 'Input file: ' + jsonFile + '\n');
  log(config, 'Output file: ' + envFile + '\n');

  // TODO: Validate json file first
  const json = require(jsonFile);

  const inputObj = optionKey ? json[optionKey] : json;

  const stream = fs.createWriteStream(envFile);

  build(inputObj, optionKey, stream, config);

  log(config, 'Done\n');
  // TODO: Close fd
  return;
};
