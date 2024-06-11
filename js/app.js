/*-------------- Constants -------------*/
const winningCombos = [
    []
]

/*---------- Variables (state) ---------*/
let board = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let cards = [];
let firstCard, secondCard;
let player = '';
let score = 0;
let winner = false;


/*----- Cached Element References  -----*/
const boardEl = document.querySelector(".grid-container");

const resetBtnEl = document.querySelector('#reset');

const messageEl = document.querySelector("#message");

const cardsEl = document.querySelectorAll('.card');


/*-------------- Functions -------------*/
function init() {

}
function render() {

}
function displayText() {
    
}

/*----------- Event Listeners ----------*/
function onClick(event) {
const cardIdx = event.target.id
render()
}
cardsEl.forEach((card) => {
    card.addEventListener('click', onClick)
});
resetBtnEl.addEventListener('click', init)