let msTens = document.querySelector("#msTens");
let msHundreds = document.querySelector("#msHundreds");
let secondOnes = document.querySelector("#secondOnes");
let secondTens = document.querySelector("#secondTens");
let time = 0;
let timeout = null;

const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");

const runTimer = () => {
    time++;

    msTens.textContent = Math.floor(time % 10);
    msHundreds.textContent = Math.floor((time / 10) % 10);
    secondOnes.textContent = Math.floor((time / 100) % 10);
    secondTens.textContent = Math.floor((time / 1000) % 10);

    if (time >= 1000) {
        document.querySelector(".digits").style.color = "red";
        startBtn.disabled = false;
        return;
    }

    timeout = setTimeout(runTimer, 10);
};

const resetTimer = () => {
    document.querySelector(".digits").style.color = "black";
    time = 0;
    msTens.textContent = "-";
    msHundreds.textContent = "-";
    secondOnes.textContent = "-";
    secondTens.textContent = "-";
    if (timeout) clearTimeout(timeout);
}

startBtn.addEventListener("click", e => {
    e.target.disabled = true;
    resetTimer();
    runTimer();
});

resetBtn.addEventListener("click", e => {
    resetTimer();
    startBtn.disabled = false;
});
