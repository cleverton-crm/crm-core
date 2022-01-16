declare module 'crm-core' {
  /**
   * Основное ядро Пользователя
   * Все типы и настройки
   */
  export namespace Core {
    /** Профиль пользователя универсальный */
    export namespace Profiles {
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

      export type PersonaStatus = 'active' | 'inactive' | 'banned';

      export type Gender = 'Male' | 'Female';

      export enum GenderEnum {
        male = 'Male',
        female = 'Female',
      }

      export type PersonalType = 'Manager' | 'Admin';

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
        issuedBy?: string;
      }

      /** Водительсокое удостоверение */
      export interface DriverLicense extends Object {
        number: string;
        dateOfIssue: Date;
        endDate: Date;
      }

      export interface Requisites extends Object {
        /** Дебетовая карта*/
        card: string;

        /** ИИН */
        inn: string;

        /** СНИЛС */
        snils: string;

        /** БИК */
        bik: string;

        /** Банк счета*/
        bank: string;

        /** ИНН Банка */
        innBank: string;

        /** Расчетный счет */
        payment: string;

        /** Кор. счет */
        correspondent: string;
      }

      /** Персональные данные */
      export interface PersonalDocument {
        passport: Core.Profiles.Passport;
        driver_license: Core.Profiles.DriverLicense;
      }

      /**
       * Basic fields for a profile
       */
      export interface Schema {
        _id?: string;
        id?: string;

        /** UserID - Принадлежность объекта */
        owner: string;

        /** Обращение к человеку Мистер, Мисс, Товарищ, Сер*/
        title: string;

        /** Имя пользователя */
        firstName: string | null;

        /** Фамилия пользователя  */
        lastName: string | null;

        /** Отчество пользователя */
        middleName?: string | null;

        /** Вымышленное имя */
        nickName?: string | null;

        /** Пол пользователя */
        gender?: string | Core.Profiles.Gender;

        /** Дата рождения */
        birthDate?: Date;

        /** Статус: Женат, Замужем и тд. */
        relationship?: string | Core.Profiles.Relationship;

        /** Коротко об пользователе, биография или качества */
        about?: string | null;

        /** Статус: Активный или не активный */
        status?: string | Core.Profiles.Capabilities.PersonaStatus;

        /** Разговорный язык */
        language?: string | null;

        /** На каких языках разговаривает */
        speakLanguage?: Array<string>;

        /** Дополнительный емайл */
        email?: string | null;

        /** Телефон */
        phone?: string | null;

        /** Аватарка пользователя или фотография */
        avatar?: Map<string, any>;

        /**  Объект - его определение, к чему относятся данные */
        object: string | 'profile';

        /** Тип профиля*/
        type: string | 'member';

        /** Линки на социальные сети */
        socials?: Map<string, any>;

        /** Паспортные данные */
        passport: Core.Profiles.PersonalDocument;

        /** Фактический адрес проживания */
        address: Map<string, any> | Core.Profiles.Address;

        /** Платежные реквизиты */
        requisites: Map<string, any> | Core.Profiles.Requisites;
      }

      export interface Update {
        _id?: string;
        id?: string;

        /** Обращение к человеку Мистер, Мисс, Товарищ, Сер*/
        title?: string;

        /** Имя пользователя */
        firstName?: string | null;

        /** Фамилия пользователя  */
        lastName?: string | null;

        /** Отчество пользователя */
        middleName?: string | null;

        /** Вымышленное имя */
        nickName?: string | null;

        /** Пол пользователя */
        gender?: string | Core.Profiles.Gender;

        /** Дата рождения */
        birthDate?: Date;

        /** Статус: Женат, Замужем и тд. */
        relationship?: string | Core.Profiles.Relationship;

        /** Коротко об пользователе, биография или качества */
        about?: string | null;

        /** Статус: Активный или не активный */
        status?: string | Core.Profiles.PersonaStatus;

        /** Разговорный язык */
        language?: string | null;

        /** На каких языках разговаривает */
        speakLanguage?: Array<string>;

        /** Дополнительный емайл */
        email?: string | null;

        /** Телефон */
        phone?: string | null;

        /** Аватарка пользователя или фотография */
        avatar?: Map<string, any>;

        /** Линки на социальные сети */
        socials?: Map<string, any>;

        /** Паспортные данные */
        passport?: Core.Profiles.PersonalDocument;

        /** Фактический адрес проживания */
        address?: Map<string, any> | Core.Profiles.Address;

        /** Платежные реквизиты */
        requisites?: Map<string, any> | Core.Profiles.Requisites;
      }

      export class AddressType implements Profiles.Address {}

      /**
       * Персонал логистической компании
       */
      export namespace Personal {
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
