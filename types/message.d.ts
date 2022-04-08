declare module 'crm-core' {
  export namespace Core {
    export namespace Message {
      export interface Schema {
        _id: string;

        /** Сообщение FALSE удалено */
        active: boolean;

        /** Текст сообщения */
        content: string;

        /** Отредактированное сообщения */
        contentEdit: string;

        /** Дата отредактированного сообщения */
        contentEditDate: Date;

        /** Прикрепляемые файлы */
        attachments: Map<string, any>;

        /** Форматированное сообщение */
        read: Map<string, any>;

        /** ID команты, в которой создано сообщение */
        room: string;

        /** Идентификатор пользователя(Profile), создавшего сообщение */
        author: string;
      }
    }
  }
}