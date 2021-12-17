"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = exports.Client = void 0;
const rxjs_1 = require("rxjs");
const common_1 = require("@nestjs/common");
var Client;
(function (Client) {
})(Client = exports.Client || (exports.Client = {}));
const fs = require('fs');
const { Logger } = require('@nestjs/common');
class Core {
    static ResponseData(message, data) {
        return {
            statusCode: 200,
            message: message,
            data: data,
        };
    }
    static ResponseSuccess(message, status = 200) {
        return {
            statusCode: status,
            message: message,
        };
    }
    /**
     * Ошибочное сообщение , любые Exceptions
     * @param message
     * @param status
     * @param errors
     * @constructor
     */
    static ResponseError(message, status, errors) {
        return {
            statusCode: 200,
            message: message,
            error: errors,
        };
    }
    static OperationReadMe(path, context = 'AnyController') {
        let reamMeFile;
        try {
            reamMeFile = fs.readFileSync(path).toString();
        }
        catch (e) {
            this.logger.error(`File path not found [ ${path} ]`, 'descr/error/controller', context);
        }
        return reamMeFile;
    }
    static async SendAndResponse(client, pattern, data) {
        const userResponse = await (0, rxjs_1.firstValueFrom)(client.send(pattern, data));
        if (userResponse.statusCode !== 200) {
            if (userResponse.statusCode === undefined) {
                throw new common_1.HttpException({
                    statusCode: userResponse.statusCode,
                    message: userResponse.message,
                    errors: userResponse.errors,
                }, userResponse.statusCode);
            }
            throw new common_1.HttpException({
                statusCode: userResponse.statusCode,
                message: userResponse.message,
                errors: userResponse.errors,
            }, userResponse.statusCode);
        }
        return userResponse;
    }
}
exports.Core = Core;
Core.logger = new Logger();
module.exports = Core;
module.exports.Core = Core;
