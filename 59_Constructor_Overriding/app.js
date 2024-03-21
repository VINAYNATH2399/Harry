
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      // Call the parent constructor using super
      super(name);
  
      // Additional properties for Dog
      this.breed = breed;
    }
  
    // Override the speak method
    speak() {
      console.log(`${this.name} barks!`);
    }
  }
  
  // Creating instances
const animal = new Animal('Generic Animal');
const dog = new Dog('Buddy', 'Golden Retriever');
  
animal.speak(); // Output: Generic Animal makes a sound.
dog.speak();    // Output: Buddy barks!


  
