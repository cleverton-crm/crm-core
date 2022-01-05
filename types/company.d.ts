declare module 'crm-core' {
  export namespace Core {
    export namespace Company {
      /**
       * Формы собственности
       */
      export type Ownership = 'ООО' | 'ИП' | 'ОАО';

      export type FuelCustomer = 'Нет' | 'Розница' | 'Опт' | 'Заправка техники';
      export type FuelSupplier = 'Нет' | 'Трейдер' | 'ВИНК';

      export type VehicleEnum =
        | 'Нет'
        | 'Поставщик зап. частей'
        | 'Автосервис'
        | 'Автомойка'
        | 'Шиномонтаж';

      export type FinanceOrganization =
        | 'Нет'
        | 'Банки'
        | 'Лизинговые'
        | 'Факторинговые'
        | 'Страховые';

      export type Segment =
        | 'АПК'
        | 'АЗС'
        | 'Трейдер'
        | 'ПП'
        | 'НГС'
        | 'СДО'
        | 'АТП';

      export type DeliveryType = 'Доставкой' | 'Самовывоз' | 'Комбинированно';
      export type Delay = 'Отсрочка' | 'Предоплата' | 'По факту';
      export type PaymentMethod =
        | 'Наличные'
        | 'Официально'
        | 'Наличные + официально';

      export type DeliveryProcedure =
        | 'Запрос принадлежности'
        | 'Свободно'
        | 'Тендер';

      export interface Persona {
        surname?: string | null;
        name?: string | null;
        patronymic?: string | null;
        gender?: string | null;
        source?: string | null;
        qc?: string | null;
      }

      export interface Management {
        name?: string;
        post?: string;
        disqualified?: string | null;
      }

      /**
       * Полная информации о компании, ее реквизиты и местоположение
       * Информация берется по запросу сайта. Поиск по названию или ИНН
       * @see https://dadata.ru/api/suggest/party/
       */
      export namespace Requisites {
        /**
         *  Статус компании
         */
        export interface State {
          status?: string;
          code?: string | number | null;
          actuality_date?: number;
          registration_date?: number;
          liquidation_date?: number | Date | null;
        }

        /**
         * ОРФ  компании
         */
        export interface OPF {
          type?: string;
          code?: string;
          full?: string;
          short?: string;
        }

        /**
         * Название компании
         */
        export interface Name {
          full_with_opf?: string;
          short_with_opf?: string;
          latin?: string | null;
          full?: string;
          short?: string;
        }

        /**
         * Детальная информация о местоположении компании
         */
        export interface Info {
          postal_code?: string;
          country?: string;
          country_iso_code?: string;
          federal_district?: string;
          region_fias_id?: string;
          region_kladr_id?: string;
          region_iso_code: string;
          region_with_type: string;
          region_type: string;
          region_type_full: string;
          region: string;
          area_fias_id: string | null;
          area_kladr_id: string | null;
          area_with_type: string | null;
          area_type: string | null;
          area_type_full: string | null;
          area: string | null;
          city_fias_id: string;
          city_kladr_id: string;
          city_with_type: string;
          city_type: string;
          city_type_full: string;
          city: string;
          city_area: string;
          city_district_fias_id: string | null;
          city_district_kladr_id: string | null;
          city_district_with_type: string;
          city_district_type: string;
          city_district_type_full: string;
          city_district: string;
          settlement_fias_id: string | null;
          settlement_kladr_id: string | null;
          settlement_with_type: string | null;
          settlement_type: string | null;
          settlement_type_full: string | null;
          settlement: string | null;
          street_fias_id: string;
          street_kladr_id: string;
          street_with_type: string;
          street_type: string;
          street_type_full: string;
          street: string;
          house_fias_id: string;
          house_kladr_id: string;
          house_cadnum: string | null;
          house_type: string;
          house_type_full: string;
          house: string;
          block_type: string | null;
          block_type_full: string | null;
          block: string | null;
          entrance: string | null;
          floor: string | null;
          flat_fias_id: string | null;
          flat_cadnum: string | null;
          flat_type: string | null;
          flat_type_full: string | null;
          flat: string | null;
          flat_area: string | null;
          square_meter_price: string | null;
          flat_price: string | null;
          postal_box: string | null;
          fias_id: string;
          fias_code: string;
          fias_level: string;
          fias_actuality_state: string;
          kladr_id: string;
          geoname_id: string;
          capital_marker: string;
          okato: string;
          oktmo: string;
          tax_office: string;
          tax_office_legal: string;
          timezone: string;
          geo_lat: string;
          geo_lon: string;
          beltway_hit: string;
          beltway_distance: string | null;
          metro: Array<any>;
          qc_geo: string;
          qc_complete: string | null;
          qc_house: string | null;
          history_values: string | null;
          unparsed_parts: string | null;
          source: string;
          qc: string;
        }

        /**
         * Адреса компании
         */
        export interface Address {
          value: string;
          unrestricted_value: string;
          data: Core.Company.Requisites.Info;
        }

        /**
         *  О компании и ее реквизиты
         */
        export interface CompanyUs {
          kpp?: string;
          capital?: string | null;
          citizenship?: string | null;
          fio?: Core.Company.Persona;
          management?: Core.Company.Management;
          founders?: string | null;
          managers?: string | null;
          predecessors?: string | null;
          successors?: string | null;
          branch_type?: string;
          branch_count?: number;
          source: string | null;
          qc?: string | null;
          hid?: string | null;
          type?: string;
          state?: Core.Company.Requisites.State;
          opf?: Core.Company.Requisites.OPF;
          name?: Core.Company.Requisites.Name;
          inn?: string;
          ogrn?: string;
          okpo?: string;
          okato?: string;
          oktmo?: string;
          okogu?: string;
          okfs?: string;
          okved?: string;
          okveds?: string | null;
          authorities?: string | null;
          documents?: string | null;
          licenses?: string | null;
          finance?: string | null;
          address?: Core.Company.Requisites.Address;
          phones?: string | null;
          emails?: string | null;
          ogrn_date?: number;
          okved_type?: string;
          employee_count?: number | string | null;
        }

        /**
         * Реквизиты компании
         * Информация берется по запросу сайта. Поиск по названию или ИНН
         * @see https://dadata.ru/api/suggest/party/
         */
        export interface CompanyName {
          value?: string;
          unrestricted_value?: string;
          data?: Core.Company.Requisites.CompanyUs;
        }
      }

      /**
       * Банковские данные
       */
      export interface Bank {
        correspondent: string;
        bank: string;
        bankAddress: string;
        bik: string;
        payment: string;
      }

      export interface UpdateData {
        id: string;
        data: Core.Company.Schema;
      }

      /**
       * Схема хранения данных в базе
       */
      export interface Schema {
        _id?: string;
        id?: string;
        /** Ответсвенный */
        owner: string;

        /** Тип объекта */
        object: 'company';

        active: boolean;
        permissions: string;
        tags: Array<string>;
        source: string;
        name: string;
        ownership: string | Core.Company.Ownership;
        clients: Array<string>;
        phoneNumber?: string;
        factLocation?: string;
        companyLocation?: string;
        postLocation?: string;
        fax?: string;
        phones?: Array<string>;
        employeesCount?: number;
        web?: string;
        requisites?: Core.Company.Requisites.CompanyName;
      }

      /**
       * Интерфейс для архивирования компании
       */
      export interface ArchiveData {
        id: string;
        active: boolean;
      }
    }

    export class Company {
      static Company: typeof Company;
    }

    // Core.Actives.Assets.fuelCustomer
    export namespace Actives {
      export interface Assets {
        fuelCustomer: string | Company.FuelCustomer;
        fuelSupplier: string | Company.FuelSupplier;
        fuelCarrier: boolean;
        vehicleType: string | Company.VehicleEnum;
        financeOrganization: string | Company.FinanceOrganization;
        otherGoods: string | null;
        otherServices: string | null;
        customerTU: string | null;
        segment: string | Company.Segment;
        delivery: string | Company.DeliveryType;
        delay: string | Company.Delay;
        delayDays: number;
        paymentMethod: string | Company.PaymentMethod;
        accessControl: boolean;
      }
    }
    export namespace Holding {
      export interface Stage {
        deliveryProcedure: string | Company.DeliveryProcedure;
        supplier: any;
        vehicles: any[];
        delivery: boolean;
        area: any;
      }
    }
  }
}
