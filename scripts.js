function getComputerChoice() {
    compchoice = Math.random()
    if (compchoice < 0.37) {
        return("rock")
    } 
    else if (compchoice > 0.37 && compchoice < 0.66) {
        return("scissors")
    }
    else {
        return("paper")
    }
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === "rock" && computerSelection === "paper") {
        return("You lost")
    }   else if (playerSelection === "rock" && computerSelection === "scissors") {
            return("You won")
    }   else if (playerSelection === computerSelection) 
            return("You tied try again? ")
}

const playerSelection = "rock"
const computerSelection = getComputerChoice()

console.log(playRound(playerSelection,computerSelection))

const result = playRound(playerSelection, computerSelection)
function counter() {
    let compScore = 0
    let playerscore = 0
    

    
}



        

