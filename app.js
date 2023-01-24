const words = ["Rock", "Paper", "Scissors"];
let playerScore = 0,
  computerScore = 0;

function getComputerChoice() {
  const choice = words[Math.floor(Math.random() * words.length)];
  return choice;
}

// function getPlayerChoice() {
//   let playerInput = prompt("Enter Rock, Paper or Scissors:");
//   let convertInput = playerInput.toLowerCase();
//   const error = "Invalid choice!";

//   if (convertInput == "rock") {
//     playerInput = words[0];
//   } else if (convertInput == "paper") {
//     playerInput = words[1];
//   } else if (convertInput == "scissors") {
//     playerInput = words[2];
//   } else {
//     playerInput = error;
//   }

//   return playerInput;
// }

function playRound(playerSelection, computerSelection) {
  // console.log(`Player choice: ${playerSelection}`);
  // console.log(`Computer choice: ${computerSelection}`);
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

function restartGame(pScoreInt, cScoreInt, result, pScore, cScore) {
  const resetBtn = document.querySelector('#reset');

  resetBtn.style.display = 'inline-block';
  
  resetBtn.addEventListener('click', () => {
    pScoreInt = 0;
    cScoreInt = 0;
    pScore.innerText = "Player Score: 0";
    cScore.innerText = "Computer Score: 0";
    result.innerText = "Result: N/A";
    return game();
  });
}

function checkWinner(playerScore, computerScore, result, pScore, cScore) {
  if (playerScore == 5 || computerScore == 5) {
    if (playerScore > computerScore) {
      result.innerText = `\nPlayer wins with a high score of ${playerScore}!`;
      restartGame(playerScore, computerScore, result, pScore, cScore);
    } else if (computerScore > playerScore) {
      result.innerText = `\nComputer wins with a high score of ${computerScore}`;
      restartGame(playerScore, computerScore, result, pScore, cScore);
    } else {
      result.innerText = "It's a TIE! No one wins!!!";
      restartGame(playerScore, computerScore, result, pScore, cScore);
    }
  }
}

function game() {
  const btnRock = document.querySelector("#rock");
  const btnPaper = document.querySelector("#paper");
  const btnScissors = document.querySelector("#scissors");
  const buttons = document.querySelectorAll('button');
  const results = document.querySelector(".results");
  const pScore = document.querySelector(".pScore");
  const cScore = document.querySelector(".cScore");


  // btnRock.addEventListener("click", () => {
  //   results.innerText = `Result: ${playRound("Rock", getComputerChoice())}`;
  //   pScore.innerText = `Players score: ${playerScore}`;
  //   cScore.innerText = `Computer Score: ${computerScore}`;
  // });

  // btnPaper.addEventListener("click", () => {
  //   results.innerText = `Result: ${playRound("Paper", getComputerChoice())}`;
  //   pScore.innerText = `Players score: ${playerScore}`;
  //   cScore.innerText = `Computer Score: ${computerScore}`;
  // });

  // btnScissors.addEventListener("click", () => {
  //   results.innerText = `Result: ${playRound("Scissors", getComputerChoice())}`;
  //   pScore.innerText = `Players score: ${playerScore}`;
  //   cScore.innerText = `Computer Score: ${computerScore}`;
  // });

  buttons.forEach(button => {
    button.addEventListener('click', function (e) {

      console.log(e.target.id);
      if (e.target.id === "rock"){
        if (!(playerScore >= 5 || computerScore >= 5)) {
          results.innerText = `Result: ${playRound("Rock", getComputerChoice())}`;
          pScore.innerText = `Player Score: ${playerScore}`;
          cScore.innerText = `Computer Score: ${computerScore}`;
          checkWinner(playerScore, computerScore, results, pScore, cScore);
        }
      } else if (e.target.id === "paper") {
        if (!(playerScore >= 5 || computerScore >= 5)) {
          results.innerText = `Result: ${playRound("Paper", getComputerChoice())}`;
          pScore.innerText = `Player Score: ${playerScore}`;
          cScore.innerText = `Computer Score: ${computerScore}`;
          checkWinner(playerScore, computerScore, results, pScore, cScore);
        }
      } else if (e.target.id === "scissors") {
        if (!(playerScore >= 5 || computerScore >= 5)) {
          results.innerText = `Result: ${playRound("Scissors", getComputerChoice())}`;
          pScore.innerText = `Player Score: ${playerScore}`;
          cScore.innerText = `Computer Score: ${computerScore}`;
          checkWinner(playerScore, computerScore, results, pScore, cScore);
        }
      }
    });
  })

  //console.log(playRound(getPlayerChoice(), getComputerChoice()));
  //console.log(`Players score: ${playerScore}`);
  //console.log(`Computer score: ${computerScore}`);
  // if (playerScore > computerScore) {
  //   console.log(`Player Wins!!!\nWith a high score of ${playerScore}!`);
  // } else if (computerScore > playerScore) {
  //   console.log(`Computer Wins!!!\nWith a high score of ${computerScore}`);
  // } else {
  //   console.log("It's a TIE! No one wins!!!");
  // }
}

game();
