declare module 'crm-core' {
  export namespace Core {
    export namespace Client {
      /**
       * Тип плательщика
       */
      export type PayerType = 'entity' | 'individual';

      /**
       * Голосовая связь
       */
      export interface SocialVoices {
        whatsapp: string | null;
        skype: string | null;
        viber: string | null;
        telegram: string | null;
        slack: string | null;
        discord: string | null;
        vk: string | null;
        fb: string | null;
      }

      /**
       * Клиент (данные)
       */
      export interface Schema {
        _id?: string;
        id?: string;
        object: 'client';
        first: string;
        last: string;
        middle: string;
        owner: string;
        active: boolean;
        payerType: string | Core.Client.PayerType;
        permissions: Map<string, any>;
        createData: Date;
        company: string | null;
        roleInCompany: string;
        workPhone: string;
        phones: Array<string>;
        email: string;
        emailCompany: string;
        socials: Map<string, string>;
        voices: Map<string, string> | Core.Client.SocialVoices;
        birthDate: Date;
        comments: Map<string, string>;
        attachments: Map<string, string>;
      }

      export interface ArchiveData {
        id: string;
        active: boolean;
      }

      /**
       * Схема для mongodb
       */
      export class PersonaSchema implements Core.Client.Persona {}
    }
  }
}
