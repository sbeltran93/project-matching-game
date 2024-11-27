/*-------------- Constants -------------*/


/*---------- Variables (state) ---------*/
let deck = [
'images/butterfly.jpg','images/butterfly.jpg',
'images/caterpillar.jpg','images/caterpillar.jpg',
'images/ladybug.jpg','images/ladybug.jpg',
'images/leaves.jpg','images/leaves.jpg',
'images/mushroom.jpg','images/mushroom.jpg',
'images/rose.jpg','images/rose.jpg',
'images/sunflower.jpg','images/sunflower.jpg',
'images/tree.jpg','images/tree.jpg'
];
let cards = [];
let firstCard = 0;
let secondCard = 0;
let matches = 0;
let winner = "";
let timerInterval;
let matchCount = 0;

/*----- Cached Element References  -----*/
const boardEl = document.querySelector(".deck");

const resetBtnEl = document.querySelector('#reset');

const messageEl = document.querySelector("#message");

const cardsEl = document.querySelectorAll('.card');

const matchCountEl = document.querySelector('.matches')

let matchCountScore = matchCountEl.textContent;

const startButtonEl = document.querySelector('#start')

/*-------------- Functions -------------*/

const preloadImages = (images) => {
    images.forEach(src => {
        const img = new Image();
        img.src = src;
        // img.loading = "eager"
    });
}


function init() {  
    preloadImages(deck);         
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
            let imgElement = document.createElement('img');
            imgElement.src = card;
            imgElement.alt = 'card image';
            imgElement.style.display = 'none';
            cardsEl[i].innerHTML = '';
            cardsEl[i].appendChild(imgElement);            
      //  cardsEl[i].textContent = card;
      //  cardsEl[i].style.color = 'rgba(0, 0, 0, 0)'
    }); 
};


function quickLook() {
    cardsEl.forEach(card => {
        const img = card.querySelector('img');
        img.style.display = 'block';
    });

    setTimeout(() => {
        cardsEl.forEach(card => {
            const img = card.querySelector('img');
            img.style.display = 'none';
        });
    }, 1500);
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
}
startButtonEl.addEventListener('click', init)

resetBtnEl.addEventListener('click', init)

cardsEl.forEach((card) => {
    card.addEventListener('click', onClick)
});

boardEl.addEventListener('click', (evt) => {
    const clickedCard = evt.target;
    const img = clickedCard.querySelector('img');

    if (clickedCard.tagName === 'DIV' && img.style.display === 'none') {
        img.style.display = 'block'; // Reveal the image
        clickedCard.style.color = 'rgba(0, 0, 0, 0)'; // Optional: hide the text
    } else if (clickedCard.tagName === 'DIV' && img.style.display === 'block') {
        img.style.display = 'none'; // Hide the image again if clicked
        clickedCard.style.color = 'rgba(0, 0, 0, 0)'; // Optional: reset color
    }

    if (!firstCard && !secondCard) {
        firstCard = clickedCard;
    } else if (firstCard && !secondCard) {
        secondCard = clickedCard;
        if (firstCard.querySelector('img').src === secondCard.querySelector('img').src) {
            matchCountEl.textContent++;
            messageEl.textContent = `You have a match!`;
            firstCard = null;
            secondCard = null;
            if (matchCountEl.textContent == '8') {
                messageEl.textContent = `Congratulations winner! You got all the matches!`;
                clearInterval(timerInterval);  
            }
        } else {
            messageEl.textContent = `Not a match, try again!`;
            setTimeout(() => {
                firstCard.querySelector('img').style.display = 'none';
                secondCard.querySelector('img').style.display = 'none';
                firstCard = null;
                secondCard = null;
            }, 200);   
        }   
    }
});

