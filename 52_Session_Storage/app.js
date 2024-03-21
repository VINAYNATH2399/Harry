// ------------- 1 -----------
// Storing data
// syntax:-  sessionStorage.setItem(key, value) 

sessionStorage.setItem('username', 'John Doe');

// --------------- 2 --------------
// Retrieving Data:
// syntax:-  sessionStorage.getItem(key)

// Retrieving data from session storage
var username = sessionStorage.getItem('username');
console.log(username);

// -----------------------3 ----------------
//Removing Data:
// syntax:- sessionStorage.removeItem(key).

// Removing data from session storage
sessionStorage.removeItem('username');

// -------------------- 4 -----------------
//Clearing All Data:
// syntax:- sessionStorage.clear().

// Clearing all data from session storage
sessionStorage.clear();

// ------------------ 5 ---------------
//Checking for Browser Support:
//As with Local Storage, it's a good practice to check if the browser supports Session Storage before using it.

if (typeof(Storage) !== 'undefined') {
  // Session storage is supported
  // You can use sessionStorage.setItem(), sessionStorage.getItem(), etc.
} else {
  // Session storage is not supported
  console.log('Sorry, your browser does not support session storage.');
}

// -------------------- 6 -------------
//Example:
//Here's a simple example that stores a username in session storage and retrieves it:

// Storing data in session storage
sessionStorage.setItem('username', 'John Doe');

// Retrieving data from session storage
var username = sessionStorage.getItem('username');
console.log(username); // Output: John Doe