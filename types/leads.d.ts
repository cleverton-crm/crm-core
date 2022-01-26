declare module 'crm-core' {
  export namespace Core {
    export namespace Leads {
      export type CompanyRole =
        | 'Учредитель'
        | 'Соучредитель'
        | 'Руководитель'
        | 'Главный бухгалтер'
        | 'Бухгалтер ответственный за учет'
        | 'Уполномочен делать заявки'
        | 'Уполномочен принимать ГСМ, ЛПР, ЛВР'
        | 'Водитель'
        | ' Другое';

      /**
       * Основная информация о лиде
       */
      export interface Schema {
        /** Название лида */
        name: string;

        /** Ответственный */
        owner: string;

        author: string;
        /** Кто имеет доступ  к данным */
        permissions: Map<string, any>;

        active: boolean;
        object: string | 'task';
        type: string | 'leads' | 'deals';
        description: string;
        status: string;
        tags: Array<string>;
        activity: Map<string, any>;
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
