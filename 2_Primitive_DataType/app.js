// ------------  Primitive Datatype --------------

// Primitive DataType:- Primitive data types in JavaScript 
// are simple, immutable data types that are directly operated upon. They are the most basic data types and are not objects. In JavaScript, 
// there are six primitive data types:

// Number: Represents both integer and floating-point numbers.
// let num = 42;       // integer
// let pi = 3.14;      // floating-point number

// String: Represents a sequence of characters.
// let str = "Hello, World!";

// Boolean: Represents a logical value – either true or false.
// let isTrue = true;
// let isFalse = false;

// Undefined: Represents the absence of a value or an uninitialized variable.
// let undefinedVar;

// Null: Represents the intentional absence of any object value.
// let nullVar = null;

// Symbol:Represents a unique and immutable identifier. Introduced in ECMAScript 6 (ES6).
// let sym = Symbol("uniqueSymbol");


//let nn bb ss u
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567")
let e = Symbol("I am a nice symbol")
let g = undefined;
console.log(a,b,c,d,e,g);

console.log(typeof(a)); // output: object
console.log(typeof(b)); // output: number
console.log(typeof(c)); // output: boolean
console.log(typeof(d)); // output: bigint
console.log(typeof(e)); // output: symbol
console.log(typeof(f)); // output: undefined


// ------------ non primitive datatype ------

let student = {
    name1 : "vinay",
    age : 24,
    hobby : "music",
    "city" : "korba"
}

console.log(student);
console.log(student.name1);
console.log(student.age);
console.log(student.hobby);
console.log(student.music);
console.log(student.city)

console.log(student["name1"]);
console.log(student["age"]);