export function checkResults(player, computer) {
    // I don't care what the different choices are if they're the same
    // If the choices are the same, return a tie condition.
    // Otherwise, check for either a win or loss condition only
    if (player === computer) return 'draw';
    // return player win condition
    if (player === 'rock' && computer === 'scissors') return 'win';
    if (player === 'rock' && computer === 'paper') return 'lose';
    if (player === 'paper' && computer === 'rock') return 'win';
    // return player win conditon
    if (player === 'paper' && computer === 'scissors') return 'lose';
    // return player lose condition
    if (player === 'scissors' && computer === 'paper') return 'win';
    // return player win condition
    if (player === 'scissors' && computer === 'rock') return 'lose'; 
    // return player lose condition
}