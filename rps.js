function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length); // Generate a random number between 0 and 2
    return choices[randomNumber]; // Return the corresponding choice
}

let computerSelection = getComputerChoice();
let playerSelection = prompt("Choose:", "Rock, paper, scissors?");

playerSelection = playerSelection.toLowerCase();
computerSelection = computerSelection.toLowerCase();



   
function game(){
    function playRound(playerSelection, computerSelection) {
        if (computerSelection === playerSelection) {
            return("It's a tie!");
        } else if (computerSelection === "scissors" && playerSelection === "rock") {
            return("You win!, rock beats scissors");
        }else if (computerSelection === "scissors" && playerSelection === "paper") {
            return("You lose!, scissors beats paper");
        }else if (computerSelection === "paper" && playerSelection === "rock") {
            return("You lose!, paper beats rock");
        }else if (computerSelection === "paper" && playerSelection === "scissors"){
            return("You win!, scissors beats paper");
        }else if (computerSelection === "rock" && playerSelection === "paper"){
            return("You win!, paper beats rock");
        }else if (computerSelection === "rock" && playerSelection === "scissors"){
            return("You lose!, rock beats scissors");
        }
      }
    }
  
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));