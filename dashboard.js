const trashCan = document.getElementsByClassName('trashCan');
const bolt = document.getElementsByClassName('fa-bolt');
const popNoise = new Audio('pop.wav');


let reactionTestScore = document.getElementById('reactionTestScore');
let numberTestScore = document.getElementById('numberTestScore');
let aimTestScore = document.getElementById('aimTestScore');
let visualTestScore = document.getElementById('visualTestScore');
let verbalTestScore = document.getElementById('verbalTestScore');


trashCan[0].addEventListener('click', () => {
    reactionTestScore.innerText = "?"
    localStorage.setItem('reactionScore', "?")
});

trashCan[1].addEventListener('click', () => {
    numberTestScore.innerText = "?";
    localStorage.setItem('numberSequenceScore' , "?")
});

trashCan[2].addEventListener('click', () => {
    aimTestScore.innerText = "?";
    localStorage.setItem('aimScore' , "?")
});

trashCan[3].addEventListener('click', () => {

});

trashCan[4].addEventListener('click', () => {
    verbalTestScore.innerText = "?";
    localStorage.setItem('verbalScore' , "?")
});


bolt[0].addEventListener('onmouseover' , () => {
    popNoise.volume = 1;
    popNoise.play();
    popNoise.loop = false;
});


reactionTestScore.innerText = localStorage.getItem('reactionScore');
numberTestScore.innerText = localStorage.getItem('numberSequenceScore');
aimTestScore.innerText = localStorage.getItem('aimScore');
verbalTestScore.innerText = localStorage.getItem('verbalScore')


