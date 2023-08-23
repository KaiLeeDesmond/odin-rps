function getComputerChoice()
{
          let compChoices = ["rock", "paper", "scissors"] // let computer pick [rock, paper, scissors]
        let randomizeChoice = Math.floor(Math.random() * compChoices.length) + 1 // randomize rock paper and scissors
       
        if (randomizeChoice === 1) {
          return "rock";
        } if (randomizeChoice === 2) {
          return "paper";
        } if (randomizeChoice === 3) {
          return "scissors";
        }
       }
       

function round(playerSelection,computerSelection)
{
    let c = 0;
   
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase())
    console.log("Go Again");
    else
    {
    if(playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase()==="PAPER")
    {
    console.log("PAPER BEATS ROCK. COMPUTER WINS.");
    return 'computer';
    }
    else if(playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase()==="SCISSORS")
    {
        console.log("ROCK BEATS SCISSORS. PLAYER WINS.");
        return 'player';
    }
    else if(playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase()==="SCISSORS")
    {
        console.log("SCISSORS BEATS PAPER. COMPUTER WINS.");
    return 'computer';
    }
        else if(playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase()==="ROCK")
        {
        console.log("PAPER BEATS ROCK. PLAYER WINS.");
        return 'player';
    }
        else if(playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase()==="PAPER")
        {
        console.log("SCISSORS BEATS PAPER. PLAYER WINS.");
        return 'player';
    }
        else if(playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase()==="ROCK")
        {
        console.log("ROCK BEATS SCISSORS. COMPUTER WINS.");
        return 'computer';
    }
    }
}


function game()
{
    let c=0;
    let p=0;
    let x = "";
    let computerSelection = "";
    let playerSelection = "";
    let rounds = prompt("How many rounds do you wish to play?")
    for(let i=0;i<rounds;i++)
    {
        playerSelection = prompt("Enter your option")
        computerSelection = getComputerChoice();
        x = round(playerSelection,computerSelection);
        if(x==='computer')
        {
        c++;
        }
        else if(x === 'player')
        {
            p++;
        }
    }
    if(c>p)
    {
    console.log("Computer wins");
    console.log("Final Score:\nComputer: "+c+"\nPlayer: "+p);
    }
    else if(p>c)
    {
        console.log("Player wins");
        console.log("Final Score:\nComputer: "+c+"\nPlayer: "+p);
    }
    else if(p==c)
    {
        console.log("Tie");
        console.log("Final Score:\nComputer: "+c+"\nPlayer: "+p);
    }
}


game();
