
class Animal{
    constructor(name, color){
        this.name = name
        this.color = color
    }
    run(){
        console.log(this.name + " is running");
    }
    shout(){
        console.log(this.name + " is shouting");
    }
}

class Monkey extends Animal{
    eatbanana(){
        console.log(this.name + " is eating banana");
    }
}

let ani = new Animal("Bruno", "white")
let m = new Monkey("chimpu", "oragne")

console.log(ani);
console.log(m);

ani.shout()
m.eatbanana()
// ani.eatbanana()// Error

