
/* 
In JavaScript, the try and catch blocks are used for handling exceptions (errors)
 that may occur during the execution of code. 
 The try block contains the code that might throw an exception,
  and the catch block contains the code to handle the exception 
  if it occurs.
*/

// Example 1 

// console.log("mai phele");
// setTimeout(()=>{
//     console.log("first");
// }, 1000)

// try{
//     console.log(vinay);
// }
// catch(error){
//     console.log(error);
// }

// console.log("mai baad mai");

// setTimeout(()=>{
//     console.log("last");
// }, 5000)

// Example 2

// try{
//     let value = 10/0;
//     console.log(value);
// }

// catch(error){
//     console.log(error);
// }

// finally{
//     console.log("Finally Block");
// }

// Example 3

try {
    // Code that might throw an exception
    var result = 10 / 0; // This will throw a division by zero exception
    console.log(result); // This line will not be executed if an exception occurs
  } catch (error) {
    // Code to handle the exception
    console.error("An error occurred: " + error.message);
  } finally {
    // Code that will be executed regardless of whether an exception occurred or not
    console.log("Finally block executed");
  }
  

  /* 
  In this example:

The code inside the try block attempts to perform a division by zero, 
which will throw an exception.

If an exception occurs, the control will be transferred to the catch block,
 and the error object will be caught in the error parameter.

The finally block, if present, will be executed regardless of whether an 
exception occurred or not. It's optional and can be omitted.
  */

  
