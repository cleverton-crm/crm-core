declare module 'crm-core' {
  export namespace Core {
    /** Техника компании */
    export namespace Cars {
      /** Составные части модели для техники */
      export interface VehicleData {
        /** Данные тягача */
        tractor: any;

        /** Данные ппц */
        semitrailer: any;
      }

      /** Модель техники компании */
      export interface Schema {
        /** ID компании */
        companyId: string;

        /** Марка, модель */
        model: Core.Cars.VehicleData;

        /** Гос. номер */
        govNumber: Core.Cars.VehicleData;

        /** VIN */
        vin: Core.Cars.VehicleData;

        /** Тип ТС */
        typeTS: Core.Cars.VehicleData;

        /** Год выпуска */
        issueYear: Core.Cars.VehicleData;

        /** Шасси (рама)*/
        chassis: Core.Cars.VehicleData;

        /** Кузов (кабина, прицеп) */
        carcase: Core.Cars.VehicleData;

        /** Цвет */
        color: Core.Cars.VehicleData;

        /** Мощность двигателя */
        enginePower: Core.Cars.VehicleData;

        /** Технически допусимая max масса, кг */
        maxMass: Core.Cars.VehicleData;

        /** Масса в снаряженном состоянии, кг */
        curbWeight: Core.Cars.VehicleData;

        /** Собственник */
        ownerCar: Core.Cars.VehicleData;

        /** Калибровка (общий объем / секционно) */
        calibration: Core.Cars.VehicleData;
      }
    }
  }
}
