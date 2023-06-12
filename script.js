const Time = document.querySelector(".time")
const Hours = document.querySelector(".hours")
const Minutes = document.querySelector(".minutes")
const Seconds = document.querySelector(".seconds")

let newDate = new Date();
let currentHourse = newDate.getHours();
let currentMinutes = newDate.getMinutes();
let currentSeconds = newDate.getSeconds();

let [hours, minutes, seconds] = [currentHourse, currentMinutes, currentSeconds];

function timeStart() {
    let timer = null;

    function timeStarting() {
        seconds++;

        if (seconds == 60) {
            seconds = 1;
            minutes++;

            if (minutes == 60) {
                minutes = 1;
                hours++;
            }
        }

        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;

        // Time.innerHTML = m + " : " + s;
        Hours.innerHTML = h;
        Minutes.innerHTML = m;
        Seconds.innerHTML = s;

        // console.log(`${h} : ${m} : ${s}`);
    }

    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(timeStarting, 1000)
}
timeStart();



// Count Down Timming


const Day1 = document.querySelector(".day1")
const Hours1 = document.querySelector(".hours1")
const Minutes1 = document.querySelector(".minutes1")
const Seconds1 = document.querySelector(".seconds1")


const Birthday = "1 Feb 2024";

function countDown() {
    const Birthday_Date = new Date(Birthday);
    const currentDate = new Date();

    const totalSeconds = (Birthday_Date - currentDate) / 1000;  // 1000 ---> Milli Seconds

    const days1 = Math.floor(totalSeconds / 3600 / 24)
    const hours1 = Math.floor(totalSeconds / 3600) % 24;
    const minutes1 = Math.floor(totalSeconds / 60) % 60;
    const seconds1 = Math.floor(totalSeconds) % 60;

    let d = days1 < 10 ? "0" + days1 : days1;
    let h = hours1 < 10 ? "0" + hours1 : hours1;
    let m = minutes1 < 10 ? "0" + minutes1 : minutes1;
    let s = seconds1 < 10 ? "0" + seconds1 : seconds1;

    Day1.innerHTML = d;
    Hours1.innerHTML = h;
    Minutes1.innerHTML = m;
    Seconds1.innerHTML = s;
}

countDown();
setInterval(countDown, 1000);