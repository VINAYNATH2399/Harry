
// Q1 Create a javascript class to create a complex number Create a construcrtor to set the real and the complex part

// class complex{
//     constructor(){
//         this.real = real
//         this.imaginary = imaginary
//     }
// }

// let a = new complex(2,4)
// let b = new complex(6,4)

// Q2 Write a method to add two compllex number in the above class

class complex{
        constructor(real, imaginary){
            this.real = real
            this.imaginary = imaginary
        }
        add(num){
            let r = this.real + num.real
            let i = this.imaginary + num.imaginary
            return new complex(r,i)
            
        }
    }
    
    let a = new complex(2,4)
    let b = new complex(6,4)

    const complex1 =  new complex(2, 3);
    const complex2 =  new complex(1, 6);

    const result = complex1.add(complex2)

    console.log(`Result: ${result.real} + ${result.imaginary}i`);

// Q3 Create a class stydent from a class Human Override a method & see changes

class Human{
    constructor(name, favfood){
        this.name = name
        this.favfood = favfood
    }
    walk(){
        console.log(this.name + "Human is walking");
    }
}

class Student extends Human{
    walk(){ 
        console.log(this.name + " Student is walking");
    }
}

let o = new Student("vinay", "maggie")
console.log(o);
o.walk()

