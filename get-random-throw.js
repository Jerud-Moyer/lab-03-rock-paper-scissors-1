export function getRandomThrow() {
  //generate a random number between 1 and 3
  const rpsRandomNumber = Math.ceil((Math.random() * 3));
  
  if (rpsRandomNumber === 1) {
    return "rock";
  } else if (rpsRandomNumber === 2) {
    return "paper";
  } else if (rpsRandomNumber === 3) {
    return "scissors";
  }
}

export function checkResults(player, computer) {
  
  if (player === computer) {
    // I don't care what the different choices are if they're the same
    // If the choices are the same, return a tie condition.
    // Otherwise, check for either a win or loss condition only
    return "draw";
  } else if (player === "rock") {
      if (computer === "scissors") {
        // return player win condition
        return "win";
      } else if (computer == "paper") {
        // return player lose condition
        return "lose";
      }
    } else if (player === "paper") {
      if (computer === "rock") {
        // return player win conditon
        return "win";
      } else if (computer === "scissors") {
        // return player lose condition
        return "lose";
      }
    } else if (player === "scissors") {
      if (computer === "paper") {
        // return player win condition
        return "win";
      } else if (computer === "rock") {
        // return player lose condition
        return "lose";
      }
    }
}