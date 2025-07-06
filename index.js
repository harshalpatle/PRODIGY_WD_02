let startTime;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
  let date = new Date(time);
  let hours = date.getUTCHours().toString().padStart(2, '0');
  let minutes = date.getUTCMinutes().toString().padStart(2, '0');
  let seconds = date.getUTCSeconds().toString().padStart(2, '0');
  let milliseconds = date.getUTCMilliseconds().toString().padStart(3, '0');
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function print(txt) {
  document.getElementById("display").innerText = txt;
}

function startStopwatch() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 10);
  }
}

function stopStopwatch() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetStopwatch() {
  stopStopwatch();
  elapsedTime = 0;
  print("00:00:00.000");
  document.getElementById("laps").innerHTML = '';
}

function lapTime() {
  if (elapsedTime === 0) return;
  const lap = document.createElement("li");
  lap.textContent = timeToString(elapsedTime);
  document.getElementById("laps").appendChild(lap);
}
