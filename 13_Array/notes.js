/*
In JavaScript, an array is a data structure that stores a collection of elements. Arrays can hold values of any data type, including numbers, strings, objects, and even other arrays. Here's a basic overview of how arrays work in JavaScript:

Declaring an Array:
You can declare an array using the Array constructor or using the array literal notation ([]).


// Using Array constructor
let myArray = new Array();

// Using array literal notation
let myArray = [];
Initializing an Array:
You can initialize an array with values at the time of declaration:


let fruits = ['apple', 'orange', 'banana'];
let numbers = [1, 2, 3, 4, 5];
Accessing Elements:
You can access elements in an array using square bracket notation with the index. Note that array indices start at 0.


console.log(fruits[0]); // Output: 'apple'
console.log(numbers[2]); // Output: 3
Modifying Elements:
You can modify elements in an array by assigning a new value to a specific index.


fruits[1] = 'grape';
console.log(fruits); // Output: ['apple', 'grape', 'banana']
Array Methods:
JavaScript provides several built-in methods for working with arrays. Here are a few examples:

push: Adds elements to the end of an array.


fruits.push('kiwi');
console.log(fruits); // Output: ['apple', 'grape', 'banana', 'kiwi']
pop: Removes the last element from an array.


fruits.pop();
console.log(fruits); // Output: ['apple', 'grape', 'banana']
length: Returns the number of elements in an array.


console.log(fruits.length); // Output: 3
indexOf: Returns the index of the first occurrence of a specified element in an array.


console.log(fruits.indexOf('grape')); // Output: 1
slice: Returns a shallow copy of a portion of an array.


let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ['grape', 'banana']

*/






