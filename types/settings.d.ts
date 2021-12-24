declare module 'crm-core' {
  export namespace Core {
    /**
     * Настройки
     */
    export namespace Settings {
      /**
       * Модель настроек
       */
      export interface Schema {
        type: string;
        name: string;
        values: string;
      }

      export interface Filter {
        type: string;
        name: string;
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
        type: string;
        name: string;
        values: string;
      }

      export interface Filter {
        type: string;
        name: string;
      }
    }
    export class Guides {
      static Guides: typeof Guides;
    }
  }
}
