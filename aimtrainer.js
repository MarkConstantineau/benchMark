const startBtn = document.getElementById('start');
const reactionBox = document.getElementsByClassName('intro-section');
const targets = document.getElementsByClassName('fa-bullseye');
const introDiv = document.getElementById('intro-div');
const remainingTargets = document.getElementById('remainingTargets');
const score = document.getElementById('score');
const displayResults = document.getElementById('resultDivDisplay');
const tryAgainBtn = document.getElementById('tryBtn');
const saveScoreBtn = document.getElementById('saveBtn');
const boopNoise = new Audio('boop.wav');
var targetsLeft = document.getElementById('targetCountDiv');
var targetNum = 29;
var miliseconds = 0;
var myInterval;
var timeTaken;


function startTimer() {
    miliseconds++;
}

function changeTargetNum() {
    remainingTargets.innerText = "Remaining targets: " + targetNum;
    targetNum--;
    targets[0].style.top = (45*Math.random()) + "vh";
    targets[0].style.left = (80*Math.random()) + "vw";
}

function totalTime() {
    timeTaken = miliseconds / 1000 / 30;
    score.innerText = timeTaken.toFixed(2) + " seconds";
}

startBtn.addEventListener('click', () => {
    introDiv.style.display = "none";
    targetsLeft.style.display = "block";
    targets[0].style.top = (45*Math.random()) + "vh";
    targets[0].style.left = (80*Math.random()) + "vw";
targets[0].addEventListener('click', () => {   
       boopNoise.volume = 0.3;
       boopNoise.play();
       boopNoise.loop = false;
        myInterval = setInterval(startTimer, 10);
        changeTargetNum();
       if (targetNum < 0) {
        clearInterval(myInterval);
        targetsLeft.style.display = "none";
        displayResults.style.display = "block";
        totalTime();
       }
   })
});

tryAgainBtn.addEventListener('click', () => {

});

saveScoreBtn.addEventListener('click', () => {
localStorage.setItem("aimScore" , timeTaken.toFixed(2) + " seconds");
console.log(timeTaken.toFixed(2) + " seconds")
});





