(() => {
    let elapsed = 0;
    let timerId = null;
    const timerElement = document.getElementById('timer');
    const lapsElement = document.getElementById('laps');
    const start = function (e) {
        if (timerId == null) timerId = setInterval(update, 10);
    }
    const stop = function (e) {
        if (timerId !== null) clearInterval(timerId);
        timerId = null;
    }
    const update = function () {
        elapsed++;
        timerElement.innerText = formatTime();
    }
    const format = function (input) {
        input = input.toFixed(0);
        return input < 10 ? "0" + input : input;
    }
    const formatTime = function () {
        const minutes = elapsed / 6000;
        const seconds = elapsed % 6000 / 100;
        const ms = elapsed % 100;
        return format(minutes) + ":" + format(seconds) + ":" + format(ms);
    }
    const reset = function (e) {
        stop();
        elapsed = 0;
        timerElement.innerText = formatTime();
        lapsElement.replaceChildren();
    }
    const lap = function (e) {
        const li = document.createElement("li");
        li.innerText = formatTime();
        lapsElement.appendChild(li);
    }
    document.getElementById('start').addEventListener('click', start);
    document.getElementById('stop').addEventListener('click', stop);
    document.getElementById('reset').addEventListener('click', reset);
    document.getElementById('lap').addEventListener('click', lap);
    // setInterval(update, 1000 / 60);
})();