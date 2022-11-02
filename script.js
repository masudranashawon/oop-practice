"use strict";

// Functional prototypes
// Class-based prototypes
// Object.create() function

///////////////////////////////////////////
//  Lets Learn About Class
///////////////////////////////////////////
class Student {
  constructor(id, fullName, birthYear) {
    this.id = id;
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  get greet() {
    console.log(`Good Evening ${this.fullName}`);
  }
  get calcAge() {
    return console.log(`${this.fullName}'s age is ${2022 - this.birthYear}`);
  }

  //Privete fucntion
  static discountCouponCode() {
    return `MRS-35-84-57-94`;
  }
}

const masud = new Student(786, "Masud Rana", 1996);
const mehedi = new Student(78, "Md Mehedi", 1997);
masud.greet;
masud.calcAge;
mehedi.greet;
mehedi.calcAge;
console.log(Student.prototype === masud.__proto__);
console.log(Student.prototype.constructor);
console.log(Student.discountCouponCode());

//Others example
class CinemaHall {
  constructor(movieName, seatCount) {
    this.movieName = movieName;
    this.seatCount = seatCount;
    this.audience = [];
  }

  // setter
  // set seatCount(seats) {
  //   console.log(seats);
  // }

  //getter
  get ticketPrice() {
    return this.seatCount * 400;
  }

  audienceCount(name) {
    this.audience.push(name, this.movieName, this.seatCount);
  }
}

const sanjida = new CinemaHall("Captain America: First Avenger", 5);
const apurba = new CinemaHall("Inception", 5);

console.log(sanjida.ticketPrice);
console.log(apurba.ticketPrice);
sanjida.audienceCount("sanjida");
console.log(sanjida);
sanjida.seatCount;

/////////////////////////////////////////////
// Object.create()
/////////////////////////////////////////////

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },
};
const jessica = Object.create(PersonProto);
console.log(jessica);
jessica.userName = "Jessica Jennie";
jessica.birthYear = 1995;
jessica.calcAge();

///////////////////////////////////////////
// Constructor function
///////////////////////////////////////////

// 1. New {} will create
// 2. function will be called, this = {}
// 3. {} linked to prototype
// 4. function will automatically returns {}

// Class 1
function Person(nickName, birthYear) {
  this.nickName = nickName;
  this.birthYear = birthYear;
}

// Method of Class 1
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

Person.prototype.greet = function () {
  console.log(`Hello ${this.nickName} Welcome`);
};

// Obejct from Class 1
const sadia = new Person("Sadia", 2018);
const mamun = new Person("Mamun", 1998);

console.log(sadia);
console.log(mamun);
sadia.calcAge();
mamun.calcAge();

// Class 2
function Students(nickName, birthYear, department) {
  Person.call(this, nickName, birthYear);
  this.department = department;
}
Students.prototype = Object.create(Person.prototype);
const masudRana = new Students("Masud", 1996, "Accounting");
console.log(masudRana);
masudRana.calcAge();
masudRana.greet();
sadia.greet();
console.log(Person.prototype);
console.log(Students.prototype);
console.log(sadia instanceof Person);
console.log(Person.prototype);
console.log(mamun.__proto__ === Person.prototype);
console.log(Person.prototype === Person.prototype);
console.log(Person.prototype.isPrototypeOf(mamun));
console.log(Person.prototype.isPrototypeOf(sadia));
console.log(Person.prototype.isPrototypeOf(Person));

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(Array.prototype);

const arr = [5, 4, 2, 5, 4, 2, 1, 3, 2, 2, 4, 5];
console.log(arr.unique());
const h1 = document.querySelector("h1");
console.dir(h1);

/////////////////////////////////////////////
//  ES6 classes
/////////////////////////////////////////////

class FoodballPlayer {
  #tokenNum;
  #password = 1234;
  constructor(nickName, birthYear, jerseyNum, rating, tokenNum) {
    this.nickName = nickName;
    this.birthYear = birthYear;
    this.jerseyNum = jerseyNum;
    this.rating = rating;
    this.#tokenNum = tokenNum;
    this.#greet();
    this.#playerRating();
    this.#calcAge();
  }

  #calcAge() {
    console.log(`${this.nickName} is ${2022 - this.birthYear} years old.`);
  }

  #greet() {
    console.log(`Welcome Dear ${this.nickName}`);
  }

  #playerRating() {
    console.log(`${this.nickName} has ${this.rating} ratings.`);
  }
}

const messi = new FoodballPlayer("Messi", 1987, 10, 95, "LM10-007");
const diMaria = new FoodballPlayer("Di María", 1988, 11, 90, "DM11-847");

console.log(messi);
console.log(diMaria);

class Captain extends FoodballPlayer {
  constructor(nickName, birthYear, jerseyNum, rating, tokenNum, bandColor) {
    super(nickName, birthYear, jerseyNum, rating, tokenNum);
    this.bandColor = bandColor;
  }
}

const neymar = new Captain("Neymar", 1992, 10, 94, "NJR10-395");
