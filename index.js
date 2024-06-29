document.addEventListener('DOMContentLoaded', () => {
  let timer;
  let isRunning = false;
  let isPaused = false;
  let timeLeft = 25 * 60;

  const timeDisplay = document.getElementById('time');
  const startBtn = document.getElementById('start-btn');
  const pauseBtn = document.getElementById('pause-btn');
  const resetBtn = document.getElementById('reset-btn');

  function updateTimeDisplay() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  function startTimer() {
      if (!isRunning) {
          isRunning = true;
          isPaused = false;
          timer = setInterval(() => {
              if (timeLeft > 0) {
                  timeLeft--;
                  updateTimeDisplay();
              } else {
                  clearInterval(timer);
                  isRunning = false;
              }
          }, 1000);
      }
  }

  function pauseTimer() {
      if (isRunning) {
          clearInterval(timer);
          isRunning = false;
          isPaused = true;
      }
  }

  function resetTimer() {
      clearInterval(timer);
      isRunning = false;
      isPaused = false;
      timeLeft = 25 * 60;
      updateTimeDisplay();
  }

  startBtn.addEventListener('click', () => {
      if (isPaused) {
          startTimer();
      } else {
          resetTimer();
          startTimer();
      }
  });

  pauseBtn.addEventListener('click', pauseTimer);
  resetBtn.addEventListener('click', resetTimer);

  updateTimeDisplay();
});
