function clock(){
    const now = new Date()
    now.getHours()
    now.getMinutes()
}
setInterval(updateClock, 1000) // runs every 1000ms = 1 second
updateClock() // run once immediately