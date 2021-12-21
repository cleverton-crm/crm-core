declare namespace Personal {
  export interface Object {
    [key: string]: any;
  }
  
  export interface Passport extends Object {
    series: string
    number: string
    dateOfIssue: Date
  }
  
  export interface Requisites extends Object {
    invoiceNumber: string // Номер счета
  }
  
  export type AccountRole = 'admin' | 'manager'
  
  export interface Persona {
    owner: string
    firstName: string | null
    lastName: string | null
    middleName?: string | null
    phoneNumber: string
    birthDate: Date
    startDate: Date // Дата начала работы
    passport: Passport
    email: string | null
    requisites: Requisites
    role: AccountRole
  }
}
