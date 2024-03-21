/*

For Loop:
The traditional for loop can be used to iterate over each element in the array.


var myArray = [1, 2, 3, 4, 5];

for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}


For...of Loop:
The for...of loop is a more concise way to iterate over the elements of an array.

var myArray = [1, 2, 3, 4, 5];

for (var element of myArray) {
    console.log(element);
}


forEach() Method:
The forEach method is available on arrays and is a higher-order function.

var myArray = [1, 2, 3, 4, 5];

myArray.forEach(function(element) {
    console.log(element);
});
You can also use an arrow function for a more concise syntax:

var myArray = [1, 2, 3, 4, 5];
myArray.forEach(element => console.log(element));


Map Method:
The map method is used for creating a new array based on the original array. It also involves iterating over the elements.

var myArray = [1, 2, 3, 4, 5];
var newArray = myArray.map(function(element) {
    return element * 2;
});

console.log(newArray);


While Loop:
You can use a while loop to iterate through the array.

var myArray = [1, 2, 3, 4, 5];
var i = 0;

while (i < myArray.length) {
    console.log(myArray[i]);
    i++;
}

*/