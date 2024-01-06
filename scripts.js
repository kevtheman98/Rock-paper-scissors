let playerPoints = 0
let computerPoints = 0


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
        console.log("You have " + playerPoints)
        console.log("Opponent has " +computerPoints)
        return("tie")

    }   
    else if (userinput === "rock" && computerScore === "scissors") {
        playerPoints++
        console.log("You have " + playerPoints)
        console.log("Opponent has " +computerPoints)
        return("win")
        
    } 
    else if (userinput === "rock" && computerScore === "paper") {
        computerPoints++
        console.log("You have " + playerPoints)
        console.log("Opponent has " +computerPoints)
        
        return("loss")
    }
    else if (userinput === "paper" && computerScore === "scissors") {
        computerPoints++
        console.log("You have " + playerPoints)
        console.log("Opponent has " +computerPoints)
        
        return("loss")
    } 
    else if (userinput === "paper" && computerScore === "rock") {
        playerPoints++
        console.log("You have " + playerPoints)
        console.log("Opponent has " +computerPoints)
        
        return("win")
    }
    else if (userinput === "scissors" && computerScore === "rock") {
        computerPoints++
        console.log("You have " + playerPoints)
        console.log("Opponent has " +computerPoints)
        
        return("loss")
    } 
    else if (userinput === "scissors" && computerScore === "paper") {
        playerPoints++
        console.log("You have " + playerPoints)
        console.log("Opponent has " +computerPoints)
        return("win")
    }
}



function game() {
    
    
    for(let i = 0; i < 2; i++) {
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

const rockBtn = document.createElement('button')
const paperBtn = document.createElement('button')
const scissorsBtn = document.createElement('button')



game()









                


            











        

