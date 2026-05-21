function clock(){
    const now = new Date()
    now.getHours()
    now.getMinutes()
}
setInterval(clock, 1000) // runs every 1000ms = 1 second
clock() // run once immediately