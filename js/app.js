/*-------------- Constants -------------*/

/*---------- Variables (state) ---------*/
let deck = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'];
let cards = [];
let firstCard = 0
let secondCard = 0
let matches = 0;
let winner = false;
// let shuffledDeck = []

/*----- Cached Element References  -----*/
const boardEl = document.querySelector(".deck");

const resetBtnEl = document.querySelector('#reset');

const messageEl = document.querySelector("#message");

const cardsEl = document.querySelectorAll('.card');

const matchCountEl = document.querySelector('.matches')

const startButtonEl = document.querySelector('#start')

/*-------------- Functions -------------*/
function init() {       
shuffleDeck()
display = document.querySelector(".time");
    StartTimer(90, display);
    matchCountEl.textContent = 0
}
const render = () => {
}
function winningGame(){
    if (matchCountEl.textContent === 2)
        messageEl.textContent= `Congratulations winner! You got all the matches!`
}

function shuffleDeck () {
//    console.log(deck)
    for (let i = 0; i < deck.length ; i++) {
        let shuffle = Math.floor(Math.random() * (deck.length))
        let temp = deck[i];
        deck[i] = deck[shuffle];
        deck[shuffle] = temp;  
    } 
    // console.log(deck)
        deck.forEach((card, i) => {
        cardsEl[i].textContent = card;
        cardsEl[i].style.color = 'rgba(0, 0, 0, 0)'
    }) 
};
 
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
            match = true
            messageEl.textContent= `You have a match!`
            firstCard = null
            secondCard = null
        }   else {
            messageEl.textContent= `Not a match, try again!`
            setTimeout(()=> {
                firstCard.style.color = 'rgba(0, 0, 0, 0)'
                secondCard.style.color = 'rgba(0, 0, 0, 0)'
                firstCard = null
                secondCard = null
            }, 200)
            messageEl.textContent= `Not a match, try again!`    
        }   
        }})

function StartTimer(duration, display) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(function(){
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

            minutes =  minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if(--timer < 0) {
                timer = duration;
               clearInterval(interval)
               messageEl.textContent= `Times up! You lose! Try again?`
             } 
        // create function to stop game and invoke in if statement
        // message for timer runs out

    }, 1000);
}

// https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
function winningGame(){
    if (matchCountEl.textContent === 2)
        messageEl.textContent= `Congratulations winner! You got all the matches!`
}