
class Employee{
    login(){
        console.log(`Employee has logged in`);
    }
    logout(){
        console.log(`Employee has logged in`);
    }

    requestLeaves(leaves){
          console.log(`Employee has required ${leaves} leaves`);
    }
}

class Programmer extends Employee{
     constructor(name){
        super(name)
        console.log(`This is a newly written constructor`);
     }

     requestCoffee(x){
        console.log(`Employee has requested ${x} coffee`);
     }
     requestLeaves(leaves){
        super.requestLeaves(4)
        console.log("One extra is granted");
        //console.log(`Employee has required ${leaves+1} leaves (One Extra)`);
  }
}


let e = new Programmer()
e.login() 
e.requestLeaves(3)

