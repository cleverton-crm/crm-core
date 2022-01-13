declare module 'crm-core' {
  export namespace Core {
    /**
     * Сделки
     */
    export namespace Deals {
      /**
       * Схема хранения сделки
       */

      export type Status = "Новая" | "Подготовка документов" | "Счет на предоплату" | "В работе" | "Финальный счет"

      export interface Schema {
        _id?: string;
        name: string;
        author: string;
        sum: number | 0;
        fuelType: string | null;
        owner: string;
        permissions: string;
        ownership: string | Core.Company.Ownership;
        dealCreated: Date;
        fuelAmount: number | 0;
        tags: Array<string> | [];
        fullname: string | null;
        source: string | null;
        status: string | Core.Deals.Status;
        history: Map<string, any> | Core.Deals.History;
      }

      export interface History {
        comments: Array<string>;
        whoChange: string;
      }
    }

    export class Deals {
      static Deals: typeof Deals;
    }
  }
}
