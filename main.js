// ADD DIFFERENT TIMER FOR REGULAR POMODORO TIMER AND ADD A BREAK TIMER 

const timer = { 
    default: 25,
    defaultBreak: 5,
    longBreak: 15,
    longBreakInterval: 4
};

// ADD EVENT LISTENER TO BUTTONS TO BE ABLE TO CHANGE MODES

const modeButtons = document.querySelector("#js-mode-buttons");
modeButtons.addEventListener("click", handleMode);

function handleMode(event){
    const { mode } = event.target.dataset;

    if (!mode) return;

    swtichMode(mode)
};

// 