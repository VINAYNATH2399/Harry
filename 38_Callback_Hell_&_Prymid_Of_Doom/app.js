
// Callback hell, also known as "Pyramid of Doom," is a situation that arises in asynchronous programming 
//when multiple nested callbacks are used, leading to code that is difficult to read and maintain.
// This typically happens in languages that rely heavily on callbacks for handling asynchronous operations, such as JavaScript.

// Callback hell example using setTimeout

console.log('start');

setTimeout(function(){
    console.log("First opeartion completed");
    setTimeout(function(){
        console.log("Second opeartion completed");
        setTimeout(function(){
            console.log("Third opeartion completed");
            setTimeout(function(){
                console.log("All opeartion completed")
            }, 2000)
        }, 3000)
    }, 4000)
}, 5000)

//------------------------------
/*
disadvantages of callback hell:

Readability and Maintainability:

Callback hell results in deeply nested and indented code, reducing readability.
Code becomes difficult to understand and maintain as the number of nested callbacks increases.

Difficulty in Error Handling:

Error handling becomes challenging, with repeated error-handling code in each callback.
Identifying and tracing errors in deeply nested callbacks can be problematic.

Inversion of Control:

Callback-based code suffers from an inversion of control, making the flow of control scattered and harder to follow.

Callback Pyramid Growth:

Asynchronous code complexity grows with more operations, leading to an unmanageable callback pyramid.

Less Expressive Code:

Callback hell can make code more verbose and less expressive, hindering the clear expression of intent.

Difficulty in Unit Testing:

Unit testing becomes cumbersome with deep callback nesting, requiring complex mocking and handling of multiple layers of callbacks.

*/


