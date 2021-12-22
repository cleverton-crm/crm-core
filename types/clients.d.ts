declare module 'crm-core' {
  declare namespace ClientCompany {
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
    export interface Persona {
      object: 'client';
      first: string;
      last: string;
      middle: string;
      owner: string;
      payerType: string | ClientCompany.PayerType;
      permissions: Map<string, any>;
      createData: Date;
      company: string | null;
      roleInCompany: string;
      workPhone: string;
      phones: Array<string>;
      email: string;
      emailCompany: string;
      socials: Map<string, string>;
      voices: ClientCompany.SocialVoices;
      birthDate: Date;
      comments: Map<string, string>;
      attachments: Map<string, string>;
    }

    /**
     * Схема для mongodb
     */
    export class PersonaSchema implements ClientCompany.Persona {}
  }
  export class ClientCompany {
    static ClientCompany: typeof ClientCompany;
  }
}
