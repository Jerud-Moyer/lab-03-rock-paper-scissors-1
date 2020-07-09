export function getRandomThrow() {
  //generate a random number between 1 and 3
    const rpsRandomNumber = Math.ceil((Math.random() * 3));
  
    if (rpsRandomNumber === 1) {
        return 'rock';
    } else if (rpsRandomNumber === 2) {
        return 'paper';
    } else if (rpsRandomNumber === 3) {
        return 'scissors';
    }
}


