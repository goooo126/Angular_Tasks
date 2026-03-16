// 1 => array with only numbers
let numbers: number[];
let numbers1: Array<number>;
// ===================================================

// 2 => array with (number, string) and print it
let arr: (number | string)[] = [];
arr.push('test');
arr.push(1);
arr.push('test1');
arr.push(2);

arr.forEach((item) => console.log(item));

// ===================================================

// 3 => Create a variable that accepts number and boolean only

let value: number | boolean;

value = 10;
value = true;

type myType = number | boolean;

let value2: myType;
value2 = 1;
value2 = false;

// ===================================================

// 4 => create funtion

function greeting(name: string): string {
  return `Welcome to our website ${name}`;
}

function greeting1(name: string, firstTime?: boolean): string {
  if (firstTime !== undefined) {
    return `Welcome for first time in our website ${name}`;
  }
  return `Welcome back ${name}`;
}

function greeting2(name: string, firstTime: boolean = true): string {
  if (firstTime) {
    return `Welcome for first time in our website ${name}`;
  }
  return `Welcome back ${name}`;
}
// ===================================================

// 5 => Create class Employee that implements IEmployee using this object

interface IGeo {
  lat: string;
  lng: string;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface IEmployee {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
}

class Employee implements IEmployee {
  id: number;
  name: string;
  private _username: string;
  email: string;
  address: IAddress;

  constructor(emp: IEmployee) {
    this.id = emp.id;
    this.name = emp.name;
    this._username = emp.username;
    this.email = emp.email;
    this.address = emp.address;
  }

  get username(): string {
    return this._username;
  }
}

const emp1 = new Employee({
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
});

console.log(emp1);

// ===================================================

// 6 => Create class Manager that inherits from the Employee class
class Manager extends Employee {
  constructor(emp: IEmployee) {
    super(emp);
  }

  viewAddress(): string {
    const addr = this.address;
    return `${addr.street}, ${addr.suite}, ${addr.city}, ${addr.zipcode}`;
  }
}

const manger1 = new Manager({
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
});

manger1.viewAddress();

// ===================================================

// 7 => Implement the following UML diagram
interface IAccount {
  dateOfOpening: number;
  addCustomer(): void;
  removeCustomer:() => void;
}

class Account {
  accountNo: number;
  balance: number;
  constructor(acounNo:number, bal:number) {
    this.accountNo = acounNo;
    this.balance = bal;
  }

  debitAmount(amount: number): void {
    console.log(`debit amount: ${amount}`);
  }

  creditAmount(amount: number): void {
    console.log(`credit amount: ${amount}`);
  }

  getBalance(): void {
    console.log(`credit amount: ${this.balance}`);
  }
}

class SavingAccount extends Account implements IAccount {
  dateOfOpening: number;

  constructor(accountNo: number, balance: number, dateOfOpening: number) {
    super(accountNo, balance);
    this.dateOfOpening = dateOfOpening;
  }

  addCustomer(): void {
    console.log("Customer added to Saving Account");
  }

  removeCustomer(): void {
    console.log("Customer removed from Saving Account");
  }

  minBalance():void{
    console.log(`min balance`);
  }
}


class CurrentAccount extends Account implements IAccount {
  dateOfOpening: number;

  constructor(accountNo: number, balance: number, dateOfOpening: number) {
    super(accountNo, balance);
    this.dateOfOpening = dateOfOpening;
  }

  addCustomer(): void {
    console.log("Customer added to Saving Account");
  }

  removeCustomer(): void {
    console.log("Customer removed from Saving Account");
  }

  intersetRate():void{
    console.log('interst rate');
  }
}
// ===================================================
