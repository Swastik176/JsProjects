let humanScore = 0;
let computerScore = 0;

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getHumanChoice(){
    console.log("Start!!");
    
    await delay(2000)
    console.log("Rock")
    
    await delay(1500)
    console.log("Paper")

    await delay(1500)
    console.log("Scissors")

    await delay(1500)
    return prompt("Shoot (rock/paper/scissors): ");
}

function getComputerChoice(){
    let randomly = Math.floor(Math.random()*10);

    if(0 <= randomly && randomly <= 3)
        return "rock";

    else if(4 <= randomly && randomly <= 6)
        return "paper";

    else
        return "scissors"
}

function playRound(humanChoice, computerChoice){
    console.log(`Your Choice: ${humanChoice}    Computer's Choice: ${computerChoice}`)

    if(humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors'){
        console.log("Enter Valid Choice(rock/paper/scissors) in Lower Case, Try Again!!")
        return -1;
    }

    if((humanChoice === 'rock' && computerChoice === 'scissors') || 
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice  === 'scissors' && computerChoice === 'paper')){
            console.log("You Won this Round")
            humanScore += 1;
    }
    else if(humanChoice === computerChoice){
        console.log("It's a draw.")
        return -1;
    }
    else{
        console.log("Computer Won this Round")
        computerScore += 1;
    }
    return 0;
}

async function playGame() {
    
    console.log("!!!Welome To Console Based Rock Paper Scissors Game!!!");
    console.log(`Rules:\nIts a traditional Rock Paper Scissors game where player needs to enter its choice (rock/paper/scissors) in lower case
        \nand computer will choose randomly among the choices, the winner of the round will get a point in case of nothing happens
        \nafter 5 rounds winner will be announced based on the scores`)

    console.log("The game will begin in 10 seconds");

    await delay(10000);

    let i = 1;
    while(i <= 5){
        let humanChoice = await getHumanChoice()
        let computerChoice = getComputerChoice()

        let round = playRound(humanChoice, computerChoice)

        if(round == -1)
            continue;

        console.log(`Scores after round ${i}:\nComputer:- ${computerScore}    Your:- ${humanScore}`)
        i += 1;
    }

    if(humanScore > computerScore){
        console.log(`Congratulations!!!\nYou Won!!!`)
    }
    else if(computerScore > humanScore){
        console.log("Better Luck Next Time!!!")
    }
    else{
        console.log("Good Game\nDraw!!!")
    }
}

playGame();