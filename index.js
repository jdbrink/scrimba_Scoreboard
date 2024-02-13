let homeScore = 0;
let guestScore = 0;
homeScoreEl = document.getElementById("home-score");
guestScoreEl = document.getElementById("guest-score");
const timerMinutes = 15;
let time = timerMinutes * 6000;
const timerEl = document.getElementById("timer");
let timerInterval;
let quarter = 1;
displayQuarter();




// <=========================  SCORING FUNCTIONS ===============================>

function add1ToHome() {
    homeScore += 1
    homeScoreEl.textContent=homeScore
}
function add2ToHome() {
    homeScore += 2
     homeScoreEl.textContent=homeScore
}
function add3ToHome() {
    homeScore += 3
     homeScoreEl.textContent=homeScore
}
function add1ToGuest() {
    guestScore += 1
     guestScoreEl.textContent=guestScore
}
function add2ToGuest() {
    guestScore += 2
     guestScoreEl.textContent=guestScore
}
function add3ToGuest() {
    guestScore += 3
     guestScoreEl.textContent=guestScore
}
function reset() {
    homeScore = 0
    homeScoreEl.textContent=homeScore
    guestScore = 0
    guestScoreEl.textContent=guestScore
    }
    if(time == 0) {
        time = timerMinutes * 60;
        updateTimer();
    }
// <============================== TIMER FUNCTIONS =============================>
function displayQuarter() {
    switch(quarter){
        case 1:
            document.getElementById("quarter1").style.background="#FF7700";
            document.getElementById("quarter2").style.background="#1B244A";
            document.getElementById("quarter3").style.background="#1B244A";
            document.getElementById("quarter4").style.background="#1B244A";
            break;
        case 2:
            document.getElementById("quarter1").style.background="#1B244A";
            document.getElementById("quarter2").style.background="#FF7700";
            document.getElementById("quarter3").style.background="#1B244A";
            document.getElementById("quarter4").style.background="#1B244A";
            break;
        case 3:
            document.getElementById("quarter1").style.background="#1B244A";
            document.getElementById("quarter2").style.background="#1B244A";
            document.getElementById("quarter3").style.background="#FF7700";
            document.getElementById("quarter4").style.background="#1B244A";
            break;
        case 4:
            document.getElementById("quarter1").style.background="#1B244A";
            document.getElementById("quarter2").style.background="#1B244A";
            document.getElementById("quarter3").style.background="#1B244A";
            document.getElementById("quarter4").style.background="#FF7700";
            break; 
        default:
            document.getElementById("final").textContent="FINAL";
            break;
        }       
    }

function startTimer() {
    
       // timerInterval= setInterval(runTimer, 1000);
       // Updated to run at 100th/sec (10 milliseconds)
       timerInterval = setInterval(runTimer, 10);
}

function stopTimer() {
    
    clearInterval(timerInterval);
}

function updateTimer() {  // format the display string

    let minutes = Math.floor(time / 6000);
    if (time >= 6000){
        let seconds = Math.floor(time % 6000 / 100);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerEl.textContent = minutes + ":" + seconds;
        } else {
        let seconds = Math.floor(time % 6000 /100);
        let hundreths = time % 100
        seconds = seconds < 10 ? "0" + seconds : seconds;
        hundreths = hundreths< 10 ? "0" + hundreths : hundreths;
        timerEl.textContent =  seconds + "." + hundreths;
        }
    
}

function resetTimer(){
    stopTimer();
    time = timerMinutes * 6000;
    updateTimer();
    timerEl.style.backgroundColor = "#080001";
    timerEl.style.color = "#FA7700";
    timerEl.style.border = "none";
    if(quarter > 4) {
        quarter = 4;
        displayQuarter();
        document.getElementById("final").textContent=" ";

    }
}

function runTimer() {
    time--;
    if (time == 0) {
        stopTimer();
        time = timerMinutes * 6000;
        resetTimer();
        quarter++;
        displayQuarter();

    } else {
        if (time <= 12100) {
            timerEl.style.backgroundColor = "#FA7700";
            timerEl.style.textShadow = "0 0 2px #1B244A";
            timerEl.style.color = "#080001";
            timerEl.style.border = "6px solid #080001";
        } else {
            timerEl.style.backgroundColor = "#080001";
            timerEl.style.color = "#FA7700";
            timerEl.style.border = "none";
        }}
        updateTimer();

}

