// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { checkResults } from './check-results.js';

const button = document.querySelector('#guess-button');
const resetButton = document.getElementById('reset-button');
const current = document.querySelector('#current');
const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
const draws = document.querySelector('#draws');
const resets = document.querySelector('#resets');
const total = document.querySelector('#total');

// initialize state
let winsData = 0;
let drawsData = 0;
let lossesData = 0;
let totalGuesses = 0;
let resetCount = 0;

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    totalGuesses++;
    // how do i get the value of the currently selected radio button
    // hint: querySelector
    const checkedRadio = document.querySelector('input:checked');
    const userGuess = checkedRadio.value;

    // generate a random correct answer: heads or tails
    const computerThrow = getRandomThrow();

    const getResult = checkResults(userGuess, computerThrow);

    // compare the user guess to the correct answer
    if (getResult === 'draw') {
        drawsData++;
        current.textContent = 'You got a draw';
    } else if (getResult === 'win') {
        winsData++;
        current.textContent = 'YOU WON';
    } else if (getResult === 'lose') {
        lossesData++;
        current.textContent = 'YOU LOST';
    }

    total.textContent = 'total: ' + totalGuesses;
    wins.textContent = 'wins: ' + winsData;
    losses.textContent = 'losses: ' + lossesData;
    draws.textContent = 'draws: ' + drawsData;
});

const resetTheGame = () => {
    const doReset = window.confirm('Would you like to play again?');

    if (doReset === true) {
      //document.location.reload();
        resetCount++;
        // totalGuesses = 0;
        // winsData = 0;
        // lossesData = 0;
        // drawsData = 0;

        // total.textContent = 'total plays: ' + totalGuesses;
        // wins.textContent = 'wins: ' + winsData;
        // losses.textContent = 'losses: ' + lossesData;
        // draws.textContent = 'draws: ' + drawsData;
        resets.textContent = 'resets: ' + resetCount++;
        renderResults();
    } else {
        return false;
    }
};
resetButton.addEventListener('click', resetTheGame);
function renderResults() {
    let winsData = 0;
    let drawsData = 0;
    let lossesData = 0;
    let totalGuesses = 0;
    total.textContent = 'total plays: ' + totalGuesses;
    wins.textContent = 'wins: ' + winsData;
    losses.textContent = 'losses: ' + lossesData;
    draws.textContent = 'draws: ' + drawsData;
}
// const playerRandRoll = getRandomThrow();
// const computerRandRoll = getRandomThrow();
// console.log("Player choice is " + playerRandRoll);
// console.log("Computer choice is " + computerRandRoll);

// const results = checkResults(playerRandRoll, computerRandRoll);
// console.log("The result is " + results);