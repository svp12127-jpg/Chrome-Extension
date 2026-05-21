function clock(){
    const now = new Date()
    let hrs=now.getHours()
    let mins = String(now.getMinutes()).padStart(2, '0')
    document.getElementById("clock").textContent = `${hrs}:${mins}`
}
setInterval(clock, 1000)
clock()