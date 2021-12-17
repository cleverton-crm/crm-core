import { firstValueFrom, Observable } from 'rxjs';
import { HttpException, HttpStatus } from '@nestjs/common';

export namespace Core {
  /**
   * Response Core Api
   */
  export namespace Response {
    export interface Data {
      statusCode: number;
      message: string | Object;
      data: any;
    }
    /**
     * Core.Response.Success data
     */
    export interface Success {
      statusCode: number;
      message: string | Object;
    }

    /**
     * Core.Response.Error
     */
    export interface Error {
      statusCode: number;
      message: string | string[];
      error: string;
    }
    export type Answer = Data | Success | Error;
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

  static ResponseData(
    message: string | Object,
    data: any,
  ): Promise<Core.Response.Answer> | Core.Response.Data {
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
