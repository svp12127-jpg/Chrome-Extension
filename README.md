# Chrome Extension

A personal Chrome extension that replaces the default new tab page with a functional dashboard. Built from scratch using HTML, CSS, and JavaScript.

---

## Features

### Live Clock & Date
A large digital clock that updates every second, alongside the current day and date.

### Time-Based Backgrounds
The background gradient automatically changes based on the time of day:
- **Morning (5am–12pm)** — Warm golden sunrise tones
- **Afternoon (12pm–5pm)** — Purple-pink vibes
- **Evening (5pm–10pm)** — Vibrant purple and pink dusk
- **Night (10pm–5am)** — Deep dark navy

### Daily Quote
A new motivational quote every day, cycling through a curated personal collection.

### Weather Widget
Real-time weather for Delhi using the OpenWeatherMap API — shows temperature, description, feels like, and a matching emoji (☀️ ⛅ 🌧️ ⛈️ etc.)

### 📅 Countdown Timer
Set a name and date for an upcoming event and it'll count down the days for you. Persists across sessions using localStorage.

### ✅ To-Do List
Add, check off, and delete tasks. Everything saves automatically with localStorage so your list is there every time you open a new tab.

### Pomodoro Timer
A focus timer with three modes:
- **Focus** — 25 minutes
- **Short Break** — 5 minutes
- **Long Break** — 15 minutes

Start, pause, and reset. Sends a notification when the timer is up.

---

## Built With
- HTML
- CSS
- JavaScript
- OpenWeatherMap API
- Chrome Extensions API (Manifest V3)

---

## How to Use
1. Clone or download this repository
2. Go to `chrome://extensions` in Chrome
3. Enable **Developer Mode** (top right)
4. Click **Load Unpacked** and select the project folder
5. Open a new tab — that's it!

---

## About
This is my first Chrome extension, while learning web development. It started as a simple clock and grew into a full personal dashboard. Every feature was built and debugged step by step — definitely learned a lot along the way!
