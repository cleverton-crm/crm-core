declare module 'crm-core' {
  export namespace Deals {
    export interface Info {
      name: string;
      sum: number | 0;
      fuelType: string | null;
      owner: any;
      permissions: any;
      ownership: string | Company.Ownership;
      dealCreated: Date;
      fuelAmount: number | 0;
      tags: string | null;
      fullname: string | null;
      source: string | null;
    }
  }

  export class Deals {
    static Deals: typeof Deals;
  }
}
