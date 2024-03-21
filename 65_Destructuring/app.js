
//It seems there might be a bit of confusion in your question.
//Destructuring in JavaScript is typically associated with objects or arrays, and it's a way to extract values from them into distinct variables. However, when it comes to functions, you might be referring to function parameters or return values.

//Let's explore both scenarios:

//Destructuring Function Parameters:

//Object Destructuring in function parameters
function example({ prop1, prop2 }) {
    console.log(prop1, prop2);
}

const myObject = { prop1: 'value1', prop2: 'value2' };
example(myObject);


//Destructuring Function Return Values:

// Object Destructuring in function return values
function getObject() {
    return { prop1: 'value1', prop2: 'value2' };
}

const { prop1, prop2 } = getObject();
console.log(prop1, prop2);


//Array Destructuring in Function Parameters:

// Array Destructuring in function parameters
function example1([item1, item2]) {
    console.log(item1, item2);
}

const myArray = ['value1', 'value2'];
example1(myArray);

//Array Destructuring in Function Return Values:

// Array Destructuring in function return values
function getArray() {
    return ['value1', 'value2'];
}

const [item1, item2] = getArray();
console.log(item1, item2);

