
// Q1 Write a program to print the marks of a students in an object using for loop?

let marks = {
    vinay: 99,
    shubham : 98,
    akash : 100, 
    monika: 100
}

// for(let i=0; i<Object.keys(marks).length; i++){
//     console.log("The marks of " +Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }

// Q2 Write the program in Q1 using for in loop?

// for(let i in marks){
//     console.log("The marks of " + i + " are " + marks[i]);
// }


// Q3 Write a program to find "try again" intil the use enters the correct number.

/*
let cn = 4;
let i
while(i!=cn){
    console.log("try again");
    i = prompt("Enter a number")
}

console.log("you have entered a correct number");

*/

// Q4 Write a function to find mean of 5 numbers?

const mean = (a,b,c,d,e)=>{
    return (a+b+c+d+e)/5
}
let ans = mean(1,2,3,4,5);
console.log(ans);