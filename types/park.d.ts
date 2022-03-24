declare module 'crm-core' {
  export namespace Core {
    export namespace Company {
      export namespace Park {
        interface FuelInfo {
          id: string
          name: string // Тип топлива
          capacity: number // Емкость
          consumption: number // Потребление
        }

        export interface ParkObject {
          id: string
          name: string // Название
          address?: string // Адрес
          havePump?: boolean // Наличе насоса
          distance?: string // Дистанция по бездорожью
          fuels: IFuelInfo[] // Виды топлива
          resultCapacity: number // Емкость по объекту (складывается из всех видов топлива)
          resultConsumption: number // Потребление по объекту (складывается из всех видов топлива)
          ownerId: string // Ответсвенный объекта парка (тот кто создал)
          ownerFirst: string // Имя
          ownerLast: string // Фамилия
        }

        export interface Park {
          companyId: string // id компании
          objects: IParkObject[] // Объекты парка
          allCapacity: number // Общая емкость
          allConsumption: number // Общее потребление
        }
      }
    }
  }
}