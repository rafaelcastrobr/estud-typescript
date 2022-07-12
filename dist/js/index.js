"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let y = 12;
let z = 12;
let firstName = "Rafael";
let age = 30;
const isAdmin = true;
console.log(typeof firstName);
const myNumbers = [1, 2, 3];
let myTuple;
myTuple = [1, "01", ["1", "1"]];
const user = {
    name: "Rafael",
    age: 12,
    job: ''
};
user.job = "Programador";
console.log(user);
let a = 0;
a = "teste";
a = true;
a = [];
let id = "10";
id = 10;
const userId = 10;
const productId = '0001';
const shirId = 0;
var Size;
(function (Size) {
    Size["p"] = "Pequeno";
    Size["m"] = "M\u00E9dio";
    Size["g"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa polo",
    size: Size.p
};
console.log(camisa);
let teste;
teste = "autenticado";
teste = null;
function sum(a, b) {
    return a * b;
}
function sayHelloTo(name) {
    return `Hello ${name}`;
}
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá: ${greet} ${name}`);
    }
    else {
        console.log(`Olá: ${name}`);
    }
}
greeting("JOsé", "Srr");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function doSomething(info) {
    if (typeof info === 'number') {
        console.log(`O número é ${info}`);
        return;
    }
    console.log('Não foi passado um número');
}
doSomething(true);
function showArrayItems(arr) {
    arr.forEach(item => {
        console.log(`Item: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", 2, "c"];
showArrayItems(a1);
showArrayItems(a2);
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do úsuario é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`O úsuario é: ${this.role}`);
            return;
        }
        console.log("Informação restrita");
    }
}
const zeca = new User('Zeca', 'Admin', true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(true);
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A fabricante do carro é ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 3.0);
console.log(a4);
a4.showBrand();
function BaseParamters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParamters()
], Person);
const sam = new Person("Sam");
console.log(sam);
