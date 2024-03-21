// JavaScript uses a variety of operators to perform different operations on variables and values. Here's an overview of the main types of operators in JavaScript:

// Arithmetic Operators:

// + (Addition)
// - (Subtraction)
// * (Multiplication)
// / (Division)
// % (Modulus - returns the remainder of a division)


let a = 10;
let b = 3;
let sum = a + b; // 13
let difference = a - b; // 7
let product = a * b; // 30
let quotient = a / b; // 3.333...
let remainder = a % b; // 1

// Assignment Operators:

// = (Assignment)
// += (Addition assignment)
// -= (Subtraction assignment)
// *= (Multiplication assignment)
// /= (Division assignment)

let x = 5;
x += 3; // x is now 8
x -= 2; // x is now 6
x *= 4; // x is now 24
x /= 3; // x is now 8

// Comparison Operators:

// == (Equality, type coercion)
// === (Equality, strict comparison)
// != (Inequality, type coercion)
// !== (Inequality, strict comparison)
// > (Greater than)
// < (Less than)
// >= (Greater than or equal to)
// <= (Less than or equal to)

let c = 5;
let d = "5";

console.log(c == d); // true (type coercion)
console.log(c === d); // false (strict comparison)
console.log(c != d); // false (type coercion)
console.log(c !== d); // true (strict comparison)

// Logical Operators:

// && (Logical AND)
// || (Logical OR)
// ! (Logical NOT)

let x1 = true;
let y1 = false;

console.log(x1 && y1); // false (AND)
console.log(x1 || y1); // true (OR)
console.log(!x1); // false (NOT)

// Increment/Decrement Operators:
// ++ (Increment)
// -- (Decrement)

let counter = 2;
counter++; // Increment by 1 (counter is now 3)
counter--; // Decrement by 1 (counter is now 2)

// String Concatenation Operator:
// + (Concatenates strings)

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"