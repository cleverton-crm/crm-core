/// <reference path="../types/company.d.ts" />
/// <reference path="../types/clients.d.ts" />
/// <reference path="../types/personal.d.ts" />
/// <reference path="../types/profiles.d.ts" />
/// <reference types="node" />
import { firstValueFrom, Observable } from 'rxjs';
import { HttpException, HttpStatus } from '@nestjs/common';
export namespace Core {
  /**
   * Response Core Api
   * Core.Response.Data - используется при правильном ответе с данными
   */
  export namespace Response {
    export interface RecordLabels {
      totalDocs: 'totalPages';
      docs: 'data';
      limit: 'perPage';
      page: 'currentPage';
      nextPage: 'next';
      prevPage: 'prev';
      totalPages: 'pageCount';
      pagingCounter: 'slNo';
      meta: 'records';
    }

    /**
     *
     */
    export interface Data {
      statusCode: number;
      message: string | Object;
      data: any;
    }

    /**
     * Core.Response.Success - используется при правильном ответе
     */
    export interface Success {
      statusCode: number;
      message: string | Object;
    }

    /**
     * Core.Response.Error - Используется при ошибке
     */
    export interface Error {
      statusCode: number;
      message: string | string[];
      error: string;
    }

    /** Ошибочные данные - объект не найден */
    export interface NotFound {
      statusCode: number;
      message: string | string[];
      error: string;
    }

    /** Ошибочные данные - не правильный запрос */
    export interface BadRequest {
      statusCode: number;
      message: string | string[];
      error: string;
    }

    export type Answer = Data | Success | Error | NotFound | BadRequest;
  }

  export namespace Geo {
    export interface Location {
      status: string;
      continent: string;
      continentCode: string;
      country: string;
      countryCode: string;
      region: string;
      regionName: string;
      city: string;
      zip: string;
      lat: number;
      lon: number;
      timezone: string;
      currency: string;
      isp: string;
      org: string;
      as: string;
      asname: string;
      reverse: string;
      mobile: boolean;
      proxy: boolean;
      hosting: boolean;
      query: string;
    }

    /**
     * Location data transfer along with mailing address
     */
    export interface LocationEmail extends Location {
      email: string;
    }

    export interface Address {
      state?: string;
      country?: string;
      region?: string;
      city?: string;
      street?: string;
      zip?: string;
      timezone?: string;
    }
  }
}

export namespace Client {
  export declare class ClientProxy {
    send<TResult = any, TInput = any>(
      pattern: any,
      data: TInput,
    ): Observable<TResult>;
    emit<TResult = any, TInput = any>(
      pattern: any,
      data: TInput,
    ): Observable<TResult>;
  }
}

const fs = require('fs');
const { Logger } = require('@nestjs/common');

export class Core {
  private static logger: any = new Logger();
  static Core: typeof Core;

  /**
   * Async Response Data
   * @param {String} message
   * @param {any} data
   * @param status
   * @param isError
   * @param errorStatus
   * @constructor
   */
  static async ResponseDataAsync(
    message: string | Object,
    data: any,
    status: number = 200,
    isError: boolean = false,
    errorStatus: string = '',
  ): Promise<Core.Response.Answer> {
    if (isError) {
      return {
        statusCode: status,
        message: message,
        error: errorStatus,
        data: null,
      };
    } else {
      return {
        statusCode: status,
        message: message,
        data: data,
      };
    }
  }

  static ResponseData(
    message: string | Object,
    data: any,
    status: number = 200,
    isError: boolean = false,
    errorStatus: string = '',
  ): Core.Response.Answer {
    if (isError) {
      return {
        statusCode: status,
        message: message,
        error: errorStatus,
        data: null,
      };
    } else {
      return {
        statusCode: 200,
        message: message,
        data: data,
      };
    }
  }

  static ResponseSuccess(
    message: string | Object,
    status: number = 200,
  ): Promise<Core.Response.Answer> | Core.Response.Success {
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
  static ResponseError(
    message: string | string[],
    status: number,
    errors: string,
  ): Promise<Core.Response.Answer> | Core.Response.Error {
    return {
      statusCode: 200,
      message: message,
      error: errors,
    };
  }

  static OperationReadMe(
    path: string,
    context: string = 'AnyController',
  ): string | undefined {
    let reamMeFile;
    try {
      reamMeFile = fs.readFileSync(path).toString();
    } catch (e) {
      this.logger.error(
        `File path not found [ ${path} ]`,
        'descr/error/controller',
        context,
      );
    }
    return reamMeFile;
  }

  static async SendAndResponse(
    client: Client.ClientProxy,
    pattern: string,
    data: any,
  ): Promise<Core.Response.Answer> {
    const userResponse = await firstValueFrom(client.send(pattern, data));

    if (userResponse.statusCode !== 200) {
      if (userResponse.statusCode === undefined) {
        throw new HttpException(
          {
            statusCode: userResponse.statusCode,
            message: userResponse.message,
            errors: userResponse.errors,
          },
          userResponse.statusCode,
        );
      }
      throw new HttpException(
        {
          statusCode: userResponse.statusCode,
          message: userResponse.message,
          errors: userResponse.errors,
        },
        userResponse.statusCode,
      );
    }

    return userResponse;
  }

  static ParseBool(value: any, defaultValue: boolean = false) {
    return (
      (['true', 'false', true, false].includes(value) && JSON.parse(value)) ||
      defaultValue
    );
  }

  static ResponseDataLabels = {
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

  /**
   * Преобразование значений в логическое
   * @param {any} value
   * @constructor
   */
  static GetBoolean(value: any) {
    if (value == null) return false;

    if (typeof value === 'boolean') {
      if (value === true) return true;

      return false;
    }

    if (typeof value === 'string') {
      if (value == '') return false;

      value = value.replace(/^\s+|\s+$/g, '');
      if (value.toLowerCase() == 'true' || value.toLowerCase() == 'yes')
        return true;

      value = value.replace(/,/g, '.');
      value = value.replace(/^\s*\-\s*/g, '-');
    }

    if (!isNaN(value)) return parseFloat(value) != 0;

    return false;
  }
}
module.exports = Core;
module.exports.Core = Core;
module.exports.default = Core;
