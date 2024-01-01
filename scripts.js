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
        
        if (playerSelection === "rock" && computerSelection === "paper") {
            return("loss")
        }
        if (playerSelection === "rock" && computerSelection === "scissors") {
            return("win")
        }
        if (playerSelection === computerSelection)  {
            return("tie")
        }
        
        for(let i = 0; i < 3; i++) {
            let computerCounter = 0
            let playerCounter = 0
            const playerSelection = "rock"
            const computerSelection = getComputerChoice()
            if (playRound(playerSelection, computerSelection) == "loss") {
                computerCounter++
                console.log("Computer score: " + computerCounter)
            } else if (playRound(playerSelection, computerSelection) == "win") {
                playerCounter++
                console.log("Player score: " + playerCounter)
                
            } else {
                console.log("Player score: " + playerCounter)
                console.log("Computer score: " + computerCounter)
            }
    }
    
    
    const playerSelection = "rock"
    const computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    
    
    
    }
    
}

/*const playerSelection = "rock"
 playerSelection = playerSelection.toLowerCase() 
const computerSelection = getComputerChoice()
*/



                
game()

            











        

