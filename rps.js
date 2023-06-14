function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length); 
    return choices[randomNumber];
}

const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const rock = document.querySelector('#rock');

const manScore = document.querySelector("#player-score");
const machineScore =document.querySelector('#computer-score');
const roundResult = document.querySelector('#result');

const modal = document.getElementById("myModal");
const modalText = document.getElementById("finalResult");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

let playerScore = 0;
let computerScore = 0;
  
function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return "It's a tie!";
  } else if (
    (computerSelection === "scissors" && playerSelection === "rock") ||
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "rock" && playerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return`You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function updateScores() {
  manScore.textContent = playerScore;
  machineScore.textContent = computerScore;
}


function checkGameOver() {
  if (playerScore >= 5 || computerScore >= 5) {
    scissors.removeEventListener("click", handleScissorsClick);
    paper.removeEventListener("click", handlePaperClick);
    rock.removeEventListener("click", handleRockClick);

    if (playerScore > computerScore) {
      openModal();
      modalText.textContent = "You won the game!";
    } else if (computerScore > playerScore) {
      openModal();
      modalText.textContent ="You lost the game!";
    } else {
      openModal();
      modalText.textContent = "It's a tie game!";
    }
  }
}
  

function handleScissorsClick() {
  let playerSelection = "scissors";
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  roundResult.textContent = result;

  if (result.startsWith("You win!")) {
    playerScore++;
  } else if (result.startsWith("You lose!")) {
    computerScore++;
  }

  updateScores();
  checkGameOver();
}

function handlePaperClick() {
  let playerSelection = "paper";
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  roundResult.textContent = result;

  if (result.startsWith("You win!")) {
    playerScore++;
  } else if (result.startsWith("You lose!")) {
    computerScore++;
  }

  updateScores();
  checkGameOver();
}

function handleRockClick() {
  let playerSelection = "rock";
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  roundResult.textContent = result;

  if (result.startsWith("You win!")) {
    playerScore++;
  } else if (result.startsWith("You lose!")) {
    computerScore++;
  }

  updateScores();
  checkGameOver();
}

scissors.addEventListener('click', handleScissorsClick);
paper.addEventListener('click', handlePaperClick);
rock.addEventListener('click', handleRockClick);