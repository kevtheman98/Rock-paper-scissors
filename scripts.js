function getComputerChoice() {
    compchoice = Math.random()
    if (compchoice < 0.37) {
        return("Rock")
    } 
    else if (compchoice > 0.37 && compchoice < 0.66) {
        return("scissors")
    }
    else {
        return("paper")
    }
}

console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == "rock" && computerSelection == "paper") {
        return("You lost")
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return("You won")
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return("You won")
    }
    else (playerSelection == "rock" && computerSelection == "paper") {
        return("You ")
    }
    
}
const playerSelection = "rock"
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection))

