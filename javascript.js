function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
        return "rock";
    } else if (result === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let round = 0; // Round counter

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore += 1;
            return "You lose! Paper beats Rock";
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore += 1;
            return "You win! Rock beats Scissors";
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore += 1;
            return "You win! Paper beats Rock";
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore += 1;
            return "You lose! Scissors beats Paper";
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1;
            return "You win! Scissors beats Paper";
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore += 1;
            return "You lose! Rock beats Scissors";
        } else {
            return "Tie! No points to either of you";
        }
    }

    // Create a container for displaying scores and results
    const container = document.querySelector("#container");
    const resultDiv = document.createElement("div");
    const Computerscore = document.createElement("p");
    const HumanScore = document.createElement("p");
    const winnerAnnouncement = document.createElement("p");

    // Set initial score text content
    Computerscore.textContent = "Computer score: " + computerScore;
    HumanScore.textContent = "Human score: " + humanScore;
    Computerscore.style.color = "blue";
    HumanScore.style.color = "red";

    container.appendChild(resultDiv);
    container.appendChild(Computerscore);
    container.appendChild(HumanScore);
    container.appendChild(winnerAnnouncement);

    // Event listeners on buttons
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            if (round < 5) { // Only play if rounds are less than 5
                const humanChoice = button.textContent.toLowerCase();
                const computerChoice = getComputerChoice();
                resultDiv.textContent = playRound(humanChoice, computerChoice);

                // Update the scores after each round
                Computerscore.textContent = "Computer score: " + computerScore;
                HumanScore.textContent = "Human score: " + humanScore;

                round += 1; // Increment round counter

                if (round === 5) { // Check if 5 rounds have been played
                    // Announce the winner
                    if (humanScore > computerScore) {
                        winnerAnnouncement.textContent = "You win the game!";
                        winnerAnnouncement.style.color = "green";
                    } else if (computerScore > humanScore) {
                        winnerAnnouncement.textContent = "Computer wins the game!";
                        winnerAnnouncement.style.color = "red";
                    } else {
                        winnerAnnouncement.textContent = "It's a tie!";
                        winnerAnnouncement.style.color = "orange";
                    }
                }
            }
        });
    });
}

playGame();
