// import functions and grab DOM elements
import { getRandomThrow, checkResults } from './get-random-throw.js'
// initialize state

// set event listeners to update state and DOM

const playerRandRoll = getRandomThrow();
const computerRandRoll = getRandomThrow();
console.log("Player choice is " + playerRandRoll);
console.log("Computer choice is " + computerRandRoll);

const results = checkResults(playerRandRoll, computerRandRoll);
console.log("The result is " + results);