declare module 'crm-core' {
  export namespace Core {
    export namespace Leads {
      export type LeadStatus =
        | 'Новый запрос'
        | 'Переговоры'
        | 'Принятие решения'
        | 'Согласование'
        | 'Завершить сделку';
      /**
       * Основная информация о лиде
       */
      export interface Schema {
        _id?: string;

        /** Название лида */
        name: string;

        /** Ответственный */
        owner: string;

        author: string;
        /** Кто имеет доступ  к данным */
        permissions: Map<string, any>;

        active: boolean;
        object: string | 'task';
        type: string | 'leads';
        description: string;
        status: string | Core.Leads.LeadStatus;
        tags: Array<string>;
        company: string;
        attachments: Map<string, any>;
        activity: Map<string, any>;
        price: number;
        currency: string;
        startDate: Date;
        endDate: Date;
        information: Map<string, any>;
        source: string;
        createdAt: Date;
        updatedAt: Date;
        client: Core.Client.Schema;
      }

      export interface ArchiveData {
        id: string;
        active: boolean;
      }

      export interface UpdateData {
        id: string;
        data: Core.Leads.Schema;
      }
    }

    export class Leads {
      static Leads: typeof Leads;
    }
  }
}
