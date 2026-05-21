function clock(){
    const now = new Date()
    let hrs=now.getHours()
    let mins=now.getMinutes()
    document.getElementById("clock").textContent = `${hrs}:${mins}`
}
setInterval(clock, 1000)
clock()