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
