declare module 'crm-core' {
  export namespace Core {
    /**
     * Сделки
     */
    export namespace Deals {
      /**
       * Схема хранения сделки
       */

      export type Status =
        | 'Новая'
        | 'Подготовка документов'
        | 'Счет на предоплату'
        | 'В работе'
        | 'Финальный счет';

      export interface Schema {
        _id?: string;
        /** Наименование сделки */
        name: string;
        /** Автор создания сделки */
        author: string;
        active: boolean;
        /** Сумма сделки */
        sum: number;
        /** Тип топлива */
        fuelType: string | null;
        /** Кол-во топлива */
        fuelAmount: number;
        /** Ответственный */
        owner: string;
        /** Доступность */
        permissions: string;
        /** Тип плательщика */
        ownership: string | Core.Company.Ownership;
        /** Тэги */
        tags: Array<string> | [];
        /** ФИО */
        fullname: string | null;
        /** Источник */
        source: string | null;
        /** Статус сделки */
        status: string | Core.Deals.Status;
        /** История изменения сделки */
        history: Map<string, any>;
      }

      /** Интерфейс арихвации сделки */
      export interface ArchiveData {
        id: string;
        active: boolean;
      }

      /** Интерфейс для изменения сделки */
      export interface UpdateData {
        id: string;
        userId: string;
        data: Core.Deals.Schema;
      }

      export interface HistoryData {
        id: string;
        comments: Map<string, any>;
      }
    }

    export class Deals {
      static Deals: typeof Deals;
    }
  }
}
