const words = ["Rock", "Paper", "Scissors"];
let playerScore = 0,
  computerScore = 0;
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
        computerScore += 1;
      } else if (computerSelection == "Scissors") {
        result = "\nYou Win!\nRock beats Scissors!\n";
        playerScore += 1;
      }
      break;
    case "Paper":
      if (computerSelection == "Paper") {
        result = "It's a TIE!\n";
      } else if (computerSelection == "Rock") {
        result = "\nYou Win!\nPaper beats Rock!\n";
        playerScore += 1;
      } else if (computerSelection == "Scissors") {
        result = "\nYou Lose!\nScissors beats Paper!\n";
        computerScore += 1;
      }
      break;
    case "Scissors":
      if (computerSelection == "Scissors") {
        result = "It's a TIE!\n";
      } else if (computerSelection == "Rock") {
        result = "\nYou Lose!\nRock beats Scissors!\n";
        computerScore += 1;
      } else if (computerSelection == "Paper") {
        result = "\nYou Win!\nScissors beats Paper!\n";
        playerScore += 1;
      }
      break;
    default:
      result = "Error!\n";
  }

  return result;
}

function game() {
  const btnRock = document.querySelector('#rock');
  const btnPaper = document.querySelector('#paper');
  const btnScissors = document.querySelector('#scissors');

  btnRock.addEventListener('click', () => {
    playRound('Rock', getComputerChoice());
  });

  btnPaper.addEventListener('click', () => {
    playRound('Paper', getComputerChoice());
  });

  btnScissors.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice());
  });

  //console.log(playRound(getPlayerChoice(), getComputerChoice()));
  console.log(`Players score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log(`Player Wins!!!\nWith a high score of ${playerScore}!`);
  } else if (computerScore > playerScore) {
    console.log(`Computer Wins!!!\nWith a high score of ${computerScore}`);
  } else {
    console.log("It's a TIE! No one wins!!!");
  }
}

game();
