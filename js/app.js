// Object Constructor

function Client(name, balance) {
    this.name = name;
    this.balance = balance;
}

// Attrach the prototype to the method
Client.prototype.membership = function() {
    let name;

    // Check for the balance
    if (this.balance > 1000) {
        name = 'Gold';
    } else if (this.balance > 500) {
        name = 'Platinum'
    } else {
        name = 'Bronze'
    }
    return name;
}

// Second prototype withe the name and the balance
Client.prototype.clientInfo = function() {
    return `Name: ${this.name}, Balance: ${this.balance}, Membersip: ${this.membership()}`
}

// Another method to withdraw money from the accoun
Client.prototype.withdraw = function(amount) {
    this.balance -= amount;
}

// Create a deposite method
Client.prototype.deposit = function(amount) {
    this.balance += amount;
}

// Check che balance
Client.prototype.getBalance = function() {
    return this.balance;
}

const persone = new Client('Andrey', 2000),
      persone2 = new Client('Sveta', 600);


console.log(persone);
console.log(persone.membership());
console.log(persone.clientInfo());



// String
const name1 = 'Sveta';
const name2 = new String('Sveta');

console.log(name1);
console.log(name2);

if (name1 === name2) {
    console.log('Yes');
} else {
    console.log('No');
}

// Numbers

const number1 = 20;
const number2 = new Number(20);

console.log(number1);
console.log(number2);

// Booleans
const boolean1 = true;
const boolean2 = new Boolian(false);

console.log(boolean1);
console.log(boolean2);

// Functions
const function1 = function(a, b) {
    return a + b;
}
const function2 = new Function('a', 'b', 'return a + b') {

}

console.log(function1(2,3));
console.log(function2(5,5));

// Object
const persone3 = {name: 'Andrey'};
const persone4 = new Object({name: 'Sveta'});

console.log(persone3);
console.log(persone4);

// Arrays

const array1 = [1,2,3,4];
const array2 = new Array(1,2,3,4,5);

console.log(array1);
console.log(array2);