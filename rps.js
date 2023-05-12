function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length); 
    return choices[randomNumber];
  }
  
  function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
      return "It's a tie!";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
      return "You win! Rock beats scissors.";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
      return "You lose! Scissors beats paper.";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
      return "You lose! Paper beats rock.";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
      return "You win! Scissors beats paper.";
    } else if (computerSelection === "rock" && playerSelection === "paper") {
      return "You win! Paper beats rock.";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
      return "You lose! Rock beats scissors.";
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      let computerSelection = getComputerChoice();
      let playerSelection = prompt("Choose: Rock, paper, or scissors?");
      playerSelection = playerSelection.toLowerCase();
      computerSelection = computerSelection.toLowerCase();
  
      let result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.startsWith("You win!")) {
        playerScore++;
      } else if (result.startsWith("You lose!")) {
        computerScore++;
      }
    }
  
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log("You won the game!");
    } else if (computerScore > playerScore) {
      console.log("You lost the game!");
    } else {
      console.log("It's a tie game!");
    }
  }
  
  game();
