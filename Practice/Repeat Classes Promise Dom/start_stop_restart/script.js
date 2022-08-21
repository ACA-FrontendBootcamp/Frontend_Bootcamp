const startButton = document.getElementById('start_button');
const stopButton = document.getElementById('stop_button');
const restartButton = document.getElementById('restart_button');
const counter = document.getElementById('counter');

let count = 0;
let startIntervalId;
function startButtonListener(evn) {
    startButton.setAttribute('disabled', 'true')
    startIntervalId = setInterval(() => {
        count++;
        counter.innerText = String(count);
    }, 1000)
}

function StopButtonListener(evn) {
    clearInterval(startIntervalId);
    startButton.removeAttribute('disabled')
}

function restartButtonListener() {
    count = 0;
    counter.innerText = String(count);
    clearInterval(startIntervalId)
    startButtonListener();
}

startButton.addEventListener('click', startButtonListener);
stopButton.addEventListener('click', StopButtonListener);
restartButton.addEventListener('click', restartButtonListener);