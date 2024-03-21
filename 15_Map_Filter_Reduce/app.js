

// Map function
//The map function creates a new array by applying a provided function to each element of the original array.

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (num) {
  return num * 2;
});

//arrow function version
// const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]


// filter function
//The filter function creates a new array with elements that pass a provided test function.

const evens = numbers.filter(function(num){
    return num%2==0;
})
// const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); //  // Output: [2, 4]


// reduce function
//The reduce function applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

const sum = numbers.reduce(function(add , num){
    return add + num;
},0);
// const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);

console.log(sum);