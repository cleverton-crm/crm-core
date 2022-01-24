"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = exports.Client = void 0;
/// <reference path="../types/company.d.ts" />
/// <reference path="../types/clients.d.ts" />
/// <reference path="../types/personal.d.ts" />
/// <reference path="../types/profiles.d.ts" />
/// <reference types="node" />
const rxjs_1 = require("rxjs");
const common_1 = require("@nestjs/common");
var Client;
(function (Client) {
})(Client = exports.Client || (exports.Client = {}));
const fs = require('fs');
const { Logger } = require('@nestjs/common');
class Core {
    /**
     * Async Response Data
     * @param {String} message
     * @param {any} data
     * @param status
     * @param isError
     * @param errorStatus
     * @constructor
     */
    static async ResponseDataAsync(message, data, status = 200, isError = false, errorStatus = '') {
        if (isError) {
            return {
                statusCode: status,
                message: message,
                error: errorStatus,
                data: null,
            };
        }
        else {
            return {
                statusCode: status,
                message: message,
                data: data,
            };
        }
    }
    static ResponseData(message, data, status = 200, isError = false, errorStatus = '') {
        if (isError) {
            return {
                statusCode: status,
                message: message,
                error: errorStatus,
                data: null,
            };
        }
        else {
            return {
                statusCode: 200,
                message: message,
                data: data,
            };
        }
    }
    static ResponseDataRecords(message, data, records, status = 200, isError = false, errorStatus = '') {
        if (isError) {
            return {
                statusCode: status,
                message: message,
                error: errorStatus,
                records: records,
                data: null,
            };
        }
        else {
            return {
                statusCode: 200,
                message: message,
                data: data,
                records: records,
            };
        }
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
            statusCode: status,
            message: message,
            error: errors,
        };
    }
    static ResponseNotFound(message, status, errors) {
        return {
            statusCode: common_1.HttpStatus.NOT_FOUND,
            message: message,
            error: errors,
        };
    }
    static ResponseBadRequest(message, status, errors) {
        return {
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: message,
            error: errors,
        };
    }
    static ResponseUnauthorized(message, status, errors) {
        return {
            statusCode: common_1.HttpStatus.UNAUTHORIZED,
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
    static ParseBool(value, defaultValue = false) {
        return ((['true', 'false', true, false].includes(value) && JSON.parse(value)) ||
            defaultValue);
    }
    /**
     * Преобразование значений в логическое
     * @param {any} value
     * @constructor
     */
    static GetBoolean(value) {
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
    }
}
exports.Core = Core;
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
    meta: 'records',
};
module.exports = Core;
module.exports.Core = Core;
module.exports.default = Core;
