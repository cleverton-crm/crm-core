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
        /** Название компании */
        name: string;

        /** Кому пренадлежит запись*/
        owner: string;

        /** Кто имеет доступ  к данным */
        permissions: Map<string, any>;

        active: boolean;
        /** Тип плательщика  */
        payerType: string | Core.Company.Ownership;
        /** ФИО */
        fullname: string;
        position: string;
        companyRole: string | Core.Leads.CompanyRole;
        workPhone?: string | null;
        mobilePhone?: string | null;
        delivery: string | null;
        source: string | null;
        mobilePhone2?: string | null;
        mobilePhone3?: string | null;
        personalEmail?: string | null;
        corporateEmail?: string | null;
        skype?: string | null;
        birthDate: Date;
        comments?: string | null;
        passport: Core.Leads.Passport;
        licenses: Core.Leads.Licenses;
      }

      export interface Passport {
        passportSeriesAndNumber: string;
        dateOfIssue: Date;
        issuedBy: string;
      }

      export interface Licenses {
        validity: Date;
        categories: string[];
        adr: string; // ДОПОГ
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
