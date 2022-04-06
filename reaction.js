const introSection = document.getElementById('intro-section');
const saveScoreBtn = document.getElementById('saveBtn');
const introDiv = document.getElementById('intro-div');
const waitDiv = document.getElementById('wait-div');
const earlyClickDiv = document.getElementById('earlyClick-div');
const clickDiv = document.getElementById('click-div');
const timeDiv = document.getElementById('time-div');
const resultDiv = document.getElementById('result-div');
const score = document.getElementById('score');
const avgScore = document.getElementById('averageScore');
let timeOut;
let finalResult;
let combinedTime;
var miliseconds = 0;
var time1 = 0,
    time2 = 0,
    time3 = 0,
    time4 = 0,
    time5 = 0
var myInterval;
var counter = 0;



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

  function startTimer() {
    miliseconds++;
  }

  function totalTime() {
    var timeTaken = miliseconds / 100;
    score.innerText = timeTaken.toFixed(2) + " seconds";
}

let randomInt = getRandomInt(2, 6);


introDiv.addEventListener('click', () => {
    introDiv.style.display = "none";
    waitDiv.style.display = "flex";
    timeOut = setTimeout(() => {
        waitDiv.style.display = "none";
        clickDiv.style.display = "flex";
        myInterval = setInterval(startTimer, 10);
    }, randomInt * 1000);
});


waitDiv.addEventListener('click', () => {
    clearTimeout(timeOut);
    clearInterval(myInterval);
    waitDiv.style.display = "none";
    earlyClickDiv.style.display = "flex";
})

clickDiv.addEventListener('click', () => {
    clickDiv.style.display = "none";
    timeDiv.style.display = "flex";
    totalTime();
    
    clearInterval(myInterval);
    counter++;

    if (counter == 1) {
        time1 = miliseconds / 100
    } else if (counter == 2) {
        time2 = miliseconds / 100
    } else if (counter == 3) {
        time3 = miliseconds / 100
    } else if (counter == 4) {
        time4  = miliseconds / 100
    } else if (counter == 5) {
        time5 = miliseconds / 100
    }

    if (counter >= 5) {
        clickDiv.style.display = "none";
        timeDiv.style.display = "none";
        resultDiv.style.display = "flex";
         combinedTime = time1 + time2 + time3 + time4 + time5;
         finalResult = combinedTime / 5;
        avgScore.innerText = finalResult.toFixed(2)  + " seconds";
    }
    miliseconds = 0;
});

timeDiv.addEventListener('click', () => {
    timeDiv.style.display = "none";
    waitDiv.style.display = "flex";
    timeOut = setTimeout(() => {
        waitDiv.style.display = "none";
        clickDiv.style.display = "flex";
        myInterval = setInterval(startTimer, 10);
    }, randomInt * 1000);
});

earlyClickDiv.addEventListener('click', () => {
    earlyClickDiv.style.display = "none";
    waitDiv.style.display = "flex";
    timeOut = setTimeout(() => {
        waitDiv.style.display = "none";
        clickDiv.style.display = "flex";
        myInterval = setInterval(startTimer, 10);
        }, randomInt * 1000);
});

saveScoreBtn.addEventListener('click', () => {
localStorage.setItem('reactionScore', finalResult.toFixed(2)  + " seconds");
});


