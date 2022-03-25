declare module 'crm-core' {
  export namespace Core {
    export namespace Company {
      export namespace ParkCompany {
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
          fuels: FuelInfo[] // Виды топлива
          resultCapacity: number // Емкость по объекту (складывается из всех видов топлива)
          resultConsumption: number // Потребление по объекту (складывается из всех видов топлива)
        }

        export interface Park {
          company: string // id компании
          author: string
          owner: string
          object: string | 'park';
          stores: ParkObject[] // Объекты парка
        }
      }
    }
  }
}