function getcomputerScore() {
    compScore = Math.random()
    if (compScore < 0.37) {
        
        return("rock")
    } 
    else if (compScore > 0.37 && compScore < 0.66) {
        
        return("scissors")
    }
    else {
        
        return("paper")
    }
}    
function playRound(userinput, computerScore) {
    
    
    if (computerScore == userinput) {
        
        return("tie")

    } 
    else if (userinput === "rock" && computerScore === "scissors") {
        playerPoints++
        
        return("win")
        
    } 
    else if (userinput === "rock" && computerScore === "paper") {
        computerPoints++
        
        return("loss")
    }
    else if (userinput === "paper" && computerScore === "scissors") {
        computerPoints++
        
        return("loss")
    } 
    else if (userinput === "paper" && computerScore === "rock") {
        playerPoints++
        
        return("win")
    }
    else if (userinput === "scissors" && computerScore === "rock") {
        computerPoints++
        
        return("loss")
    } 
    else if (userinput === "scissors" && computerScore === "paper") {
        playerPoints++
        return("win")
    }
}

let playerPoints = 0
let computerPoints = 0

function game() {
    
    for(let i = 0; i < 5; i++) {
        
        const userinput = prompt("Rock paper or scissors").toLowerCase()
        const computerScore = getcomputerScore()
        console.log(userinput)
        console.log(computerScore)
        console.log(playRound(userinput, computerScore))
    }
    if (computerPoints < playerPoints) {
        console.log("You won congraulations")
    } else if (computerPoints > playerPoints) {
        console.log("You lose")
    } else if (computerPoints == playerPoints) {
        console.log("You tied")
    }
}

game()









                


            











        

