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
    let rock = "rock"
    let paper = "paper"
    let scissors = "scissors"

    let choice = prompt("Pick rock, paper or scissors: ");
    if (choice.toLowerCase() == rock || choice.toLowerCase() == paper || choice.toLowerCase() == scissors) {
        return choice.toLowerCase();
    }
    else {
        let choice = prompt("Pick rock, paper or scissors: ");

    }
}

console.log(getComputerChoice());
console.log(getHumanChoice())