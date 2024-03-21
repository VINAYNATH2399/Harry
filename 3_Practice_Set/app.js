
// Q1 Create a variable of type string and try to add a number to it

// Creating a variable of type string
let a = "vinay";
// Adding a number to the string (implicitly concatenating)
let b = 24;
let c = a+b;
console.log(c);


let name = "chintu";
let age = name + 23;
console.log(age);

// Q2 Use typeof operator to find the datatype of the string in last question.

console.log(typeof(c));
console.log(typeof(age));

// Q3 Create a const object in javascript Can you change it to find a number later?

// Creating a const object
// const a = {
//     name: "John",
//     age: 25
//   };
  
  // Modifying a property of the object
//   a = 25;
  
  // Logging the updated object
  //console.log(a);  // error
 
// Q4 Try to add a new key to the const object in Problem 3 were you able to add and change?

const firstname = {
    name: "John",
    age: 25
  };

// Adding a new key to the object
firstname["surname"]= "nath",
firstname.hobby = "running",

// changing value in object
firstname.hobby = "cricket" 
firstname['age'] = "29" 

console.log(firstname);

// Q5 Write a js program to create a word menaing dictionary of 5 words.

 
const wordDictionary = {
    apple: "a round fruit with red or green skin and a whitish interior",
    "book": "a set of written or printed pages, usually bound with a protective cover",
    "elephant": "a large herbivorous mammal with a trunk, big ears, and tusks",
    "computer": "an electronic device for storing and processing data",
    ocean: "a vast expanse of saltwater that covers most of the Earth's surface"
  };

  console.log(wordDictionary['apple']);
  console.log(wordDictionary.computer);