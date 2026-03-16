// 1 => array with only numbers
let numbers;
let numbers1;
// ===================================================
// 2 => array with (number, string) and print it
let arr = [];
arr.push('test');
arr.push(1);
arr.push('test1');
arr.push(2);
arr.forEach((item) => console.log(item));
// ===================================================
// 3 => Create a variable that accepts number and boolean only
let value;
value = 10;
value = true;
let value2;
value2 = 1;
value2 = false;
// ===================================================
// 4 => create funtion
function greeting(name) {
    return `Welcome to our website ${name}`;
}
function greeting1(name, firstTime) {
    if (firstTime !== undefined) {
        return `Welcome for first time in our website ${name}`;
    }
    return `Welcome back ${name}`;
}
function greeting2(name, firstTime = true) {
    if (firstTime) {
        return `Welcome for first time in our website ${name}`;
    }
    return `Welcome back ${name}`;
}
class Employee {
    constructor(emp) {
        this.id = emp.id;
        this.name = emp.name;
        this._username = emp.username;
        this.email = emp.email;
        this.address = emp.address;
    }
    get username() {
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
    constructor(emp) {
        super(emp);
    }
    viewAddress() {
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
class Account {
    constructor(acounNo, bal) {
        this.accountNo = acounNo;
        this.balance = bal;
    }
    debitAmount(amount) {
        console.log(`debit amount: ${amount}`);
    }
    creditAmount(amount) {
        console.log(`credit amount: ${amount}`);
    }
    getBalance() {
        console.log(`credit amount: ${this.balance}`);
    }
}
class SavingAccount extends Account {
    constructor(accountNo, balance, dateOfOpening) {
        super(accountNo, balance);
        this.dateOfOpening = dateOfOpening;
    }
    addCustomer() {
        console.log("Customer added to Saving Account");
    }
    removeCustomer() {
        console.log("Customer removed from Saving Account");
    }
    minBalance() {
        console.log(`min balance`);
    }
}
class CurrentAccount extends Account {
    constructor(accountNo, balance, dateOfOpening) {
        super(accountNo, balance);
        this.dateOfOpening = dateOfOpening;
    }
    addCustomer() {
        console.log("Customer added to Saving Account");
    }
    removeCustomer() {
        console.log("Customer removed from Saving Account");
    }
    intersetRate() {
        console.log('interst rate');
    }
}
// ===================================================
