
let x = function(){
    alert("Hello World 1 ")
};

let y = function(){
    alert("Hello World 2 ")
};

btn.addEventListener('click',x);

btn.addEventListener('click',y);

let a = prompt("What is your favourite number")

if(a=="2"){
    btn.removeEventListener('click', x)
}


//----------- New Things ----------

// let x = function(e){
//     console.log(e.target);
//     console.log(e.type, e.clientX,e.clientY );
// };

// let y = function(){
//     alert("Hello World 2 ")
// };

// btn.addEventListener('click',x);
