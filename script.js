function clock(){
    const now = new Date()
    let hrs = String(now.getHours()).padStart(2, '0')
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
    else if(hrs>=12 && hrs<17){
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
const quotes = [
    "A negative mind will never give you a positive life.",
    "Forget the mistake. Remember the lesson.",
    "Push yourself, because no one else is going to do it for you.",
    "If it doesn't challenge you, it won't change you.",
    "Be silly. Be fun. Be different. Be crazy. Be you, because life is too short to be anything but happy.",
    "PRACTICE like you've never won. PERFORM like you've never lost.",
    "Girl, get up. NOBODY is gonna do it for you.",
    "I will not be another flower, picked for my beauty and left to die. I will be wild, difficult to find, and impossible to forget.",
    "It's you VS you",
    "If you don't sacrifice for what you want, what you want becomes the sacrifice.",
    "Daily reminder: you don't grow when you're comfortable",
    "Discipline will take you places motivation can't",
    "A lot will go wrong before everything goes right.",
    "But we cannot simply sit and stare at our wounds forever",
    "Do it for your future self.",
    "Remember why you started",
    "c'mon kid, this is your dream",
    "There is a past version of you that is so proud of how far you have come.",
    "remember the goal.",
    "I will win, not immediately but definitely.",
    "The one who falls and gets up is so much stronger than one who never fell.",
    "Your only limit is your mind."
]
function quote(){
    const day = new Date().getDate()
    let index = day % quotes.length
    document.getElementById("quote").textContent = quotes[index]
}
quote()
const input = document.getElementById("todo-input")
const add = document.getElementById("todo-add")
const list = document.getElementById("todo-list")
function addTask() {
    let text = input.value
    if (text === "") return

    let li = document.createElement("li")

    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    
    let span = document.createElement("span")
    span.textContent = text

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "✕"
    deleteBtn.onclick = function() {
        list.removeChild(li)
    }
    
    checkbox.onclick = function() {
        if (checkbox.checked) {
            span.style.textDecoration = "line-through"
            span.style.opacity = "0.5"
        } else {
            span.style.textDecoration = "none"
            span.style.opacity = "1"
        }
    }
    
    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(deleteBtn)
    list.appendChild(li)
    input.value = ""
}
add.onclick = addTask

function countdown(){
    let n=document.getElementById("event-name").value
    let date = new Date(document.getElementById("date").value)

    if (name === "" || date === "") {
        document.getElementById("countdown-display").textContent = "Nothing coming up!"
        return
    }

    let eventDate = new Date(date+"T00:00:00")
    let today = new Date()
    let days = Math.ceil((date - today) / (1000 * 60 * 60 * 24))
     if (days > 0) {
        document.getElementById("display").textContent = `📅 ${name} in ${days} days`
    } else {
        document.getElementById("display").textContent = "Nothing coming up!"
    }
}
document.getElementById("event-set").onclick = countdown