
/*
Promise chaining in JavaScript is a technique used to handle asynchronous operations in a 
sequential and readable manner. It involves chaining multiple promises together,
where each subsequent promise depends on the result of the previous one. This is often done
using the then method of a promise, which allows you to attach callbacks to be executed when
the promise is fulfilled.
 */

// Function that returns a promise
function doSomethingAsync(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Processing ${value}`);
        resolve(value + 1);
      }, 3000);
    });
  }
  
  // Promise chaining
  doSomethingAsync(2)
    .then(result => {
      // This callback will be executed when the first promise is resolved
      console.log(`Result after first operation: ${result}`);
      return doSomethingAsync(result);
    })
    .then(result => {
      // This callback will be executed when the second promise is resolved
      console.log(`Result after second operation: ${result}`);
      return doSomethingAsync(result);
    })
    .then(result => {
      // This callback will be executed when the third promise is resolved
      console.log(`Result after final operation: ${result}`);
    })
    .catch(error => {
      // Handle errors from any of the promises in the chain
      console.error(`Error: ${error}`);
    });
  

