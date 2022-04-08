declare module 'crm-core' {
  export namespace Core {
    export namespace Rooms {
      export interface Schema {
        _id: string;

        /** Активна комната или нет */
        active: boolean;

        /** Наименование комнаты */
        name: string;

        /** Типы комнат DM | GROUP | HALL */
        type: string;

        /** Создатель комнаты */
        ownerGroup: string;

        /** Последние 25 сообщений */
        messages?: Map<string, any>;

        /** Последнее сообщение */
        lastMessages?: Messages;

        /** Пользователи */
        users: Map<string, any>;
      }
    }
  }
}