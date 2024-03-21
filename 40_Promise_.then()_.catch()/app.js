/*
The then method is used to handle the fulfillment of the promise, 
and the catch method is used to handle any rejections. 
You can chain multiple then methods to perform 
sequential asynchronous operations.
 */

//---------- Example 1

// let p1 = new Promise((resolve, reject)=>{
//         console.log("Promise is pendid");
//           setTimeout(function(){
//             //alert("I am a promise and I am fulfilled")
//             resolve(true)
//           }, 5000);
// })

// let p2 = new Promise((resolve, reject)=>{
//         console.log("Promise is pendid");
//           setTimeout(function(){
//            // alert("I am a promise and I am fulfilled")
//             reject(new Error("I am an Error"))
//           }, 5000);
// })

// // console.log(p1, p2);

// p1.then((value)=>{
//     console.log(value);
// })
// p2.catch((errror)=>{
//     console.log("some error occured in p2");
// })


//-------------- Example 2
// Function that returns a promise to simulate flipping a coin
function flipcoin(){
    return new Promise(function(resolve, reject){
         // Simulating a coin flip (random success or failure)
        const isheads = Math.random()<0.5; //50% chance of heads

        setTimeout(function(){
            if(isheads){
                resolve("Heads!")
            }
            else{
                reject("Tails")
            }
        }, 2000);// Simulating a delay of 2 second
    });
}

// Using the flipCoin function with then and catch

console.log("Flipping the coin...");

flipcoin()
  .then(function(result){
    console.log("result: ", result);
  })
  .catch(function(error){
    console.log("Error: ", error);
  })

