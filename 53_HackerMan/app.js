

let a = [
    "Initializing Hack tool",
    "Connecting to Facebook",
    "Connecting to server 1",
    "Connecting failed. Retrying...",
    "Connecting to server 2",
     "Connected Sucessfully",
     `username ${prompt("Enter username")}`,
     "Trying Brute Force",
     "200k passwords tried...",
     "Match not found",
     "200k passwords tried...",
     "Match not found",
     "200k passwords tried...",
     "Match not found",
     "200k passwords tried...",
     "Match found",
     "Accessing Account",
     "Hack Sucessfully"
]
const sleep = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(true)
        },1000)
    })
}

const showhack = async(message)=>{
        await sleep(2)
        // console.log(message);
        text.innerHTML = text.innerHTML + message +"<br>";
}

(async()=>{
    for(let i=0; i<a.length; i++){
        await showhack(a[i])
    }
})()
