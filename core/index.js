"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Core = exports.Client = void 0;
var rxjs_1 = require("rxjs");
var common_1 = require("@nestjs/common");
var Client;
(function (Client) {
})(Client = exports.Client || (exports.Client = {}));
var fs = require('fs');
var Logger = require('@nestjs/common').Logger;
var Core = /** @class */ (function () {
    function Core() {
    }
    /**
     * Async Response Data
     * @param {String} message
     * @param {any} data
     * @param status
     * @param isError
     * @param errorStatus
     * @constructor
     */
    Core.ResponseDataAsync = function (message, data, status, isError, errorStatus) {
        if (status === void 0) { status = 200; }
        if (isError === void 0) { isError = false; }
        if (errorStatus === void 0) { errorStatus = ''; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (isError) {
                    return [2 /*return*/, {
                            statusCode: status,
                            message: message,
                            error: errorStatus,
                            data: null
                        }];
                }
                else {
                    return [2 /*return*/, {
                            statusCode: status,
                            message: message,
                            data: data
                        }];
                }
                return [2 /*return*/];
            });
        });
    };
    Core.ResponseData = function (message, data, status, isError, errorStatus) {
        if (status === void 0) { status = 200; }
        if (isError === void 0) { isError = false; }
        if (errorStatus === void 0) { errorStatus = ''; }
        if (isError) {
            return {
                statusCode: status,
                message: message,
                error: errorStatus,
                data: null
            };
        }
        else {
            return {
                statusCode: 200,
                message: message,
                data: data
            };
        }
    };
    Core.ResponseDataRecords = function (message, data, records, status, isError, errorStatus) {
        if (status === void 0) { status = 200; }
        if (isError === void 0) { isError = false; }
        if (errorStatus === void 0) { errorStatus = ''; }
        if (isError) {
            return {
                statusCode: status,
                message: message,
                error: errorStatus,
                records: records,
                data: null
            };
        }
        else {
            return {
                statusCode: 200,
                message: message,
                data: data,
                records: records
            };
        }
    };
    Core.ResponseSuccess = function (message, status) {
        if (status === void 0) { status = 200; }
        return {
            statusCode: status,
            message: message
        };
    };
    /**
     * Ошибочное сообщение , любые Exceptions
     * @param message
     * @param status
     * @param errors
     * @constructor
     */
    Core.ResponseError = function (message, status, errors) {
        return {
            statusCode: status,
            message: message,
            error: errors
        };
    };
    Core.ResponseNotFound = function (message, status, errors) {
        return {
            statusCode: common_1.HttpStatus.NOT_FOUND,
            message: message,
            error: errors
        };
    };
    Core.ResponseBadRequest = function (message, status, errors) {
        return {
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: message,
            error: errors
        };
    };
    Core.ResponseUnauthorized = function (message, status, errors) {
        return {
            statusCode: common_1.HttpStatus.UNAUTHORIZED,
            message: message,
            error: errors
        };
    };
    Core.OperationReadMe = function (path, context) {
        if (context === void 0) { context = 'AnyController'; }
        var reamMeFile;
        try {
            reamMeFile = fs.readFileSync(path).toString();
        }
        catch (e) {
            this.logger.error("File path not found [ ".concat(path, " ]"), 'descr/error/controller', context);
        }
        return reamMeFile;
    };
    Core.SendAndResponse = function (client, pattern, data) {
        return __awaiter(this, void 0, void 0, function () {
            var userResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, rxjs_1.firstValueFrom)(client.send(pattern, data))];
                    case 1:
                        userResponse = _a.sent();
                        if (userResponse.statusCode !== 200) {
                            if (userResponse.statusCode === undefined) {
                                throw new common_1.HttpException({
                                    statusCode: userResponse.statusCode,
                                    message: userResponse.message,
                                    errors: userResponse.errors
                                }, userResponse.statusCode);
                            }
                            throw new common_1.HttpException({
                                statusCode: userResponse.statusCode,
                                message: userResponse.message,
                                errors: userResponse.errors
                            }, userResponse.statusCode);
                        }
                        return [2 /*return*/, userResponse];
                }
            });
        });
    };
    Core.ParseBool = function (value, defaultValue) {
        if (defaultValue === void 0) { defaultValue = false; }
        return ((['true', 'false', true, false].includes(value) && JSON.parse(value)) ||
            defaultValue);
    };
    /**
     * Преобразование значений в логическое
     * @param {any} value
     * @constructor
     */
    Core.GetBoolean = function (value) {
        if (value == null)
            return false;
        if (typeof value === 'boolean') {
            if (value === true)
                return true;
            return false;
        }
        if (typeof value === 'string') {
            if (value == '')
                return false;
            value = value.replace(/^\s+|\s+$/g, '');
            if (value.toLowerCase() == 'true' || value.toLowerCase() == 'yes')
                return true;
            value = value.replace(/,/g, '.');
            value = value.replace(/^\s*\-\s*/g, '-');
        }
        if (!isNaN(value))
            return parseFloat(value) != 0;
        return false;
    };
    Core.logger = new Logger();
    Core.ResponseDataLabels = {
        totalDocs: 'totalPages',
        docs: 'data',
        limit: 'perPage',
        page: 'currentPage',
        nextPage: 'next',
        prevPage: 'prev',
        totalPages: 'pageCount',
        pagingCounter: 'slNo',
        meta: 'records'
    };
    return Core;
}());
exports.Core = Core;
module.exports = Core;
module.exports.Core = Core;
module.exports["default"] = Core;
