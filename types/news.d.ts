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
    }
    export class News {
      static News: typeof News;
    }
  }
}
