declare module 'crm-core' {
  export namespace Core {
    export namespace StatusDeals {
      export interface Schema {
        _id?: string;
        name: string;
        owner: string;
        active: boolean;
        locked: boolean;
        public: boolean;
        priority: number;
        description: string;
        color: string;
      }

      export interface ArchiveData {
        id: string;
        userId: string;
        active: boolean;
      }

      export interface UpdateData {
        id: string;
        data: Core.StatusDeals.Schema;
      }
    }
  }
}
