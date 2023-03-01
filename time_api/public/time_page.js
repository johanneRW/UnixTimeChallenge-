const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
const monthOptions = document.getElementById("month");
months.forEach(month => {
    const option = document.createElement("option")
    option.innerText = month
    monthOptions.appendChild(option)

});

const decades = ["70,s", "80's", "90's", "00's", "10's", "20's", "30's"]
const decadeOptions = document.getElementById("decade")
decades.forEach(decade => {
    const option = document.createElement("option")
    option.innerText = decade
    decadeOptions.appendChild(option)

});

function show(name) {
    const element = document.getElementById(name)
    element.classList.remove("hidden")

}

function hide(name) {
    const element = document.getElementById(name)
    element.classList.add("hidden")
}

function displayHurra() {
    show("hurra")
    hide("sorry")
}


function displaySorry() {
    show("sorry")
    hide("hurra")
}

let unixTime = 0

function newRandomDate() {
    unixTime = getRandomUnixTime()
    const unixTimeWhitoutMilliseconds=Math.floor(unixTime/1000)
    const unixTimeElement = document.getElementById("unix-time")
    unixTimeElement.textContent = unixTimeWhitoutMilliseconds

    hide("answer")
    hide("hurra")
    hide("sorry")

    const formElement = document.getElementById("form")
    formElement.reset()
}

function getRandomUnixTime() {
    const minUnixTime = 0;
    const maxUnixTime = 2147483647 * 1000; // Maximum Unix time (January 19, 2038)whit milliseconds
    const randomUnixTime = Math.floor(Math.random() * (maxUnixTime - minUnixTime + 1) + minUnixTime);
    return randomUnixTime;
}

function revealAnswer() {
    show("answer")
    const answerElement = document.getElementById("answer")
    answerElement.textContent = new Date(unixTime)
}

function yearmonthChek() {
    const yearA = document.getElementById("yearA")
    const month = document.getElementById("month")
    const yearAValue = parseInt(yearA.value)
    const monthValue = months.indexOf(month.value)
    const unixDateTime = new Date(unixTime)
    if ((yearAValue === unixDateTime.getFullYear()) && (monthValue === unixDateTime.getMonth())) {
        displayHurra()
    } else {
        displaySorry()
    }
}

function yearChek() { 
    const yearB = document.getElementById("yearB")
    const yearBValue = parseInt(yearB.value)
    const unixDateTime = new Date(unixTime)
    if (yearBValue === unixDateTime.getFullYear()) {
        displayHurra()
    } else {
        displaySorry()
    }
}

function decadeChek() {
    const decade = document.getElementById("decade")
    const decadeValue = decades.indexOf(decade.value)
    const unixDateTime = new Date(unixTime)
    const decadeStart = getDecadeStart(decadeValue)
    const decadeEnd = getDecadeEnd(decadeValue)
    if ((decadeStart <= unixDateTime) && (unixDateTime <= decadeEnd)) {
        displayHurra()
    } else {
        displaySorry()
    }
}

function getDecadeStart(num) {
    return new Date(1970 + (num * 10), 0, 1)
}

function getDecadeEnd(num) {
    return new Date(1979 + (num * 10), 11, 31)
}


newRandomDate()
