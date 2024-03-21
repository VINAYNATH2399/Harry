
//-------------- 1 --------------
//Storing Data:
// syntax:- localStorage.setItem(key, value)

localStorage.setItem('username', 'John Doe');

//--------------- 2 -------------------
//Retrieving Data:
// syntax:- localStorage.getItem(key)


var username = localStorage.getItem('username');
console.log(username); // Output: John Doe

// --------------- 3 ----------------
//Removing Data:
// syntax:-localStorage.removeItem(key).

localStorage.removeItem('username');

// ----------------- 4 ---------------
//Clearing All Data:
//syntax:- localStorage.clear().

localStorage.clear();

// -------------------- 5 --------------
//Checking for Browser Support:
//Before using local storage, it's a good idea to check if the browser supports it.

if (typeof(Storage) !== 'undefined') {
  // Local storage is supported
  // You can use localStorage.setItem(), localStorage.getItem(), etc.
} else {
  // Local storage is not supported
  console.log('Sorry, your browser does not support local storage.');
}
 


//Example: 1
//Here's a simple example that stores a username and retrieves it:

// Storing data
localStorage.setItem('username', 'John Doe');

// Retrieving data
var username = localStorage.getItem('username');
console.log(username); // Output: John Doe


//Example: 2
/*
let key = prompt("Enter key you want set")
let value = prompt("Enter value you want set")

localStorage.setItem(key, value)

if(key == 'red' || key == 'blue'){
    localStorage.getItem(key)
}

if(key==0){
    localStorage.clear()
}
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

*/

