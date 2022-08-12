// JavaScript OOP with Examples

// First Class 
class Animal {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return (
      `The name of the animal is
      ${this.name} and age is ${this.age}`
    )
  }
}


// First Instances 
const firstAnimal = new Animal('Rex', 2)
console.log(firstAnimal);
console.log(firstAnimal.getInfo())

const secondAnimal = new Animal('Barney', 5)
console.log(secondAnimal);
console.log(secondAnimal.getInfo());



// Inheritance 
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age)
    this.breed = breed
  }

  bark(){
    return 'woof'
  }
}

class Cat extends Animal {
  constructor(name, age, weight){
    super(name, age)
    this.weight = weight
  }
}

const myDog = new Dog('Rex', 2, 'German Shepard')
console.log(myDog.getInfo());
console.log(myDog.breed);
console.log(myDog.bark());

const myCat = new Cat('Whisker', 5, '5kg')
console.log(myCat.getInfo());
console.log(myCat.weight);



// Encapsulation 
class Rabbit extends Animal {
  #weight;
  constructor(name, age, weight) {
    super(name, age)
    this.#weight = weight
  }

  getWeight() {
    return this.#weight
  }

  setWeight(weight){
    this.#weight = weight
  }
}

const myRabbit = new Rabbit('Whiskers', 5, '5kg')
console.log(myRabbit.getWeight());
myRabbit.setWeight('6kg')
console.log(myRabbit.getWeight());


// Polymorphism 
class Animals {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  makeSound() {
    return (
      `Some Nice Sound Made`
    )
  }
}

class Tia extends Animals {
  constructor(name, age, breed) {
    super(name, age)
    this.breed = breed
  }

  makeSound() {
    return 'Hey!'
  }
}

class Mankey extends Animals {
  constructor(name, age, weight) {
    super(name, age)
    this.weight = weight
  }

  makeSound() {
    return 'Hoew'
  }
}

const myTia = new Tia ('Rex', 2, 'Smith')
const myMankey  = new Mankey ('Whiskers', 9, '5kg')

console.log(myTia.makeSound());
console.log(myMankey.makeSound());


// Abstract Class P1
class Animal2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    if(this.constructor == Fish){
      throw new Error("Can't create a instance of Abstract Class");
    }
  }

  makeSound() {
    throw new Error("Abstract method doesn't have a implementation");
  }
}


// Abstract Class P2
class Doggy extends Animal {
  constructor(name, age, breed) {
    super(name, age)
    this.breed = breed
  }

  makeSound() {
    return 'woof'
  }
}


class Catty extends Animal {
  constructor(name, age, weight) {
    super(name, age)
    this.weight = weight
  }
}

const myDoggy = new Doggy ('Rex', 2, 'German Sh.')
const myCatty = new Catty ('Whiskers', 5, '7kg')