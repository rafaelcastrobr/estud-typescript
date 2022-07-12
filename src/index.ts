// inferencia x annotation

let y = 12
//
let z : number = 12

// tipos básicos
let firstName: string = "Rafael"
let age: number = 30
const isAdmin: boolean = true

// String != string

console.log(typeof firstName)

// object
const myNumbers: number[] = [1, 2, 3]


// tuplas 
let myTuple: [number, string, string[]]

myTuple = [1, "01", ["1", "1"]]

// object literals => {prop: value}

const user: {name: string, age: number, job: string} = {
  name: "Rafael",
  age: 12,
  job: ''
}

user.job = "Programador"
console.log(user)

// any !!NAO UTILIZAR!!
let a:any = 0

a = "teste"
a = true;
a = []

// union type
let id: string | number = "10"
id = 10

// type alias
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = '0001'
const shirId: myIdType = 0

// enum
// tamanho de roupas (size: médio, size: pequeno)

enum Size {
  p = "Pequeno",
  m = "Médio",
  g = "Grande"
}

const camisa = {
  name: "Camisa polo",
  size: Size.p
}

console.log(camisa)

// literal types
let teste: 'autenticado' | null

teste = "autenticado"
teste = null

// functions
function sum (a:number, b:number) {
  return a * b
}

//console.log(sum(3, 10))

function sayHelloTo(name: string): string {
  return `Hello ${name}`
}

//console.log(sayHelloTo('Fabio'))

function greeting (name: string, greet?: string) {
  if(greet) {
    console.log(`Olá: ${greet} ${name}`)
  } else {
    console.log(`Olá: ${name}`)
  }
  
}

greeting("JOsé", "Srr")

// interface 
interface MAthFunctionParams {
  n1: number,
  n2: number
}

function sumNumbers(nums: MAthFunctionParams) {
  return nums.n1 + nums.n2
}

console.log(sumNumbers({ n1: 1, n2: 2}))

// narrowing
// checagem tipos
function doSomething(info: number | boolean){ 
  if(typeof info === 'number') {
    console.log(`O número é ${info}`)
    return;
  }
  console.log('Não foi passado um número')
}

doSomething(true)

// generics
function showArrayItems<T>(arr: T[]) {
  arr.forEach(item => {
    console.log(`Item: ${item}`)
  })
}

const a1 = [1,2,3];
const a2 = ["a", 2, "c"];

showArrayItems(a1)
showArrayItems(a2)

// classes

class User {
  name
  role
  isApproved


  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name
    this.role = role
    this.isApproved = isApproved
  }

  showUserName () {
    console.log(`O nome do úsuario é ${this.name}`)
  }

  showUserRole (canShow: boolean) {
    if(canShow) {
      console.log(`O úsuario é: ${this.role}`)
      return
    }
    console.log("Informação restrita")
  }

}

const zeca = new User('Zeca', 'Admin', true)

console.log(zeca)

zeca.showUserName()
zeca.showUserRole(true)

// interfaces em classes
interface IVehicle {
  brand: string
  showBrand(): void
}

class Car implements IVehicle {
  brand
  wheels

  constructor(brand: string, wheels: number) {
    this.brand = brand
    this.wheels = wheels
  }

  showBrand(): void {
    console.log(`A fabricante do carro é ${this.brand}`)
  }
}

const fusca = new Car("VW", 4)

fusca.showBrand()

// heranca 
class SuperCar extends Car {
  engine

  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels) 
    this.engine = engine
  }
}

const a4 = new SuperCar("Audi", 4, 3.0)

console.log(a4)
a4.showBrand()

//decorations

//constructor decorations
function BaseParamters() {
  return function <T extends { new (...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
      id = Math.random()
      createdAt = new Date()
    }
  }
}

@BaseParamters()
class Person {
  name

  constructor(name: string) {
    this.name = name
  }
}

const sam = new Person("Sam")
console.log(sam)