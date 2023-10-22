class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  display() {
    console.log(`${this.name} is ${this.breed}`);
  }

}

const dog = new Dog('Spot', 'Golden Retriever');
dog.display();
dog.eat();