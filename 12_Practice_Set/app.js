
// Q1 What will the following print in javascript ?
        //    console.log("har\"".length);

   console.log("har\"".length);

// Q2 Write a program to convert a given string to lowercase?

 let str = "VINAY";
 let ans = str.toLowerCase()
 console.log(ans);

// Q3 Extract the amount out of the string
         //"Please give RS 1000"

let str1 = "Please give Rs 1000";
let amount = str1.slice("Please give Rs ".length)
console.log(amount); //1000

let amount1 = Number.parseInt(amount)
console.log(typeof(amount1)); // number

// Q4 Try to change 4th character of a given string where you abke to do it?

let friend = "deepika";
friend[3] = "r"
console.log(friend);
// friend is not changed, because string is immutale