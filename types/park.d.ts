declare module 'crm-core' {
  export namespace Core {
    export namespace Company {
      export namespace ParkCompany {
        export interface FuelInfo {
          id: number
          name: string // Тип топлива
          capacity: number // Емкость
          consumption: number // Потребление
        }

        export interface ParkObject {
          id: number
          name: string // Название
          address?: string // Адрес
          havePump?: boolean // Наличе насоса
          distance?: string // Дистанция по бездорожью
          fuels: FuelInfo[] // Виды топлива
          resultCapacity: number // Емкость по объекту (складывается из всех видов топлива)
          resultConsumption: number // Потребление по объекту (складывается из всех видов топлива)
        }

        export interface ParkSchema {
          company: string // id компании
          author: string
          owner: string
          object: string | 'park';
          stores: Record<string, any> // Объекты парка
        }

        export interface FuelInfoSchema {
          name: string // Тип топлива
          capacity: number // Емкость
          consumption: number // Потребление
        }

        export interface ParkObjectSchema {
          name: string // Название
          address?: string // Адрес
          havePump?: boolean // Наличе насоса
          distance?: string // Дистанция по бездорожью
          fuels: Record<string, any> // Виды топлива
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