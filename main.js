    // ADD DIFFERENT TIMER FOR REGULAR POMODORO TIMER AND ADD A BREAK TIMER 
    const timer = {
        pomodoro: 25,
        shortBreak: 5,
        longBreak: 15,
        longBreakInterval: 4,
      };

      // ADD EVENT LISTENER TO BUTTONS TO BE ABLE TO CHANGE MODES
      const modeButtons = document.querySelector('#js-mode-buttons');
      modeButtons.addEventListener('click', handleMode);
      
      
      // FUNCTION TO UPDATE CLOCK WHEN MODE IS CHANGED
      function updateClock() {
        const { remainingTime } = timer;
        const minutes = `${remainingTime.minutes}`.padStart(2, '0');
        const seconds = `${remainingTime.seconds}`.padStart(2, '0');
      
        const min = document.getElementById('js-minutes');
        const sec = document.getElementById('js-seconds');
        min.textContent = minutes;
        sec.textContent = seconds;
      }

      // FUNCTION TO SWITCH BETWEEN MODES
      function switchMode(mode) {
        timer.mode = mode;
        timer.remainingTime = {
          total: timer[mode] * 60,
          minutes: timer[mode],
          seconds: 0,
        };
      
        document
          .querySelectorAll('button[data-mode]')
          .forEach(e => e.classList.remove('active'));
        document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
        document.body.style.backgroundColor = `var(--${mode})`;
      
        updateClock();
      }
    
    // FUNCTION TO HANDLE MODE CHANGE
      function handleMode(event) {
        const { mode } = event.target.dataset;
      
        if (!mode) return;
      
        switchMode(mode);
      }