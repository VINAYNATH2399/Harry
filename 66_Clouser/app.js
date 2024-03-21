
/*
A closure is created when a function is defined within another function, 
and it has access to the outer function's variables. 
This allows the inner function to "close over" the variables of the outer function,
even after the outer function has finished executing.
*/

// Example 1

function outer(){
    let a = "I am strong"

    function inner(){
         console.log(a);
    }
    return inner;
}

let clouser = outer()

clouser()

// Example 2
/*
createCounter is a function that returns an object with two methods: 
increment and decrement. The count variable is a private variable within the createCounter function,
but it is accessible by the returned methods due to closures.
*/

function createcount(){
    count = 1;

    function increment(){
        count++
        console.log(count);
    }

    function decrement(){
        count--
        console.log(count);
    }

    return {
        increment : increment,
        decrement : decrement
    }
}
let a = createcount()
a.increment()
a.increment()
a.decrement()

  