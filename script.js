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
        document.body.style.background = "linear-gradient(160deg, #c9b8e8 0%, #e8b4d0 50%, #f7c5b0 100%)"
        document.body.style.color = "#1a0533"
        document.getElementById("divider").style.backgroundColor = "rgba(0,0,0,0.2)"
        document.getElementById("todo-input").style.color = "rgba(0,0,0,0.6)"
        document.getElementById("todo-input").classList.add("light-input")
    }
    else if(hrs>=12 && hrs<17){
        document.getElementById("greeting").textContent = "Good Afternoon!"
        document.body.style.background = "linear-gradient(160deg, #7b4fa6 0%, #c2527a 50%, #e8956d 100%)"
        document.body.style.color = "#1a0533"
        document.getElementById("divider").style.backgroundColor = "rgba(0,0,0,0.2)"
        document.getElementById("todo-input").style.color = "rgba(0,0,0,0.6)"
        document.getElementById("todo-input").classList.add("light-input")
    }
    else if(hrs<22){
        document.getElementById("greeting").textContent = "Good Evening!"
        document.body.style.background = "linear-gradient(160deg, #0a0a0f 0%, #1a0533 30%, #5b1a7a 60%, #a0256e 80%, #d63384 100%)"
        document.body.style.color = "white"
        document.getElementById("divider").style.backgroundColor = "rgba(255,255,255,0.2)"
        document.getElementById("todo-input").style.color = "white"
        document.getElementById("todo-input").classList.remove("light-input")
    }
    else{
        document.getElementById("greeting").textContent = "Good Night!"
        document.body.style.background = "linear-gradient(160deg, #0a0a0f 0%, #0d0d1a 50%, #1a0533 100%)"
        document.body.style.color = "white"
        document.getElementById("divider").style.backgroundColor = "rgba(255,255,255,0.2)"
        document.getElementById("todo-input").style.color = "white"
        document.getElementById("todo-input").classList.remove("light-input")
    }
}
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

function savetodo(){
    let tasks=[]
    document.querySelectorAll("#todo-list li span").forEach(span => {
        tasks.push(span.textContent)
    })
    localStorage.setItem("todos", JSON.stringify(tasks))
}

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
        savetodo()
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
    savetodo()
}
add.onclick = addTask

function countdown(){
    let name=document.getElementById("event-name").value
    let date = document.getElementById("event-date").value

    if (name === "" || date === "") {
        document.getElementById("countdown-display").textContent = "Nothing coming up!"
        return
    }

    let eventDate = new Date(date+"T00:00:00")
    let today = new Date()
    let days = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24))
     if (days > 0) {
        document.getElementById("countdown-display").textContent = `📅 ${name} in ${days} days`
    } else {
        document.getElementById("countdown-display").textContent = "Nothing coming up!"
    }
    localStorage.setItem("eventName", name)
    localStorage.setItem("eventDate", date)
}
document.getElementById("event-set").onclick = countdown
greeting()

function loadTodos() {
    let saved = JSON.parse(localStorage.getItem("todos") || "[]")
    saved.forEach(text => {
        input.value = text
        addTask()
    })
}
loadTodos()

function loadcountdown(){
    let name=localStorage.getItem("eventName")
    let date=localStorage.getItem("eventDate")
    if(name&&date){
        document.getElementById("event-name").value=name
        document.getElementById("event-date").value=date
        countdown()
    }
}
loadcountdown()

function weather(){
    const apikey="82cabb3a67324e80b3ff607bcfdce5c4"
    const city="Delhi"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
        .then(res => res.json())
        .then(data => {
            const temp=Math.round(data.main.temp)
            const feel=Math.round(data.main.feels_like)
            const d = data.weather[0].description
            const icon = data.weather[0].icon
            const id = data.weather[0].id
            let emoji = "🌡️"
            if (id >= 200 && id < 300) emoji = "⛈️"
            else if (id >= 300 && id < 400) emoji = "🌦️"
            else if (id >= 500 && id < 600) emoji = "🌧️"
            else if (id >= 600 && id < 700) emoji = "❄️"
            else if (id >= 700 && id < 800) emoji = "🌫️"
            else if (id === 800) emoji = "☀️"
            else if (id > 800) emoji = "⛅"

            document.getElementById("weather").innerHTML = `
                <div id="weather-emoji">${emoji}</div>
                <div id="weather-info">
                    <p id="weather-temp">${temp}°C</p>
                    <p id="weather-desc">${d}</p>
                    <p id="weather-feels">Feels like ${feel}°C</p>
                    <p id="weather-city">Delhi</p>
                </div>
            `
        })
        .catch((err) => {
            document.getElementById("weather").textContent = "Weather unavailable"
            console.log(err)
        })
    }
weather()