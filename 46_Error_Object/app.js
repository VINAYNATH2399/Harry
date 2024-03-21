
//-------- Example 1
// try{
//        vinay
// }
// catch(error){
//      console.log(error);
// }  // ReferenceError: vinay is not defined

// ---------- Example 2

// try{
//     vinay
// }
// catch(error){
//   console.log(error.message);
//   console.log(error.name);
// } // vinay is not defined   ReferenceError

// ---------- Example 3

// try{
//     throw new error("vinay is not good")
// }
// catch(error){
//   console.log(error.message);
//   console.log(error.name);
//   console.log(error.stack); 
// } 
   /*
    error is not defined
    ReferenceError
    ReferenceError: error is not defined
   */

// ----------- Example 4   
    
// try{
//     console.log(vinay);
//     theow new ReferenceError("vinay is not good")
// }
 // catch(error){
//   console.log(error.message);
//   console.log(error.name);
//   console.log(error.stack); 
// }

    /*
vinay is not defined
ReferenceError
ReferenceError: vinay is not defined
    */

// ------------ Example 5

try{
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if(age>120){
        throw new ReferenceError("This is probably not true")
    }  
}
catch(error){
      console.log(error.message);
      console.log(error.name);
      console.log(error.stack); 
}
console.log("The script is still running");
