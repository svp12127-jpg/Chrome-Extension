function clock(){
    const now = new Date()
    let hrs=now.getHours()
    let mins = String(now.getMinutes()).padStart(2, '0')
    document.getElementById("clock").textContent = `${hrs}:${mins}`
}
setInterval(clock, 1000)
clock()
function date(){
    const now = new Date()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    document.getElementById("date").textContent = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`
}
date()
function greeting(){
    const now = new Date()
    let hrs=now.getHours()
    if (hrs >= 5 && hrs < 12) {
        document.getElementById("greeting").textContent = "Good Morning!"
    }
    else if(hrs<17){
        document.getElementById("greeting").textContent = "Good Afternoon!"
    }
    else if(hrs<22){
        document.getElementById("greeting").textContent = "Good Evening!"
    }
    else{
        document.getElementById("greeting").textContent = "Good Night!"
    }
}
greeting()