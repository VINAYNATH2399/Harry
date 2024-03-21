
// Method - I

// setInterval(()=>{
//     let d = new Date()
//     time.innerHTML = d
// }, 1000)

// Method - II

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString()
    const minutes = now.getMinutes().toString()
    const seconds = now.getSeconds().toString()

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
  }

  // Update the clock every second
  setInterval(updateClock, 1000);

  // Initial update
  updateClock();