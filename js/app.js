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
    deck = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'];
    cards = [];
    firstCard = 0
    secondCard = 0
    matches = '';
    winner = false;    
shuffleDeck()
// shuffle(deck)
  cardsEl.forEach((card) => {
    card.innerText = deck[card]
}) 
}

const render = () => {
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
    }) 
};
function cardFlip () {
     
    }   

/*----------- Event Listeners ----------*/
function onClick(event) {
cardIdx = event.target.id
render()
// init()
// shuffleDeck()
// console.log("clicked", cardIdx)
}
// boardEl.addEventListener("click")

cardsEl.forEach((card) => {
    card.addEventListener('click', onClick)
    render()
});
    boardEl.addEventListener('click', (evt) => {
        if (!firstCard && !secondCard) {
            firstCard = evt.target.textContent
        }   else if (firstCard && !secondCard) {
            secondCard = evt.target.textContent
        if (firstCard === secondCard) {
            matchCountEl.textContent  ++;
            messageEl.textContent= `You have a match!`
            
            // console.log("You have a match!")
        }   else {
            messageEl.textContent= `Not a match, try again!`
            // console.log("not a match, try again!")
        }
        firstCard = null
        secondCard = null
        // setTimeout(hideCards, 1000)
        }})
        console.log("First Card: " + firstCard, "Second Card: " + secondCard)


startButtonEl.addEventListener('click', shuffleDeck)
    

resetBtnEl.addEventListener('click', render)


