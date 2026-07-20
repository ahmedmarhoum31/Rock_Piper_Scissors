const playButton = document.querySelector(".playButton");
playButton.addEventListener("click", playGame);

//create an Integer variable for humanScore
let humanScore = 0;

//create an Integer Variable for computerScore
let computerScore = 0;

// getting  node reference of a div to display results, and 2 p elements to diplay score
const resultDiv = document.querySelector(".results");
const computerScorePara = document.querySelector(".computer-score");
const playerScorePara = document.querySelector(".player-score");
// Create a function that return either rock, paper, or scissors
function getComputerChoice()
{
    //create a float variable for randomNumber
    let randomNumber = Math.random() * 3;

    //Make a conditional statement to choose and return either rock, paper ,scissors based on the random number.
    if(randomNumber >=0 && randomNumber <1)
    {
        return "rock";
    }
    else if(randomNumber >=1 && randomNumber <2)
    {
        return "paper";
    }
    else if(randomNumber >=2 && randomNumber<3)
    {
        return "scissor";
    }
}




// Write a function that manage the whole game by using previous functions
function playGame()
{   
    

    // write a function for the game logic, that decide who is the round winner and increment the score
    function playRound(humanChoice, computerChoice)
    {
        if(humanScore!==5 && computerScore!==5)
        {
            //Decide who is the winner.
            if(humanChoice === "rock")
            {
                if(computerChoice === "rock")
                {
                    resultDiv.textContent = "Rock versus Rock is draw";
                }else if(computerChoice === "paper")
                {
                    computerScore+=1;
                    
                    resultDiv.textContent = "Paper beats Rock, computer wins!";
    
                }else
                {
                    humanScore+=1;
                    resultDiv.textContent ="Rock beats Scissor, human wins!";
                }
            }else if(humanChoice === "paper")
            {
                if(computerChoice === "rock")
                {
                    humanScore+=1;
            
                    resultDiv.textContent ="Paper beats Rock, human wins!";
                }else if(computerChoice === "paper")
                {
                    resultDiv.textContent="Paper versus Paper, it's a Draw!";
                }else
                {
                    computerScore+=1;
                    resultDiv.textContent = "Scissor beats Paper, computer wins!"
                }
            }else
            {
                if(computerChoice === "rock")
                {
                    computerScore+=1;
                    resultDiv.textContent = "Rock beats Scissor, Computer wins!";
                }else if(computerChoice === "paper")
                {
                    humanScore += 1;
                    resultDiv.textContent = "Scissor beats Paper, human wins!";
                }else
                {
                    resultDiv.textContent = "Scissor vs Scissor, It's a Draw!";
                }
            }
            // updating player and computer score
            computerScorePara.textContent = "computer score = " + computerScore;
            playerScorePara.textContent = "player score = " + humanScore;
        }else
        {
            if(humanScore === 5)
            {
                resultDiv.textContent = "player won!";

            }else if(computerScore === 5 )
            {
                resultDiv.textContent = "computer won!"
            }
            humanScore = 0;
            computerScore = 0;
            rockButton.remove();
            paperButton.remove();
            scissorButton.remove();
        }
    }

    //creating variables that contains buttons, for rock paper scissor so the player choose between them
    const rockButton = document.createElement("button");
    const scissorButton = document.createElement("button");
    const paperButton = document.createElement("button");
    const buttonsContainer = document.querySelector(".buttons-container");

    rockButton.textContent = "rock";
    scissorButton.textContent = "scissors";
    paperButton.textContent = "paper";

    buttonsContainer.appendChild(rockButton);
    buttonsContainer.appendChild(scissorButton);
    buttonsContainer.appendChild(paperButton);

    //adding event listeners so it calls playRound function with the appropriate properties
    rockButton.addEventListener("click", ()=>{
        playRound("rock",getComputerChoice());
    });
    scissorButton.addEventListener("click", ()=>{
        playRound("scissor", getComputerChoice());
    });
    paperButton.addEventListener("click", ()=>{
      playRound("paper", getComputerChoice());  
    });

    // initializing computer score and player score to 0
    computerScorePara.textContent = "computer score = 0";
    playerScorePara.textContent = "player score = 0";
    
}



