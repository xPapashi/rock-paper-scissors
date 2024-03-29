const words = ["Rock", "Paper", "Scissors"];
let playerScore = 0,
  computerScore = 0;

function getComputerChoice() {
  const choice = words[Math.floor(Math.random() * words.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  let result;

  switch (playerSelection) {
    case "Rock":
      if (computerSelection == "Rock") {
        result = "It's a TIE!\n";
      } else if (computerSelection == "Paper") {
        result = "You Lose! Paper beats Rock!\n";
        computerScore += 1;
      } else if (computerSelection == "Scissors") {
        result = "You Win! Rock beats Scissors!\n";
        playerScore += 1;
      }
      break;
    case "Paper":
      if (computerSelection == "Paper") {
        result = "It's a TIE!\n";
      } else if (computerSelection == "Rock") {
        result = "You Win! Paper beats Rock!\n";
        playerScore += 1;
      } else if (computerSelection == "Scissors") {
        result = "You Lose! Scissors beats Paper!\n";
        computerScore += 1;
      }
      break;
    case "Scissors":
      if (computerSelection == "Scissors") {
        result = "It's a TIE!\n";
      } else if (computerSelection == "Rock") {
        result = "You Lose! Rock beats Scissors!\n";
        computerScore += 1;
      } else if (computerSelection == "Paper") {
        result = "You Win! Scissors beats Paper!\n";
        playerScore += 1;
      }
      break;
    default:
      result = "Error!\n";
  }

  return result;
}

function gameRestart() {
  const reset = document.querySelector('#reset');

  reset.style.display = "inline-block";
  reset.addEventListener('click', () => location.reload());
}

function displayWinner(playerScore, computerScore, result) {
  if (playerScore > computerScore) {
    result.innerText = `\nPlayer wins with a high score of ${playerScore}!`;
  } else if (computerScore > playerScore) {
    result.innerText = `\nComputer wins with a high score of ${computerScore}`;
  } else {
    result.innerText = "It's a TIE! No one wins!!!";
  }
}

function game() {
  const icons = document.querySelectorAll('.icon-box');
  const results = document.querySelector(".results");
  const pScore = document.querySelector(".pScore");
  const cScore = document.querySelector(".cScore");

  icons.forEach(icon => {
    icon.addEventListener('click', function (e) {
      if (playerScore === 5 || computerScore === 5) {
        gameRestart();
      } else {
        if (e.target.id === "rock" || e.target.id === "rock-hand"){
            results.innerText = `Result: ${playRound("Rock", getComputerChoice())}`;
            pScore.innerText = `Player Score: ${playerScore}`;
            cScore.innerText = `Computer Score: ${computerScore}`;
        } else if (e.target.id === "paper" || e.target.id === "paper-hand") {
            results.innerText = `Result: ${playRound("Paper", getComputerChoice())}`;
            pScore.innerText = `Player Score: ${playerScore}`;
            cScore.innerText = `Computer Score: ${computerScore}`;
        } else if (e.target.id === "scissors" || e.target.id === "scissors-hand") {
            results.innerText = `Result: ${playRound("Scissors", getComputerChoice())}`;
            pScore.innerText = `Player Score: ${playerScore}`;
            cScore.innerText = `Computer Score: ${computerScore}`;
        }
      }
    });
  })
}

game();
resetValues();