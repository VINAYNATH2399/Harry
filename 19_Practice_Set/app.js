// Write a program using prompt function to take input of age as a value from
// the user and use alert to tell him if he can drive?

let age = prompt("Enter your age");
age = parseInt(age);

// if(age>=18){
//     alert("You can drive")
// }

// else{
//     alert("You cannot drive")
// }

// --------- or ---------

const candrive = ((age)=>{
    return age>=18;
})
if(candrive(age)){
    alert("You can drive")
}

else{
    alert("You cannot drive")
}

// 