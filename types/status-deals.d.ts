declare module 'crm-core' {
  export namespace Core {
    export namespace Deals {
      export type DealStatus =
        | 'Новый запрос'
        | 'Переговоры'
        | 'Принятие решения'
        | 'Согласование'
        | 'Завершить сделку';
      /**
       * Основная информация о лиде
       */
      export interface Contacts {
        clients: Array<Core.Client.Schema>;
        company: Core.Company.Schema;
      }

      export interface Schema {
        _id?: string;
        name: string;
        owner: string;
        active: boolean;
        locked: boolean;
        public: boolean;
        priority: number;
        description: string;
        color: string;
      }

      export interface ArchiveData {
        id: string;
        userId: string;
        active: boolean;
      }

      export interface UpdateData {
        id: string;
        data: Core.Deals.Schema;
      }
    }

    export class Deals {
      static Deals: typeof Deals;
    }
  }
}
