
class RailwayForm{
    submit(){
        alert("form submitted")
    }
    cancel(){
        alert(this.name+": This form is cancelled")
    };
    fill(givenname, trainno){
        this.name = givenname
        this.trainno=trainno
    }
}

// Create a form 
let vinay = new RailwayForm();
vinay.fill("vinay", 12345)
let chintu = new RailwayForm();
chintu.fill("chintu, 12356")

vinay.submit()
chintu.submit()

chintu.cancel()












