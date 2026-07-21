const playButton = document.querySelector(".play-button");
playButton.addEventListener("click", playGame);

//create an Integer variable for humanScore
let humanScore = 0;

//create an Integer Variable for computerScore
let computerScore = 0;

// getting  node reference of a div to display results, and 2 p elements to diplay score
const resultDiv = document.querySelector(".results");
const computerScorePara = document.querySelector(".computer-score");
const playerScorePara = document.querySelector(".player-score");
const gamePlayContent = document.querySelector(".gameplay-content");
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
    
    playButton.style.display = "none";
    gamePlayContent.style.display = "flex";

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
                    resultDiv.textContent = "Rock can't beat a rock, draw";
                    resultDiv.style.color = "#A78BFA";
                }else if(computerChoice === "paper")
                {
                    computerScore+=1;
                    
                    resultDiv.textContent = "Paper somehow beated a rock, computer wins!";
                    resultDiv.style.color = "#EF4444";
    
                }else
                {
                    humanScore+=1;
                    resultDiv.textContent ="Rock smashed Scissor, human wins!";
                    resultDiv.style.color = "#22C55E";
                }
            }else if(humanChoice === "paper")
            {
                if(computerChoice === "rock")
                {
                    humanScore+=1;
            
                    resultDiv.textContent ="Paper somehow beated a rock, human wins!";
                    resultDiv.style.color = "#22C55E";
                }else if(computerChoice === "paper")
                {
                    resultDiv.textContent="Paper can't beat it self, it's a Draw!";
                    resultDiv.style.color = "#A78BFA";
                }else
                {
                    computerScore+=1;
                    resultDiv.textContent = "Scissor cut Paper in half, computer wins!"
                    resultDiv.style.color = "#EF4444";
                }
            }else
            {
                if(computerChoice === "rock")
                {
                    computerScore+=1;
                    resultDiv.textContent = "Rock smashed Scissor, Computer wins!";
                    resultDiv.style.color = "#EF4444";
                }else if(computerChoice === "paper")
                {
                    humanScore += 1;
                    resultDiv.textContent = "Scissor cut Paper in half, human wins!";
                    resultDiv.style.color = "#22C55E";
                }else
                {
                    resultDiv.textContent = "Scissor is just hugging the other scissor, It's a Draw!";
                    resultDiv.style.color = "#A78BFA";
                }
            }
            // updating player and computer score
            computerScorePara.textContent = "computer score = " + computerScore;
            playerScorePara.textContent = "player score = " + humanScore;
        }else
        {
            //after the player or computer reach score 5, initializig all nodes to their default display value at start
            nextRoundButton.style.display="none";
            chooseTitle.style.display="block";
            choicesCards.style.display = "flex";
            choices.style.display = "none";
            gamePlayContent.style.display="none";
            
            playButton.style.display = "block";
           
            
            
            if(humanScore === 5)
            {
                playButton.textContent ="Congratulations, You won! \n Click me to Replay"

            }else if(computerScore === 5 )
            {
                playButton.textContent ="ooooh, What a loser! \n Click me to Replay"
            }
            humanScore = 0;
            computerScore = 0;
        }
    }

    //creating variables that contains buttons, for rock paper scissor so the player choose between them
    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissor = document.querySelector(".scissors");
    const choicesCards = document.querySelector(".choices-cards");
    const choices = document.querySelector(".choices");
    
    const nextRoundButton = document.querySelector(".next-button")
    const chooseTitle = document.querySelector(".choose-title");

    //adding event listeners so it calls playRound function with the appropriate properties
    rock.addEventListener("click",()=>
    {
        nextRoundButton.style.display="block";
        chooseTitle.style.display="none";
        choicesCards.style.display = "none";
        choices.style.display = "flex";
        choices.querySelector(".player-choice-img").setAttribute("src", "images/rock.png");
        let computerChoiceNode = choices.querySelector(".computer-choice-img");
        let computerChoice = getComputerChoice();
        if(computerChoice === "rock")
        {
            computerChoiceNode.setAttribute("src", "images/rock.png");
        }else if(computerChoice === "paper")
        {
            computerChoiceNode.setAttribute("src", "images/paper.png");
        }else
        {
            computerChoiceNode.setAttribute("src", "images/scissor.png");
        }
        playRound("rock",computerChoice);
    });

    paper.addEventListener("click",()=>
    {
        nextRoundButton.style.display="block";
        chooseTitle.style.display="none";
        choicesCards.style.display = "none";
        choices.style.display = "flex";
        choices.querySelector(".player-choice-img").setAttribute("src", "images/rock.png");
        let computerChoiceNode = choices.querySelector(".computer-choice-img");
        let computerChoice = getComputerChoice();
        if(computerChoice === "rock")
        {
            computerChoiceNode.setAttribute("src", "images/rock.png");
        }else if(computerChoice === "paper")
        {
            computerChoiceNode.setAttribute("src", "images/paper.png");
        }else
        {
            computerChoiceNode.setAttribute("src", "images/scissor.png");
        }
        playRound("paper",computerChoice);
    })

    scissor.addEventListener("click",()=>
    {
        nextRoundButton.style.display="block";
        chooseTitle.style.display="none";
        choicesCards.style.display = "none";
        choices.style.display = "flex";
        choices.querySelector(".player-choice-img").setAttribute("src", "images/scissor.png");
        let computerChoiceNode = choices.querySelector(".computer-choice-img");
        let computerChoice = getComputerChoice();
        if(computerChoice === "rock")
        {
            computerChoiceNode.setAttribute("src", "images/rock.png");
        }else if(computerChoice === "paper")
        {
            computerChoiceNode.setAttribute("src", "images/paper.png");
        }else
        {
            computerChoiceNode.setAttribute("src", "images/rock.png");
        }
        playRound("scissor",computerChoice);
    })

    nextRoundButton.addEventListener("click",()=>
    {
        resultDiv.style.color = "#9CA3AF";
        resultDiv.textContent = "First to reach 5 score wins! good luck"
        choices.style.display ="none";
        nextRoundButton.style.display = "none";
        chooseTitle.style.display = "block";
        choicesCards.style.display = "flex";
    })
    // initializing computer score and player score to 0
    computerScorePara.textContent = "computer score = 0";
    playerScorePara.textContent = "player score = 0";
    
}



