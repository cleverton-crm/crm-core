declare module 'crm-core' {
  export namespace Core {
    /**
     * Настройки
     */
    export namespace Settings {
      /** Типы данных*/
      export type ValueType = 'String' | 'Number' | 'Map' | 'Array' | 'Boolean';
      /**
       * Модель настроек
       */
      export interface Schema {
        /** Объект - принадлежность к объекту данных в коллекциях */
        object: string;

        /** Тип данных - задает параметры данных: string == vString, number == vNumber и тд. */
        type: string;

        /** Описание поля с данными */
        name: string;

        /** Название поля на английском */
        property: string;

        /** Тип данных Строка */
        vString?: string;

        /** Тип данных номер */
        vNumber?: number;

        /** Тип данных логические */
        vBoolean?: boolean;

        /** Тип данных массив */
        vArray?: Array;

        /**
         * Тип данных универсальный Map
         * Возможность использования в широком спектре
         */
        vMap?: Map<string, any>;
      }

      export interface Filter {
        object?: string;
        type?: string;
        name?: string;
        property?: string;
      }
    }
    export class Settings {
      static Settings: typeof Settings;
    }

    /**
     * Справочники
     */
    export namespace Guides {
      /**
       * Модель справочника
       */
      export interface Schema {
        object: string; // Объект
        type: string; // Тип данных
        name: string;
        property: string;
        vString?: string;
        vNumber?: number;
        vBoolean?: boolean;
        vArray?: Array;
        vMap?: Map<string, any>;
      }

      export interface Filter {
        object?: string;
        type?: string;
        name?: string;
        property?: string;
      }
    }
    export class Guides {
      static Guides: typeof Guides;
    }
  }
}
