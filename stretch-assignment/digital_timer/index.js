const startTimer = () => {
    let msTens = document.querySelector("#msTens");
    let msHundreds = document.querySelector("#msHundreds");
    let secondOnes = document.querySelector("#secondOnes");
    let secondTens = document.querySelector("#secondTens");
    let time = 0;

    const runTimer = () => {
        time++;

        msTens.textContent = Math.floor(time % 10);
        msHundreds.textContent = Math.floor((time / 10) % 10);
        secondOnes.textContent = Math.floor((time / 100) % 10);
        secondTens.textContent = Math.floor((time / 1000) % 10);

        if (time >= 1000) {
            document.querySelector(".digits").style.color = "red";
            return;
        }

        setTimeout(runTimer, 10);
    };

    runTimer();
};

startTimer();
