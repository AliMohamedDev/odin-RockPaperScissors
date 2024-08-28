function getComputerChoice() {

    let result = Math.floor(Math.random() * 3);

    if (result == 0) {
        return "rock";
    }
    else if (result == 1) {
        return "paper";
    }

    else {
        return "scissors";
    }


}

function getHumanChoice() {
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    let choice = prompt("Pick rock, paper or scissors: ");
    if (choice.toLowerCase() == rock || choice.toLowerCase() == paper || choice.toLowerCase() == scissors) {
        return choice.toLowerCase();
    }
    else {
        let choice = prompt("Pick rock, paper or scissors: ");

    }
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {


    if (humanChoice == "rock" && computerChoice.toLowerCase() == "paper") {

        computerScore += 1;
        return "You lose! Paper beats Rock";
    }

    else if (humanChoice == "rock" && computerChoice.toLowerCase() == "scissors") {

        humanScore += 1;
        return "You win! Rock beats Scissors";
    }

    else if (humanChoice == "paper" && computerChoice.toLowerCase() == "rock") {

        humanScore += 1;
        return "You win! Paper beats Rock";
    }

    else if (humanChoice == "paper" && computerChoice.toLowerCase() == "scissors") {

        computerScore += 1;
        return "You lose! Scissors beats Paper";
    }

    else if (humanChoice == "scissors" && computerChoice.toLowerCase() == "paper") {

        humanScore += 1;
        return "You win! Scissors beats Paper";
    }

    else if (humanChoice == "scissors" && computerChoice.toLowerCase() == "rock") {

        computerScore += 1;
        return "You lose! Rock beats Scissors";
    }









}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);
console.log(playRound(humanSelection, humanSelection));
