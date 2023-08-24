const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button')
let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML=userChoice;
    generateComputerChoice()
}))

function generateComputerChoice(){
    const randomNumber =Math.floor(Math.random() * possibleChoices.length + 1) ;
    
    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    else if (randomNumber===2 ){
        computerChoice ='paper';
    }
    else {
        computerChoice='scissors'}
    computerChoiceDisplay.innerHTML=computerChoice;

    displayResult()
}

function displayResult(){
    if ((userChoice==='rock' && computerChoice==="scissors") ||
    (userChoice=='paper'&& computerChoice == "rock" )||
    (userChoice=="scissors" && computerChoice == "paper")){
        resultDisplay.innerHTML='You Win';
        console.log('you win');
        }
        else if(userChoice === computerChoice){
            resultDisplay.innerHTML='Match Draw';
        }
    else{
        resultDisplay.innerHTML='Computer Win';
    }
}