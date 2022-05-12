const timer = document.getElementById('timer');
const modalContainer = document.getElementById('modal-container');
const continueBtn = document.getElementById('continue');
const secondTotal = document.getElementById('second-total');
const minuteTotal = document.getElementById('minute-total');
const hourTotal = document.getElementById('hour-total');
const earnedWage = document.getElementById('earned-wage');

let wageValue = parseFloat(earnedWage.innerHTML);

const rate = 100;

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;
var totalSeconds = 0;
var totalMinutes = 0;
var totalHours = 0;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

async function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    // var totalSec = [];
    // var totalMin = [];
    // var totalHr = [];
    const breakTime = document.querySelector('#break-input').value.trim();
    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }


    timer.innerHTML = hr + ':' + min + ':' + sec;
    console.log(sec);
    if ((breakTime - 1) == sec) {
      totalSeconds += (sec + 1);
      totalMinutes += min;
      totalHours += hr;
      // await totalSec.push(sec);
      // await totalMin.push(min);
      // await totalHr.push(hr);
      if (totalSeconds >= 60) {
        totalMinutes = totalMinutes + 1;
        totalSeconds = 0;
      }
      if (totalMinutes >= 60) {
        hourTotal.innerHTML = totalHr + 1;
        minuteTotal.innerHTML = 0;
        secondTotal.innerHTML = 0;
      }
      secondTotal.innerHTML = totalSeconds;
      minuteTotal.innerHTML = totalMinutes;
      hourTotal.innerHTML = totalHours;
      // await addSeconds(totalSeconds);
      // await addMinutes(totalMinutes);
      // await addHours(totalHours);
      stopTimer();
      modalContainer.classList.add('show');
    }

    setTimeout("timerCycle()", 1000);
  }
}
// function addSeconds(totalSec) {
//   console.log(totalSeconds);
//   for (let i = 0; i < totalSec.length; i++) {
//     totalSeconds += totalSec[i];
//   }
//   if (totalSeconds == 0) {
//     return;
//   }
//   if (totalSeconds >= 60) {
//     totalMinutes = totalMinutes + 1;
//     totalSeconds = 0;
//   }
//   secondTotal.innerHTML = totalSeconds
//   return totalSeconds;
// }

// function addMinutes(totalMin) {
//   let totalHr = hourTotal.innerHTML;
//   for (let i = 0; i < totalMin.length; i++) {
//     totalMinutes += totalMin[i];
//   }
//   if (totalMinutes == 0) {
//     return;
//   }
//   if (totalMinutes >= 60) {
//     hourTotal.innerHTML = totalHr + 1;
//     minuteTotal.innerHTML = 0;
//     secondTotal.innerHTML = 0;
//   }
//   minuteTotal.innerHTML = totalMinutes
//   return totalMinutes;
// }

// function addHours(totalHr) {
//   for (let i = 0; i < totalHr.length; i++) {
//     totalHours += totalHr[i];
//   }
//   if (totalHours == 0) {
//     return;
//   }
//   hourTotal.innerHTML = totalHours
//   return totalHours;
// }
  
function resetTimer() {
    sec = 0;
    min = 0;
    hr = 0;
    // var totalSec = [];
    // var totalMin = [];
    // var totalHr = [];
    timer.innerHTML = '00:00:00';
    // return totalSec, totalMin, totalHr;
}

continueBtn.addEventListener('click', () => {
  workValue(rate);
  resetTimer();
  modalContainer.classList.remove('show');
});

function workValue(rate) {
  value = ((rate * totalSeconds) / 3600) + ((rate * totalMinutes) / 60) + (rate * totalHours) + wageValue;
  earnedWage.innerHTML = value.toFixed(2)
  return value;
}