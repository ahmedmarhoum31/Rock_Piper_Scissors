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

