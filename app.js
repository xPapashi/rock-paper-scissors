const words = ["Rock", "Paper", "Scissors"];
console.log("Number meaning:\n0 - Rock\n1 - Paper\n2 - Scissors");

function getComputerChoice() {
  const choice = words[Math.floor(Math.random() * words.length)];
  return choice;
}

function getPlayerChoice() {
  let playerInput = prompt("Enter Rock, Paper or Scissors:");
  let convertInput = playerInput.toLowerCase();
  const error = "Invalid choice!";

  if (convertInput == "rock") {
    playerInput = words[0];
  } else if (convertInput == "paper") {
    playerInput = words[1];
  } else if (convertInput == "scissors") {
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
        result = "It's a TIE!\n";
      } else if (computerSelection == "Paper") {
        result = "\nYou Lose!\nPaper beats Rock!\n";
      } else if (computerSelection == "Scissors") {
        result = "\nYou Win!\nRock beats Scissors!\n";
      }
      break;
    case "Paper":
      if (computerSelection == "Paper") {
        result = "It's a TIE!\n";
      } else if (computerSelection == "Rock") {
        result = "\nYou Win!\nPaper beats Rock!\n";
      } else if (computerSelection == "Scissors") {
        result = "\nYou Lose!\nScissors beats Paper!\n";
      }
      break;
    case "Scissors":
      if (computerSelection == "Scissors") {
        result = "It's a TIE!\n";
      } else if (computerSelection == "Rock") {
        result = "\nYou Lose!\nRock beats Scissors!\n";
      } else if (computerSelection == "Paper") {
        result = "\nYou Win!\nScissors beats Paper!\n";
      }
      break;
    default:
      result = "Error!\n";
  }

  return result;
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
  }
}

game();