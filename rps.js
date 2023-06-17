function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length); 
    return choices[randomNumber];
}

const button = document.querySelector('.button');

const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const rock = document.querySelector('#rock');

const manScore = document.querySelector("#player-score");
const machineScore =document.querySelector('#computer-score');
const roundResult = document.querySelector('#result');

const modal = document.getElementById("myModal");
const modalText = document.getElementById("finalResult");

const playAgain = document.getElementById("replay");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

button.addEventListener('click', function() {
  // Alternar la clase 'clicked' al hacer clic
  button.classList.toggle('clicked');
});

/*window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};*/

let playerScore = 0;
let computerScore = 0;
  
function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return `It's a tie: ${playerSelection} clashed`;
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
      modalText.textContent = "¡Gano la humanidad!";
      openModal();
    } else if (computerScore > playerScore) {
      modalText.textContent ="¡Gano la maquina!";
      openModal();
    }
  }
}
  

function handleScissorsClick() {
  let playerSelection = "scissors";
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  roundResult.textContent = result;

  if (result.startsWith("You win!")) {
    roundResult.style.cssText = "background-color: green";
    playerScore++;
  } else if (result.startsWith("You lose!")) {
    roundResult.style.cssText = "background-color: #e73d3d";
    computerScore++;
  } else {
    roundResult.style.cssText = "background-color: #3DD1E7";
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
    roundResult.style.cssText = "background-color: green";
    playerScore++;
  } else if (result.startsWith("You lose!")) {
    roundResult.style.cssText = "background-color: #e73d3d";
    computerScore++;
  } else {
    roundResult.style.cssText = "background-color: #3DD1E7";
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
    roundResult.style.cssText = "background-color: green";
    playerScore++;
  } else if (result.startsWith("You lose!")) {
    roundResult.style.cssText = "background-color: #e73d3d";
    computerScore++;
  } else {
    roundResult.style.cssText = "background-color: #3DD1E7";
  }

  updateScores();
  checkGameOver();
}

function resetGame(){
  playerScore = 0;
  computerScore = 0;
  updateScores();
  closeModal();
  roundResult.textContent = " ";

  scissors.addEventListener('click', handleScissorsClick);
  paper.addEventListener('click', handlePaperClick);
  rock.addEventListener('click', handleRockClick);
}

scissors.addEventListener('click', handleScissorsClick);
paper.addEventListener('click', handlePaperClick);
rock.addEventListener('click', handleRockClick);
playAgain.addEventListener('click', resetGame);