export namespace Core {
  export namespace Deals {
    export type DealStatus =
      | 'Новый запрос'
      | 'Переговоры'
      | 'Принятие решения'
      | 'Согласование'
      | 'Завершить сделку';
    /**
     * Основная информация о лиде
     */
    export interface Contacts {
      clients: Array<Core.Client.Schema>;
      company: Core.Company.Schema | null;
    }

    export interface Schema {
      _id?: string;

      /** Название лида */
      name: string;

      /** Ответственный */
      owner: string;

      author?: string;
      /** Кто имеет доступ  к данным */
      permissions?: Map<string, any>;

      active?: boolean;
      object?: string | 'task';
      type: string | 'lead' | 'deal';
      description?: string;
      status?: string | Core.Deals.LeadStatus;
      tags?: Array<string>;
      company?: string;
      attachments?: Map<string, any>;
      activity?: Map<string, any>;
      price?: number;
      currency?: string;
      fuelType?: string;
      amountFuel?: number;
      startDate?: Date;
      endDate?: Date;
      information?: Map<string, any>;
      source?: string;
      createdAt?: Date;
      updatedAt?: Date;
      client?: string;
      contacts?: [Core.Client.Schema, Core.Company.Schema];
    }

    export interface ArchiveData {
      id: string;
      userId: string;
      active: boolean;
    }

    export interface UpdateData {
      id: string;
      userId: string;
      data: Core.Deals.Schema;
    }

    export interface CommentData {
      id: string;
      userId: string;
      comments: string;
    }
  }

  export class Deals {
    static Deals: typeof Deals;
  }
}
