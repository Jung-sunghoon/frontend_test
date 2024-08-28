const timerInput = document.querySelectorAll(".timerInput");
const startOrStopBtn = document.querySelector(".startOrStopBtn");
const resetBtn = document.querySelector(".resetBtn");
let timerInterval;
let isRunning = false;

const startTimer = () => {
  timerInterval = setInterval(() => {
    let hours = parseInt(document.querySelector(".hour .timerInput").value, 10);
    let minutes = parseInt(
      document.querySelector(".minuate .timerInput").value,
      10
    );
    let seconds = parseInt(
      document.querySelector(".second .timerInput").value,
      10
    );

    if (hours == "00" && minutes == "00" && seconds == "00") {
      clearInterval(timerInterval);
      startOrStopBtn.textContent = "START";
      isRunning = false;
      startOrStopBtn.disabled = true;
      resetBtn.disabled = true;
      return;
    }

    if (seconds > 0) {
      seconds -= 1;
    } else {
      seconds = 59;

      if (minutes > 0) {
        minutes -= 1;
      } else {
        minutes = 59;

        if (hours > 0) {
          hours -= 1;
        }
      }
    }

    document.querySelector(".hour .timerInput").value = String(hours).padStart(
      2,
      "0"
    );
    document.querySelector(".minuate .timerInput").value = String(
      minutes
    ).padStart(2, "0");
    document.querySelector(".second .timerInput").value = String(
      seconds
    ).padStart(2, "0");
  }, 1000);
};

timerInput.forEach((item) => {
  item.addEventListener("input", () => {
    let value = item.value;

    value = value.padStart(2, "0");

    item.value = value;
  });
});

resetBtn.addEventListener("click", (e) => {
  e.preventDefault();

  timerInput.forEach((item) => {
    item.value = "00";
  });

  clearInterval(timerInterval);
  startOrStopBtn.textContent = "START";
  isRunning = false;
});

startOrStopBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (isRunning) {
    clearInterval(timerInterval);
    startOrStopBtn.textContent = "START";
  } else {
    startOrStopBtn.textContent = "PAUSE";
    startTimer();
  }

  isRunning = !isRunning;
});
