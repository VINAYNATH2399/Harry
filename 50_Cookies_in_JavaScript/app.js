

console.log(document.cookie);
// document.cookie = "vinay2399"
// document.cookie = "vinay"
// document.cookie = "vinay-Nath"

let key = prompt("enter your key")
let value = prompt("enter your value")

document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// document.cookie = `${key}=${value}`

console.log(document.cookie);
// decodeURIComponent("a%3B%3B");







