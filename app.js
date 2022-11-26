const words = ["Rock", "Paper", "Scissors"];
console.log("Number meaning:\n0 - Rock\n1 - Paper\n2 - Scissors");

function getComputerChoice() {
  const choice = words[Math.floor(Math.random() * words.length)];
  return choice;
}

function getPlayerChoice() {
  let playerInput = parseInt(prompt("Enter a number from 0-2:"));
  const error = "Invalid choice!";

  if (playerInput == 0) {
    playerInput = words[0];
  } else if (playerInput == 1) {
    playerInput = words[1];
  } else if (playerInput == 2) {
    playerInput = words[2];
  } else {
    playerInput = error;
  }

  return playerInput;
}

function playRound(playerSelection, computerSelection) {
  console.log(`Player choice: ${playerSelection}`);
  console.log(`Computer choice: ${computerSelection}`);
  let result;

  switch (playerSelection) {
    case "Rock":
      if (computerSelection == "Rock") {
        result = "It's a TIE!";
      } else if (computerSelection == "Paper") {
        result = "\nYou Lose!\nPaper beats Rock!";
      } else if (computerSelection == "Scissors") {
        result = "\nYou Win!\nRock beats Scissors!";
      }
      break;
    case "Paper":
      if (computerSelection == "Paper") {
        result = "It's a TIE!";
      } else if (computerSelection == "Rock") {
        result = "\nYou Win!\nPaper beats Rock!";
      } else if (computerSelection == "Scissors") {
        result = "\nYou Lose!\nScissors beats Paper!";
      }
      break;
    case "Scissors":
      if (computerSelection == "Scissors") {
        result = "It's a TIE!";
      } else if (computerSelection == "Rock") {
        result = "\nYou Lose!\nRock beats Scissors!";
      } else if (computerSelection == "Paper") {
        result = "\nYou Win!\nScissors beats Paper!";
      }
      break;
    default:
        result = "Error!";
  }

  return console.log(result);
}

playRound(getPlayerChoice(), getComputerChoice());
