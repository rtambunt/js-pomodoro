'use strict';

const timerDisplayEl = document.querySelector('.timer');
const btnEl = document.querySelector('[data-start]');

let min = 0;
let sec = 10;

function countDown() {
  setInterval(() => {
    if (min <= 0 && sec <= 0) clearInterval((min = 0), (sec = 0));

    // timerDisplayEl.textContent = sec < 10 ? `${min}:0${sec}` : `${min}:${sec}`;
    if (min >= 10 && sec >= 10) {
      timerDisplayEl.textContent = `${min}:${sec}`;
    } else if (min >= 10 && sec < 10) {
      timerDisplayEl.textContent = `${min}:0${sec}`;
    } else if (min < 10 && sec >= 10) {
      timerDisplayEl.textContent = `0${min}:${sec}`;
    } else if (min < 10 && sec < 10) {
      timerDisplayEl.textContent = `0${min}:0${sec}`;
    }

    if (sec < 0) {
      sec = 59;
      min--;
    } else {
      sec--;
    }
  }, 1000);
}

// 1) Stop countdown once 0

btnEl.addEventListener('click', countDown);
