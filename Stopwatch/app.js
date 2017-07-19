// grab everything needed

const startButton = document.querySelector('.btn-start');
const stopButton = document.querySelector('.btn-stop');
const resetButton = document.querySelector('.btn-reset');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const log = document.getElementById('logArea');

let timerTime = 0;
let interval;
let timerRunning = false;



console.log(seconds);

// functions

function start() {
    console.log('start');
    
    
    if (timerRunning === true) {
        console.log('timer already started');
    } else {
        interval = setInterval(timer, 1000);
        timerRunning = true;
        
    }
    
}

function stop() {
    
    if (timerRunning === false) {
        console.log('timer already stopped');
    } else {
    console.log('stop');
    timerRunning = false;
    clearInterval(interval);
    }
}

function reset() {
    console.log('reset');
    stop();
    timerTime = 0;
    addToLog(minutes.innerText, seconds.innerText);
    minutes.innerText = '00';
    seconds.innerText = '00';
    
}

function timer() {

    timerTime++;
    console.log('time');
    
    const timerMinutes = Math.floor(timerTime / 60);
    const timerSeconds = timerTime % 60;
    
    minutes.innerText = padNumber(timerMinutes);
    seconds.innerText = padNumber(timerSeconds);
    
}

function addToLog(minutesLog, secondsLog) {
    log.innerHTML += '<p>' + minutesLog + ":" + secondsLog + '</p>';
}

function padNumber(number) {
    return (number < 10 ) ? '0' + number : number ;
    
    // if (number < 10 ) {
    //    return number = '0' + number;
    //} else {
    //    return number;
    //}
}

// event listeners

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);