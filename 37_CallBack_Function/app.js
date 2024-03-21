
// Syncronous programming
// let a = prompt("What is your Name")
// let b = prompt("What is your age")
// let c = prompt("What is your favourite color?")
// console.log(a + " is "+b+ " years old and has " + c + " favourite color." );

// Asyncronous programming

// console.log("start");

// setTimeout(function(){
//     console.log("hey i am good");
// },3000);

// console.log("end");


// Callback function

//In JavaScript, a callback function is a function that is passed as an argument 
//to another function and is intended to be executed after the completion of a specific task 
//or at a certain event. Callback functions are commonly used in asynchronous programming,
// where operations like reading a file, making an HTTP request, or handling user input may take some time to complete.

// Example 1: Synchronous callback
function great(name, callback){
    console.log("hello, "+ name + "!");
    callback();
}

function sayGoodbye(){
    console.log("Goodbye!");
}

great("Vinay", sayGoodbye);


// Example 2: Asynchronous callback (using setTimeout)
function doSomethingAsync(callback){
    setTimeout(function(){
        console.log("Task completed after 2 seconds");
        callback();
    }, 3000);
}

function afterTask(){
    console.log("Callback function executed");
}

doSomethingAsync(afterTask)