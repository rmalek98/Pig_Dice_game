'use strict';

//add prompt to enter player1 and palyer2 name
const promptName = function() {
    let player1 = prompt('Player 1, please enter your name');
    document.querySelector('#name--0').innerHTML = player1;
    let player2 = prompt('Player 2, please enter your name');
    document.querySelector('#name--1').innerHTML = player2;
};
promptName();   

// slecting elements
const player0element = document.querySelector('.player--0');
const player1element = document.querySelector('.player--1');
const score0element = document.getElementById('score--0');
const score1element = document.querySelector('#score--1');
const currentPlayer0 = document.getElementById('current--0');
const currentPlayer1 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// stating conditions
score0element.textContent = 0;
score1element.textContent = 0;
//hidding the dice
diceEl.classList.add('hidden');

const scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;

//roll the dice function
btnRoll.addEventListener('click', function() {
    //generate random number
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    //display the dice
    diceEl.src = `dice_img/dice-${randomNumber}.png`;
    diceEl.classList.remove('hidden');
    //update the score
    if (randomNumber !== 1) {
        //add score
        roundScore += randomNumber;
        //display the score
        document.querySelector(`#current--${activePlayer}`).textContent = roundScore;
        
    } else {
        //next player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        roundScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0element.classList.toggle('player--active');
        player1element.classList.toggle('player--active');
    }
});

btnHold.addEventListener('click', function() {
    //add current score to global score
    scores[activePlayer] += roundScore;
    //display the score
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    //check if player won the game
    if (scores[activePlayer] >= 100) {
        document.querySelector(`#name--${activePlayer}`).textContent = 'Winner!';
        document.querySelector(`.player--${activePlayer}`).classList.add('winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        btnRoll.classList.add('hidden');
        btnHold.classList.add('hidden');
    } else {
        //next player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        roundScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0element.classList.toggle('player--active');
        player1element.classList.toggle('player--active');
    }   
});

btnNew.addEventListener('click', function() {
    scores[0] = 0;
    scores[1] = 0;
    roundScore = 0;
    activePlayer = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    player0element.classList.remove('winner');
    player1element.classList.remove('winner');
    player0element.classList.remove('player--active');
    player1element.classList.remove('player--active');
    player0element.classList.add('player--active');
    diceEl.classList.add('hidden');
    btnRoll.classList.remove('hidden');
    btnHold.classList.remove('hidden');
    promptName();  
});


// ----------for the Rules button----------
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.btn--rule');

//open the button text function
const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
//close the button text function
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
//add event listener to the button to show the text
btnOpenModal.addEventListener('click', openModal);
//add event listener to the close button to close the text
btnCloseModal.addEventListener('click', closeModal ); 
//add event listener to the overlay to close the text
overlay.addEventListener('click', closeModal);

// esc key to close the text
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

