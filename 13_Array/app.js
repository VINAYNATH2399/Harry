/*

let marks = [98,100,25,26,36,null, false]
console.log(marks);

// index
console.log(marks[0]);

// length

console.log(marks.length);

// Adding a new array

marks[7] = 89;
console.log(marks);

// Changing the array

marks[6] = "true";
console.log(marks);

// typeof
console.log(typeof(marks));

*/
// -------- Array Method ----------

let num = [1,2,3,4,5,6]
console.log(num); //  [1, 2, 3, 4, 5, 6]

// tostring()
let b = num.toString(num)
console.log(b); // 1,2,3,4,5,6

// join()

let c = num.join("_")
console.log(c); // 1_2_3_4_5_6

// pop()

let p = num.pop()
console.log(p); // 6
console.log(num); // [1, 2, 3, 4, 5]

// push()

let push = num.push(23)
console.log(num); // [1, 2, 3, 4, 5, 23]

// shift()
let shift = num.shift()
console.log(num, shift); // [2, 3, 4, 5, 23] 1

// unshift()
let unshift = num.unshift(100)
console.log(num);  // [100, 2, 3, 4, 5, 23]

// delete()
delete num[0] 
console.log(num); //  [empty, 2, 3, 4, 5, 23]
console.log(num.length); // 6

// concat()
let num1 = [25,26,24,29]
let num2 = [69,96]
let arr2 = num.concat(num1)
console.log(arr2); // [empty, 2, 3, 4, 5, 23, 25, 26, 24, 29]

let arr3 = num.concat(num1,num2)
console.log(arr3);// [empty, 2, 3, 4, 5, 23, 25, 26, 24, 29, 69, 96]

// sort()
arr3.sort()
console.log(arr3);//  [2, 23, 24, 25, 26, 29, 3, 4, 5, 69, 96, empty]

let compare = (a,b)=>{
    return b - a
}
arr3.sort(compare)
console.log(arr3); //  [96, 69, 29, 26, 25, 24, 23, 5, 4, 3, 2, empty]

// reverse()

arr3.reverse()
console.log(arr3); //[empty, 2, 3, 4, 5, 23, 24, 25, 26, 29, 69, 96]

// splice and slice

let number = [551, 22, 3, 14, 5,6,7,8,229]
console.log(number);// [551, 22, 3, 14, 5, 6, 7, 8, 229]
number.splice(2,3,1021,1023,1025)
console.log(number); // [551, 22, 1021, 1023, 1025, 6, 7, 8, 229]

let newnum = number.slice(2)
console.log(newnum); // [1021, 1023, 1025, 6, 7, 8, 229]