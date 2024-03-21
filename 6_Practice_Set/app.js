
// Q1 Use logical operator to find whether the age of a person lies between 10 and 20?

// let age = prompt("what is your age")
// if(age>10 && age<=20){
//     console.log("The age is lies between 10 and 20");
// }

// else{
//     alert("This is an invalid age")
// }

// Q2 Demonstrate the use of switch case statement in javascript?

// let day = prompt("Enter your week name")
// switch(day){
//     case "1" :
//         console.log("Monday");
//         break
//     case "2":
//         console.log("Tuesday");
//         break
//     case "3" :
//         console.log("Wednesday");
//         break
//     case "4" :
//         console.log("Thursday");
//         break
//     case "5" :
//         console.log("Friday");
//         break
//     case "6" :
//         console.log("Saurday");
//         break
//     case "7":
//         console.log("Sunday");
//         break
//     default : 
//         console.log("OFF");
        
// }

// Sample switch case statement in JavaScript

// function dayOfWeek(day) {
//     let dayName;

//     switch (day) {
//         case 1:
//             dayName = 'Sunday';
//             break;
//         case 2:
//             dayName = 'Monday';
//             break;
//         case 3:
//             dayName = 'Tuesday';
//             break;
//         case 4:
//             dayName = 'Wednesday';
//             break;
//         case 5:
//             dayName = 'Thursday';
//             break;
//         case 6:
//             dayName = 'Friday';
//             break;
//         case 7:
//             dayName = 'Saturday';
//             break;
//         default:
//             dayName = 'Invalid day';
//     }

//     return dayName;
// }

// // Example usage:
// console.log(dayOfWeek(1));  // Output: Sunday
// console.log(dayOfWeek(4));  // Output: Wednesday
// console.log(dayOfWeek(8));  // Output: Invalid day


// Q3 Write a JavaScript program to find whether a number is divisible by 2 and 3?

// let num = prompt("Enter number")
// num = Number.parseInt(num)
// if(num%2==0 & num%3==0){
//     console.log("Number is divisible by 2 and 3");
// }

// else{
//     alert("Enter right number")
// }

// Q4 Write a JavaScript program to find whether a number is divisible by either 2 or 3?

// let num = prompt("Enter number")
// num = Number.parseInt(num)
// if(num%2==0 || num%3==0){
//     alert("Number is divisible");
// }

// else{
//     alert("Enter right number")
// }

// Q5 Print "You can drive" or "You cannot Drive" based on age being greater than 18 using ternary operator?

// The ternary operator is a concise way to write an if-else statement. It is also known as the conditional operator. The syntax of the ternary operator is as follows:

// condition ? expressionIfTrue : expressionIfFalse;
// Here's a breakdown of how it works:

// condition: This is the test expression that evaluates to either true or false.
// expressionIfTrue: If the condition is true, this expression is evaluated.
// expressionIfFalse: If the condition is false, this expression is evaluated.


let age = 16;
let a = age >= 18 ? "You can drive" : "You cannot drive"
console.log(a);