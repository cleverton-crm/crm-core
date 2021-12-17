import { ClientProxy } from '@nestjs/microservices';
export declare namespace Core {
    /**
     * Response Core Api
     */
    namespace Response {
        interface Data {
            statusCode: number;
            message: string | Object;
            data: any;
        }
        /**
         * Core.Response.Success data
         */
        interface Success {
            statusCode: number;
            message: string | Object;
        }
        /**
         * Core.Response.Error
         */
        interface Error {
            statusCode: number;
            message: string | string[];
            error: string;
        }
        type Answer = Data | Success | Error;
    }
}
export declare class Core {
    private static logger;
    static Core: typeof Core;
    static ResponseData(message: string | Object, data: any): Promise<Core.Response.Answer> | Core.Response.Data;
    static ResponseSuccess(message: string | Object, status?: number): Promise<Core.Response.Answer> | Core.Response.Success;
    /**
     * Ошибочное сообщение , любые Exceptions
     * @param message
     * @param status
     * @param errors
     * @constructor
     */
    static ResponseError(message: string | string[], status: number, errors: string): Promise<Core.Response.Answer> | Core.Response.Error;
    static OperationReadMe(path: string, context?: string): string | undefined;
    static SendAndResponse(client: ClientProxy, pattern: string, data: any): Promise<any>;
}
