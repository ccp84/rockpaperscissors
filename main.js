const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error:Invalid Input");
  }
};

const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "rock";
      break;

    case 1:
      return "paper";
      break;

    case 2:
      return "scissors";
      break;

    default:
      console.log("Error: Computer choice invalid");
  }
};

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return `You both picked ${userChoice}, this game was a tie`;
  }
  if(userChoice === 'bomb') {
    return "Cheat code activated. You win!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Sorry, paper beats rock. Computer wins";
    } else {
      return "Rock beats scissors, you win.";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Sorry, scissors beat paper. Computer wins";
    } else {
      return "Paper beats rock. You win.";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Sorry, rock beats scissors. Computer wins";
    } else {
      return "Scissors beat paper. You win.";
    }
  }
}

function playGame() {
  let userChoice = getUserChoice('paper');
  console.log(`User choice: ${userChoice}`);
  let computerChoice = getComputerChoice();
  console.log(`Computer choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();