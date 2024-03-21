
// In JavaScript, a promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises are a way to handle asynchronous operations more easily and avoid callback hell. A promise can be in one of three states:

//Pending: The initial state; the promise is neither fulfilled nor rejected.

//Fulfilled: The operation completed successfully, and the promise has a resulting value.

//Rejected: The operation failed, and the promise has a reason for the failure.

// Example:- 1

let mypromise = new Promise((resolve, reject)=>{
    setTimeout(function(){
        const success = true;
        if(success){
            resolve("Operation Sucessful")
        }
        else{
            reject("Operation Failed")
        }
    }, 2000);
})
console.log(mypromise);

// Example:- 2

let promise = new Promise(function(resolve, reject){
    alert("hello")
    resolve(56)
})

console.log(promise);

console.log("Mai phela");
setTimeout(function(){
    console.log("I am waiting for 3sec");
}, 3000)

console.log("End");

/*
In this example, the Promise constructor takes a function with two parameters: 
resolve and reject. Inside this function, you perform your asynchronous operation. 
If the operation is successful, you call resolve with the result; 
if it fails, you call reject with an error.
*/


// ----- Why we use promise

// Callback hell example using setTimeout

console.log('Start');

setTimeout(() => {
  console.log('First operation completed');

  setTimeout(() => {
    console.log('Second operation completed');

    setTimeout(() => {
      console.log('Third operation completed');

      setTimeout(() => {
        console.log('All operations completed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);


// Refactored example using Promises

function delay(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Operation completed after ${time / 1000} seconds`);
      resolve();
    }, time);
  });
}

console.log('Start');

delay(1000)
  .then(() => delay(1000))
  .then(() => delay(1000))
  .then(() => delay(1000))
  .then(() => console.log('All operations completed'));
