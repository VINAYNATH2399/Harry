
//Getters and Setters:
//Getters and setters are special methods in JavaScript 
//that allow you to control access to the properties of an object.

//Getters:
//A getter is a method that gets the value of a specific property.
//It is defined using the get keyword.

class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  get area() {
    return Math.PI * this._radius ** 2;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.radius); // Output: 5
console.log(myCircle.area);   // Output: 78.53981633974483

//In this example, radius and area are getter methods. You access them like regular properties, but they are computed on-the-fly.


//Setters:
//A setter is a method that sets the value of a specific property. 
//It is defined using the set keyword.

class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(newRadius) {
    if (newRadius > 0) {
      this._radius = newRadius;
    } else {
      console.log("Radius must be greater than 0.");
    }
  }
}

const myCircle1 = new Circle(5);
console.log(myCircle1.radius); // Output: 5

myCircle1.radius = 8;
console.log(myCircle1.radius); // Output: 8

myCircle1.radius = -3; // Output: "Radius must be greater than 0."

//In this example, the radius setter checks if the new radius is greater than 0 before updating the value.


//instanceof Operator:
//The instanceof operator in JavaScript is used to check if an object is an instance of a particular class or constructor function.


class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const myDog = new Dog("Buddy");

console.log(myDog instanceof Dog);     // Output: true
console.log(myDog instanceof Animal);  // Output: true
console.log(myDog instanceof Object);  // Output: tr



