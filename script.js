const digit = document.querySelector('.digit');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const continueBtn = document.querySelector('.continue');
const resetBtn = document.querySelector('.reset');

let second = 0, minute = 0, hour = 0;

const startTime = ()=> {
    second += 1;
    if(second === 60) {
        minute += 1;
        second = 0;
        if(minute === 60) {
            hour += 1;
            minute = 0;
        }
    }
    const secondText = second < 10 ? "0" + second.toString() : second;
    const minuteText = minute < 10 ? "0" + minute.toString() : minute;
    const hourText = hour < 10 ? "0" + hour.toString() : hour;
    digit.textContent =  hourText + " : " + minuteText +" : " + secondText;
}

let intervalId = 0;
startBtn.addEventListener('click', () => {
    intervalId = setInterval(startTime,1000);
})

pauseBtn.addEventListener('click', ()=> {
    clearInterval(intervalId);
})

continueBtn.addEventListener('click',()=> {
    clearInterval(intervalId);
    intervalId = setInterval(startTime,1000);
})

resetBtn.addEventListener('click',() => {
    clearInterval(intervalId);
    second = 0, minute = 0, hour = 0;
    digit.textContent = "00 : 00 : 00";
})
