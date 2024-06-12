/*-------------- Constants -------------*/
const winningCombos = [
    []
]

/*---------- Variables (state) ---------*/
let deck = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'];
let cards = [];
let firstCard, secondCard;
let player = '';
let score = 0;
let winner = false;


/*----- Cached Element References  -----*/
const boardEl = document.querySelector(".deck");

const resetBtnEl = document.querySelector('#reset');

const messageEl = document.querySelector("#message");

const cardsEl = document.querySelectorAll('.card');

// const cardIdx = document.querySelectorAll('#id')

/*-------------- Functions -------------*/
function init() {

}
function render() {
}

function shuffleDeck(deck) {
    for(let i = deck.length - 1; i > 0; i-- ) {
        const random = Math.floor(Math.random() * (i + 1));

        [deck[i], deck[random]] = [deck[random], deck[i]];
        console.log(shuffleDeck)
    }
}
/*
function shuffleDeck () {
    for (let i = 0; i < deck.length; i++) {
        let shuffle = Math.floor(Math.random() * (deck.length))
        let temp = deck[i];
        deck[i] = deck[shuffle];
        deck[shuffle] = temp;
    }
};
*/
    deck.forEach((card, i) => {
        cardsEl[i].textContent = card;
    })

/*----------- Event Listeners ----------*/
function onClick(event) {
cardIdx = event.target.id
render()
init()
console.log("clicked", cardIdx)
}
// boardEl.addEventListener("click")

cardsEl.forEach((card) => {
    card.addEventListener('click', onClick)
    render()

});

resetBtnEl.addEventListener('click', init)

