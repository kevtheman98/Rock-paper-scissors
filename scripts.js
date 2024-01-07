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
    if (playerPoints == 5) {
        gameOver.textContent = "Game Over You Won!"
    } else if (computerPoints == 5) {
        gameOver.textContent = "Game Over you Lose!"
    } else {
        if (computerScore == userinput) {
            compare.textContent = "You tied go again?"
            playerResults.textContent = "Player Score: " + playerPoints
            compResults.textContent = "Opponent Score: " + computerPoints
            return("tie")

        }   
        else if (userinput === "rock" && computerScore === "scissors") {
            playerPoints++
            compare.textContent = "Rock beats scissors you win!"
            playerResults.textContent = "Player Score: " + playerPoints
            compResults.textContent = "Opponent Score: " + computerPoints
            return("win")
            
        } 
        else if (userinput === "rock" && computerScore === "paper") {
            computerPoints++
            compare.textContent = "Rock loses to paper you lose!"
            playerResults.textContent = "Player Score: " + playerPoints
            compResults.textContent = "Opponent Score: " + computerPoints
            
            
            return("loss")
        }
        else if (userinput === "paper" && computerScore === "scissors") {
            computerPoints++
            compare.textContent = "Paper loses to scissors you lose!"
            playerResults.textContent = "Player Score: " + playerPoints
            compResults.textContent = "Opponent Score: " + computerPoints
            
            return("loss")
        } 
        else if (userinput === "paper" && computerScore === "rock") {
            playerPoints++
            compare.textContent = "Paper beats rock you win!"
            playerResults.textContent = "Player Score: " + playerPoints
            compResults.textContent = "Opponent Score: " + computerPoints
            
            return("win")
        }
        else if (userinput === "scissors" && computerScore === "rock") {
            computerPoints++
            compare.textContent = "Scissors loses to rock you lose!"
            playerResults.textContent = "Player Score: " + playerPoints
            compResults.textContent = "Opponent Score: " + computerPoints
            
            return("loss")
        } 
        else if (userinput === "scissors" && computerScore === "paper") {
            playerPoints++
            compare.textContent = "Scissors beats paper you win!"
            playerResults.textContent = "Player Score: " + playerPoints
            compResults.textContent = "Opponent Score: " + computerPoints
            return("win")
        }
    }
}   


const body = document.querySelector('body')
const container = document.createElement('div')
const rockBtn = document.createElement('button')
const paperBtn = document.createElement('button')
const scissorsBtn = document.createElement('button')

body.appendChild(container)

container.classList.add("container");
rockBtn.classList.add('button')
paperBtn.classList.add('button')
scissorsBtn.classList.add('button')


rockBtn.addEventListener('click', () => {
    const computerScore = getcomputerScore()
    playRound("rock", computerScore)
})

paperBtn.addEventListener('click', () => {
    const computerScore = getcomputerScore()
    playRound("paper", computerScore)
})

scissorsBtn.addEventListener('click', () => {
    const computerScore = getcomputerScore()  
    playRound("scissors", computerScore)
})

const rockImg = document.createElement("img")
rockImg.classList.add('img')
rockImg.src = "rock.jpg"
rockBtn.appendChild(rockImg)

const paperImg = document.createElement("img")
paperImg.classList.add("img")
paperImg.src = "paper.jpg"
paperBtn.appendChild(paperImg)

const scissorsImg = document.createElement("img")
scissorsImg.classList.add("img")
scissorsImg.src = "scissors.jpg"
scissorsBtn.appendChild(scissorsImg)

container.appendChild(rockBtn)
container.appendChild(paperBtn)
container.appendChild(scissorsBtn)

const display = document.createElement('div')
display.classList.add('display')
body.appendChild(display)

const question = document.createElement('p') 
question.textContent = "Rock paper or scissors?"
display.appendChild(question)

const compare = document.createElement('p')
display.appendChild(compare)

const playerResults = document.createElement('li')
playerResults.classList.add('score')
display.appendChild(playerResults)


const compResults = document.createElement('li')
compResults.classList.add('score')
display.appendChild(compResults)

const gameOver = document.createElement('p')
display.appendChild(gameOver)









                


            











        

