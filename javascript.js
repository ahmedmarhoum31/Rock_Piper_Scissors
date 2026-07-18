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

//create a function so the user can input his choice among rock, paper, scissor
function getHumanChoice()
{
    return prompt("choose between rock, paper, scissor:");
}


function playRound(humanChoice, computerChoice)
{
    //make humanChoice parameter; canse insensetive by turning or letters to lower case like computerChoice
    humanChoice = humanChoice.toLowerCase();

    //Decide who is the winner.
    if(humanChoice === "rock")
    {
        if(computerChoice === "rock")
        {
            console.log("Rock versus Rock is draw");
        }else if(computerChoice === "paper")
        {
            computerScore+=1;
            console.log("Paper beats Rock, computer wins!");
        }else
        {
            humanScore+=1;
            console.log("Rock beats Scissor, human wins!");
        }
    }else if(humanChoice === "paper")
    {
        if(computerChoice === "rock")
        {
            humanScore+=1;
            console.log("Paper beats Rock, human wins!");
        }else if(computerChoice === "paper")
        {
            console.log("Paper versus Paper, it's a Draw!");
        }else
        {
            computerScore+=1;
            console.log("Scissor beats Paper, computer wins!");
        }
    }else
    {
        if(computerChoice === "rock")
        {
            computerScore+=1;
            console.log("Rock beats Scissor, Computer wins!");
        }else if(computerChoice === "paper")
        {
            humanScore += 1;
            console.log("Scissor beats Paper, human wins!");
        }else
        {
            console.log("Scissor vs Scissor, It's a Draw!");
        }
    }
}

// Write a function that manage the whole game by using previous functions
function playGame()
{
    //create an Integer variable for humanScore
    let humanScore = 0;

    //create an Integer Variable for computerScore
    let computerScore = 0;

    // write a function for the game logic, that decide who is the round winner and increment the score
    function playRound(humanChoice, computerChoice)
{
    //make humanChoice parameter; canse insensetive by turning or letters to lower case like computerChoice
    humanChoice = humanChoice.toLowerCase();

    //Decide who is the winner.
    if(humanChoice === "rock")
    {
        if(computerChoice === "rock")
        {
            console.log("Rock versus Rock is draw");
        }else if(computerChoice === "paper")
        {
            computerScore+=1;
            console.log("Paper beats Rock, computer wins!");
        }else
        {
            humanScore+=1;
            console.log("Rock beats Scissor, human wins!");
        }
    }else if(humanChoice === "paper")
    {
        if(computerChoice === "rock")
        {
            humanScore+=1;
            console.log("Paper beats Rock, human wins!");
        }else if(computerChoice === "paper")
        {
            console.log("Paper versus Paper, it's a Draw!");
        }else
        {
            computerScore+=1;
            console.log("Scissor beats Paper, computer wins!");
        }
    }else
    {
        if(computerChoice === "rock")
        {
            computerScore+=1;
            console.log("Rock beats Scissor, Computer wins!");
        }else if(computerChoice === "paper")
        {
            humanScore += 1;
            console.log("Scissor beats Paper, human wins!");
        }else
        {
            console.log("Scissor vs Scissor, It's a Draw!");
        }
    }
}

    //create an Integer variable for roundNumber to count round numbers
    let roundNumber = 0;

    // create a while loop to play 5 rounds
    while(roundNumber < 5)
    {
        // calling playRound function to play 1 round
        playRound(getHumanChoice(), getComputerChoice());

        //Increment roundNumber function by 1
        roundNumber+=1
    }

    if(humanScore > computerScore)
    {
        console.log("Human is the winner by a score of "+ humanScore +".");
        console.log("Computer Score: "+computerScore+ " /human Score: "+humanScore);
    }else if(computerScore >humanScore)
    {
        console.log("computer is the winner by a score of "+ computerScore +".");
        console.log("Computer Score: "+computerScore+ " /human Score: "+humanScore);
    }else
    {
        console.log("It's a draw");
        console.log("Computer Score: "+computerScore+ " /human Score: "+humanScore);
    }
}