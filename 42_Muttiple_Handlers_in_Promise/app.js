
/* 
In JavaScript, you can attach multiple handlers to a 
Promise using the then method. Each then call returns a new Promise, 
allowing you to chain multiple handlers.


The asyncOperation function returns a Promise. We use the then method to 
attach three handlers sequentially. Each handler can return a new value 
or a new Promise, which will be passed to the next then in the chain.

If any promise in the chain is rejected, the control jumps to the nearest catch block. 
If there is an error at any stage, the catch block will be executed.

This chaining allows you to structure your asynchronous code in a more readable 
and maintainable way. You can handle different steps of the asynchronous operation 
in separate then blocks, making it easier to follow the flow of your code.

*/

function operation(){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            const success = true;
            if(success){
                resolve("Operation sucessful")
            }
            else{
                reject("Operation failed")
            }
        }, 3000)
    });
}
operation()
  .then((result) =>{
    console.log('First handler:', result);
    // You can return a new value or a new Promise here
    return 'New value';
  })
  .then((NewValue)=>{
    console.log("second handlers: ", NewValue);
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('Delayed value');
          }, 3000);
    })
  })
  .then((Delayedvalue)=>{
    console.log("third handlers: ", Delayedvalue);
  })
   
  .catch((error)=>{
    console.log(error);
   })





