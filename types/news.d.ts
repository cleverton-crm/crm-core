declare module 'crm-core' {
  export namespace Core {
    export namespace News {
      export interface Schema {
        name: string;
        content: string;
        picture?: Map<string, any>;
        comments: Map<string, any>;
        author: string;
        active: boolean;
      }
      export interface ArchiveData {
        id: string;
        active: boolean;
      }
      export interface UpdateData {
        id: string;
        data: Core.News.Schema;
      }
      export interface CommentData {
        id: string;
        userId: string;
        comments: string;
      }
    }
    export class News {
      static News: typeof News;
    }
  }
}
