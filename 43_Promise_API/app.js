
/*
In JavaScript, the Promise API is used for asynchronous programming. 
Promises represent a value that might be available now, or in the future, or never. 
They are a way to handle asynchronous operations such as fetching data, reading files,
or making network requests. Promises provide a clean and structured way to work with asynchronous code,
making it easier to reason about and avoid callback hell.

A Promise can be in one of three states:

Pending: The initial state; the promise is neither fulfilled nor rejected.
Fulfilled: Meaning that the operation completed successfully, and the promise has a resulting value.
Rejected: Meaning that the operation failed, and the promise has a reason for the failure.
*/

// craeting  Promise

const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const success = true;
        if(success){
            resolve('Operation successfull')
        }
        else{
            reject('Operation failed')
        }
    }, 2000)
})

myPromise
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log('Error', error);
})
.finally(()=>{
    console.log('Promise completed; regardless of success or failure.');
})

