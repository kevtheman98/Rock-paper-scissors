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


    
function game() {
    
    
    function playRound(playerSelection, computerSelection) {
        
        console.log(playerSelection)
        console.log(computerSelection)
        
        
        
        if (playerSelection === "rock" && computerSelection === "paper") {
                console.log("You lost rock loses to paper")
                return("loss")
        }
        if (playerSelection === "rock" && computerSelection === "scissors") {
                    console.log("You won rock beats sissors")
                    return("win")
        }
        if (playerSelection === computerSelection)  {
                    console.log("You tied try again? ")
                    return("tie")
        }
    }
    playRound(playerSelection, computerSelection)
    
    let computerCounter = 0
    if (playRound == "loss" && (playerSelection && computerSelection <=5 )) {
        computerCounter + 1
        console.log("Computer score: " + computerCounter)
    }
    if (playRound == "win" && (playerSelection && computerSelection <=5)) {
        playerCounter + 1
        console.log("Player score: " + playerCounter)

    }
    
}
const playerSelection = "rock"
/* playerSelection = playerSelection.toLowerCase() */
const computerSelection = getComputerChoice()


                
game()

            











        

