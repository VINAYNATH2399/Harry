
/*
In object-oriented programming (OOP), a constructor is a special method or function that is automatically called when an object is created.
The purpose of a constructor is to initialize the object's state, allocate resources, or perform any setup tasks 
required for the object to be in a valid and usable state.

Here are some key points about constructors:

Name and Signature:

In many programming languages, including JavaScript, a constructor has the same name as the class or type it belongs to.
In JavaScript, a constructor is a function with the constructor name.

Initialization:

Constructors are responsible for initializing the attributes or properties of an object.
They set the initial values for the object's state.

Automatic Invocation:

Constructors are automatically invoked when an object is created.
In class-based languages, it is called implicitly when an object is instantiated using the new keyword.

Example in JavaScript:

In JavaScript, the class syntax was introduced in ECMAScript 2015 (ES6) to facilitate OOP-style programming.
*/

// Example  of a class with a constructor in JavaScript
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Other methods can be defined here
  }
  
  // Creating an object using the constructor
  const person1 = new Person('John Doe', 30);
  
  console.log(person1.name); // Output: John Doe
  console.log(person1.age);  // Output: 30


  //Example 2: Constructor with Default Values
 
  class Rectangle {
    constructor(width = 1, height = 1) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  // Creating an object with default values
  const rectangle1 = new Rectangle();
  console.log(rectangle1.calculateArea()); // Output: 1
  
  // Creating an object with specific values
  const rectangle2 = new Rectangle(5, 10);
  console.log(rectangle2.calculateArea()); // Output: 50

  //Example 3: Constructor with Instance Methods
  class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this.speed = 0;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`Accelerating! Current speed: ${this.speed} km/h`);
    }
  
    brake() {
      this.speed -= 5;
      console.log(`Braking! Current speed: ${this.speed} km/h`);
    }
  }
  
  // Creating a car object
  const myCar = new Car('Toyota', 'Camry');
  myCar.accelerate(); // Output: Accelerating! Current speed: 10 km/h
  myCar.brake();      // Output: Braking! Current spe


//Example 4: Constructor with Private Variables


class Counter {
  constructor() {
    // Private variable
    let count = 0;

    // Public method to increment the count
    this.increment = function () {
      count++;
      console.log(`Count: ${count}`);
    };
  }
}

// Creating a counter object
const myCounter = new Counter();
myCounter.increment(); // Output: Count: 1
myCounter.increment(); // Output: Count: 2