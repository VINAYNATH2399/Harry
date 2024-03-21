
let num = [3,24,1,2,4]
for(let i=0; i<num.length; i++){
    console.log(num[i]);
}

// forEach loop
num.forEach((element) =>{
    console.log(element*element);
})

// Array.from

let name = "vinay";
let arr = Array.from(name)
console.log(arr);

// for...of  -> shortcut method to access array element
for(let i of num){
    console.log(i);
}

// for...in
for(let i in num){
    console.log(num[i]);
}

  