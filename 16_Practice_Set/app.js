
// Q1 Create an array of numbers and take input from the user to all numbers to this array?

// let arr = [1,2,3,4,5,6,7]
// let a = prompt("Enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr);

// Q2 Keep adding numbers to the array in 1 until 0 is added to the array?

// let arr = [1,2,3,4,5,6,7]
// let a;
// do{
//     a = prompt("Enter a number")
//     a = Number.parseInt(a)
//     arr.push(a)
// }
// while( a != 0);
// console.log(arr);

// Q3 Filter for numbers dividible by 10 from a given array?

let arr = [1,2,3,10,20,50]
let n = arr.filter((x)=>{
    return x%10==0;
});
console.log(n);

// Q4 Create an array of square of given numbers?

let arr1 = [1,2,3,10,20,50]
let n1 = arr.map((x)=>{
    return x*x;
});
console.log(n1);
