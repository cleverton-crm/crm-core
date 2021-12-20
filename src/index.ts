import { firstValueFrom, Observable } from 'rxjs';
import { HttpException, HttpStatus } from '@nestjs/common';

export namespace Core {
  /**
   * Response Core Api
   * Core.Response.Data - используется при правильном ответе с данными
   */
  export namespace Response {
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
    interface NotFound {
      statusCode: number;
      message: string | string[];
      error: string;
    }

    /** Ошибочные данные - не правильный запрос */
    interface BadRequest {
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
   * @constructor
   */
  static async ResponseDataAsync(
    message: string | Object,
    data: any,
  ): Promise<Core.Response.Answer> {
    return {
      statusCode: 200,
      message: message,
      data: data,
    };
  }

  static ResponseData(message: string | Object, data: any): Core.Response.Data {
    return {
      statusCode: 200,
      message: message,
      data: data,
    };
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
  ) {
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
}
module.exports = Core;
module.exports.Core = Core;
module.exports.default = Core;
