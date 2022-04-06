var timeDuration = 2;
var amountOfTime = 2000;
var amountOfNums = 1;
var level = 1;

const startBtn = document.getElementById('start');
const submitBtn = document.getElementById('submit-btn');
const saveScoreBtn = document.getElementById('saveBtn');
const introDiv = document.getElementById('intro-div');
const numberDiv = document.getElementById('number-div');
const passDiv = document.getElementById('pass-div');
const failDiv = document.getElementById('fail-div');
const enterNumberDiv = document.getElementById('enter-number-div');
const randomNums = document.getElementById('randomNums');
const currentLevel = document.getElementById('currentLevel');
const passLevel = document.getElementById('passLevel');
const failLevel = document.getElementById('failLevel');
const passNumber = document.getElementById('passNumber');
const failNumber = document.getElementById('failNumber');
const userAnswerPass = document.getElementById('userAnswerPass');
const userAnswerFail = document.getElementById('userAnswerFail');
const nextButton = document.getElementById('nextBtn');
const tryAgainButton = document.getElementById('tryAgainBtn');
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const timeLine = document.querySelector('.round-time-bar');


let newNum = "";
let randomNum = "";

startBtn.addEventListener('click', () => {
  introDiv.style.display = "none";
  numberDiv.style.display = "flex";
  newNum = "";
    for (i = 0; i < amountOfNums; i++) {
        randomNum = Math.floor(Math.random() * numArray.length);
        newNum += randomNum;
        randomNums.innerText = newNum
      }
      amountOfNums++;
      timeLine.style = "--duration: " + timeDuration;
  setTimeout(() => {
    numberDiv.style.display = "none";
    enterNumberDiv.style.display = "flex";
  }, amountOfTime);
});


var submitBox = document.getElementById("submit-box");
submitBox.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
    if (newNum == submitBox.value) {
      enterNumberDiv.style.display = "none";
      passNumber.innerText = newNum;
      userAnswerPass.innerText = submitBox.value;
      passDiv.style.display = "flex";
      level++;
      passLevel.innerText = "Level " + level;
      submitBox.value = "";
    } else {
      enterNumberDiv.style.display = "none";
      failNumber.innerText = newNum;
      userAnswerFail.innerText = submitBox.value;
      failLevel.innerText = "Level " + level;
      failDiv.style.display = "flex";
    }
  }
});

submitBtn.addEventListener('click', () => {
  if (newNum == submitBox.value) {
    enterNumberDiv.style.display = "none";
    passNumber.innerText = newNum;
    userAnswerPass.innerText = submitBox.value;
    passDiv.style.display = "flex";
    level++;
    passLevel.innerText = "Level " + level;
    submitBox.value = "";
  } else {
    enterNumberDiv.style.display = "none";
    failNumber.innerText = newNum;
    userAnswerFail.innerText = submitBox.value;
    failLevel.innerText = "Level " + level;
    failDiv.style.display = "flex";
  }
});

nextButton.addEventListener('click', () => {
  passDiv.style.display = "none";
  newNum = "";
    for (i = 0; i < amountOfNums; i++) {
        randomNum = Math.floor(Math.random() * numArray.length);
        newNum += randomNum;
        randomNums.innerText = newNum
      }
      amountOfNums++;
      timeDuration = timeDuration + 1.5;
      amountOfTime = amountOfTime + 1500;
      numberDiv.style.display = "flex";
      timeLine.style = "--duration: " + timeDuration;
      setTimeout(() => {
        numberDiv.style.display = "none";
        enterNumberDiv.style.display = "flex";
      }, amountOfTime);
});


saveScoreBtn.addEventListener('click', () => {
localStorage.setItem("numberSequenceScore" , "Level " + level);
})



