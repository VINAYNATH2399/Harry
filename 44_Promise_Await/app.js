
async function vinay(){
    let delhiweather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
              resolve('27 deg')
        }, 3000)
    })
    let korbaweather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
              resolve('19 deg')
        }, 6000)
    })
    console.log("Fetching Delhi weather please wait...");
    let delhiW = await delhiweather

    console.log("Fetching delhi weather: "+delhiW);
    console.log("Fetching korba weather please wait...");
    let korbaW = await korbaweather
    console.log("Fetching delhi weather: "+ korbaW);
    return[delhiW,korbaW]
}
console.log("Welcome to weather control room");
let a = vinay()
a.then((value)=>{
    console.log(value);
})