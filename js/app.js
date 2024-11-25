/*-------------- Constants -------------*/
const render = () => {
}

/*---------- Variables (state) ---------*/
let deck = [
'1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'
];
let cards = [];
let firstCard = 0;
let secondCard = 0;
let matches = 0;
let winner = "";
let timerInterval;

/*----- Cached Element References  -----*/
const boardEl = document.querySelector(".deck");

const resetBtnEl = document.querySelector('#reset');

const messageEl = document.querySelector("#message");

const cardsEl = document.querySelectorAll('.card');

const matchCountEl = document.querySelector('.matches')

let matchCountScore = matchCountEl.textContent;

const startButtonEl = document.querySelector('#start')

/*-------------- Functions -------------*/
function init() {       
shuffleDeck()
matchCountEl.textContent = 0
display = document.querySelector(".time");
    StartTimer(90, display);
    quickLook();
}
function shuffleDeck () {
    for (let i = 0; i < deck.length ; i++) {
        let shuffle = Math.floor(Math.random() * (deck.length))
        let temp = deck[i];
        deck[i] = deck[shuffle];
        deck[shuffle] = temp;  
    } 
        deck.forEach((card, i) => {
        cardsEl[i].textContent = card;
        cardsEl[i].style.color = 'rgba(0, 0, 0, 0)'
    }) 
};


function quickLook() {
    cardsEl.forEach(card => {
        card.style.color = 'rgba(0, 0, 0, 1)';
    });

    setTimeout(() => {
        cardsEl.forEach(card => {
            card.style.color = 'rgba(0, 0, 0, 0)';
        });
    }, 2000);
}



function StartTimer(duration, display) {
    let timer = duration, minutes, seconds;

    if (timerInterval) {
        clearInterval(timerInterval);
    }

    timerInterval = setInterval(function(){
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

            minutes =  minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if(--timer < 0) {
                timer = duration;
               clearInterval(timerInterval)
               messageEl.textContent= `Times up! You lose! Try again?`
             } 

    }, 1000);
}
 
/*----------- Event Listeners ----------*/
function onClick(event) {
    cardIdx = event.target.id
    render()
}
startButtonEl.addEventListener('click', init)

resetBtnEl.addEventListener('click', init)

cardsEl.forEach((card) => {
    card.addEventListener('click', onClick)
    render()
});
    boardEl.addEventListener('click', (evt) => {
        evt.target.style.color = 'rgba(0, 0, 0, 1)'
        if (!firstCard && !secondCard) {
            firstCard = evt.target
        }   else if (firstCard && !secondCard) {
            secondCard = evt.target
        if (firstCard.textContent === secondCard.textContent) {
            matchCountEl.textContent  ++;
            messageEl.textContent= `You have a match!`
            firstCard = null
            secondCard = null
        if (matchCountEl.textContent == '8')
            messageEl.textContent= `Congratulations winner! You got all the matches!`    
        }   else {
            messageEl.textContent= `Not a match, try again!`
            setTimeout(()=> {
                firstCard.style.color = 'rgba(0, 0, 0, 0)'
                secondCard.style.color = 'rgba(0, 0, 0, 0)'
                firstCard = null
                secondCard = null
            }, 200)   
        }   
        }})


