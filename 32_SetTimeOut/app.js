
document.write("hello")

// let a = setTimeout(function(){
//      alert("I am alert")
// }, 5000)

// let b = prompt("do you want to run the setTiomeout")
// if("n"==b){
//     clearTimeout(a)
// }
// console.log(a);

const sum = (a,b)=>{
    console.log("yes I am running " + (a+b));
}
setTimeout(sum, 2000, 3,5)


// setInterval(function(){
//     alert("setinterval")
// }, 3000)