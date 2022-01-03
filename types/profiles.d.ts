declare module 'crm-core' {
  /**
   * Основное ядро Пользователя
   * Все типы и настройки
   */
  export namespace Core {
    /** Профиль пользователя универсальный */
    declare namespace Profiles {
      export interface Object {
        [key: string]: any;
      }
      /** Адрес пользователя */
      export interface Address {
        state?: string;
        country?: string;
        region?: string;
        city?: string;
        street?: string;
        zip?: string;
        timezone?: string;
      }
      /** Статус пользователя */
      export namespace Capabilities {
        export type PersonaStatus = 'active' | 'inactive' | 'banned';
      }

      export type Gender = 'Male' | 'Female';

      export enum GenderEnum {
        male = 'Male',
        female = 'Female',
      }

      /**
       * Status Relationship
       */
      export type Relationship = 'lonely' | 'married' | 'divorced';

      export enum RelationshipEnum {
        lonely = 'lonely',
        married = 'married',
        divorced = 'divorced',
      }
      /** Паспортные данные */
      export interface Passport extends Object {
        series: string;
        number: string;
        dateOfIssue: Date;
      }

      /** Водительсокое удостоверение */
      export interface DriverLicense extends Object {
        number: string;
        dateOfIssue: Date;
        endDate: Date;
      }

      /** Реквизиты пользователя???? */
      export interface Requisites extends Object {
        inn: string;
        invoiceNumber: string; // Номер счета
      }

      /** Персональные данные */
      export interface PersonalDocument {
        passport: Core.Profiles.Passport;
        driver_license: Core.Profiles.DriverLicense;
      }

      /**
       * Basic fields for a profile
       */
      export interface Persona {
        owner: string;
        title: string;
        firstName: string | null;
        lastName: string | null;
        maidenName?: string | null;
        nickName?: string | null;
        gender?: string | Core.Profiles.Gender;
        birthDate?: Date;
        relationship?: string | Core.Profiles.Relationship;
        about?: string | null;
        status?: string | Core.Profiles.Capabilities.PersonaStatus;
        language?: string | null;
        speakLanguage?: Array<string>;
        email?: string | null;
        avatar?: Map<string, any>;
        address?: Map<string, any> | Core.Profiles.Address;
        object: 'profile';
        type: 'member';
        skills?: Map<string, any>;
        works?: Map<string, any>;
        certificates?: Map<string, any>;
        experience?: Map<string, any>;
        socials?: Map<string, any>;
        customer?: string;
        orders?: Map<string, any>;
        worksExperience?: Map<string, any>;
        worksTitle?: string;
        calendar?: Map<string, any>;
        specialty?: Map<string, any>;
        disorders?: Map<string, any>;
        cards?: string;

        passport: Profiles.PersonalDocument;
      }

      export class AddressType implements Profiles.Address {}

      export class PersonaSchema implements Profiles.Persona {
        object: 'profile';
        status: string | Core.Profiles.Capabilities.PersonaStatus;
        type: string;
        email: string | null;
        owner: string;
        title: string;
        nickName: string;
        firstName: string | null;
        lastName: string | null;
        maidenName: string | null;
        about: string | null;
        birthDate: Date;
        address: Map<string, any> | Core.Profiles.Address;
        avatar: Map<string, any>;
        gender: string | Core.Profiles.Gender;
        relationship: string | Core.Profiles.Relationship;
        language: string | null;
        speakLanguage: Array<string>;
        customer: string;
        skills?: Map<string, any>;
        works?: Map<string, any>;
        certificates?: Map<string, any>;
        experience?: Map<string, any>;
        calendar: Map<string, any>;
        cards: string;
        disorders: Map<string, any>;
        socials: Map<string, any>;
        specialty: Map<string, any>;
        worksExperience: Map<string, any>;
        worksTitle: string;
      }

      /**
       * Персонал логистической компании
       */
      export namespace Personal {
        export type PersonalType = 'Manager' | 'Admin';

        /** Персонал управления  */
        export interface Member {
          owner: string;
          object: 'profile';
          type: string | Core.Profiles.Personal.PersonalType;
          firstName: string | null;
          lastName: string | null;
          middleName?: string | null;
          phoneNumber: string;
          birthDate: Date;
          startDate: Date; // Дата начала работы
          passport: Core.Profiles.PersonalDocument;
          email: string | null;
          address: Map<string, any> | Core.Profiles.Address;
          requisites: Map<string, any> | Core.Profiles.Personal.Requisites;
        }
      }

      /**
       * Profile Params
       */
      export namespace Params {
        export interface EmptyData {
          owner: number;
          email: string;
        }

        export interface CreatePersona extends Profiles.Persona {}

        export interface UpdatePersona extends Profiles.Persona {}
      }
    }
  }
}
