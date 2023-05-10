function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2
    return choices[randomNumber]; // Return the corresponding choice
}

let computerChoice = getComputerChoice();
let playerChoice = prompt("Choose:", "Rock, paper, scissors?");

playerChoice = playerChoice.toLowerCase();
computerChoice = computerChoice.toLowerCase();


function playRound(playerChoice, computerChoice) {
    if (computerChoice === playerChoice) {
        alert("It's a tie!");
    } else if (computerChoice === "scissors" && playerChoice === "rock") {
        alert("You win!, rock beats scissors");
    }else if (computerChoice === "scissors" && playerChoice === "paper") {
        alert("You lose!, scissors beats paper");
    }else if (computerChoice === "paper" && playerChoice === "rock") {
        alert("You lose!, paper beats rock");
    }else if (computerChoice === "paper" && playerChoice === "scissors"){
        alert("You win!, scissors beats paper");
    }else if (computerChoice === "rock" && playerChoice === "paper"){
        alert("You win!, paper beats rock");
    }else if (computerChoice === "rock" && playerChoice === "scissors"){
        alert("You lose!, rock beats scissors");
    }
  }
   
  console.log(playRound(playerChoice, computerChoice));

  function game(){
    playRound();
    console.log(playRound);
    playRound();
    console.log(playRound);
    playRound();
    console.log(playRound);
    playRound();
    console.log(playRound);
    playRound();
    console.log(playRound);
    playRound();
    console.log(playRound);
  }
  