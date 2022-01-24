declare module 'crm-core' {
  export namespace Core {
    /**
     * Mongo query
     */
    export interface MongoPagination {
      page: number;
      limit: number;
      offset?: number;
      lean?: boolean;
      sort?: {
        [key: string]: SortValue;
      };
    }

    /**
     * Sort values available for Mongoose
     * Ref: https://mongoosejs.com/docs/api/query.html#query_Query-sort
     */
    type SortValue = 'asc' | 'desc' | 'ascending' | 'descending' | 1 | -1;

    export interface MongoPaginationOptions {
      pageName?: string;
      pageLimit?: string;
      pageOffset?: string;
      pageLean?: string;
      pageField?: string;
      pageCollation?: {};
      defaultLimit?: number;
      excludedKeys?: string[];
    }
  }
}
