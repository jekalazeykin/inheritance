//ES6

class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super (name);
  }
  bark() {
    return `Dog ${this.name} is barking`;
  }
}

let dog = new Dog('Grey');

console.log(dog.getName() === 'Grey');
console.log(dog.bark() === 'Dog Grey is barking');

console.log(dog.getName());
console.log(dog.bark());

//ES5

function AnimalEs5(name) {
  this.name = name;

  this.getName = function() {
    return name;
  }
}

function DogEs5(name) {
  this.bark = function() {
    return 'Dog ' + this.name + ' is barking';
  }
}

var animal = new AnimalEs5('David');

DogEs5.prototype = animal;

var david = new DogEs5();

console.log(david.getName() === 'David');
console.log(david.bark() === 'Dog David is barking');

console.log(david.getName());
console.log(david.bark());
