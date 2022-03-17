// index.js

let computerSelection = null;
let playerWins = 0;
let computerWins = 0; 

function computerPlay() {
    const computerMove = ["paper","scissor","rock"]
    computerSelection = computerMove[Math.floor(Math.random() * computerMove.length)];
    return computerSelection;    
}

function computerOutput() {
    const compOut =  document.querySelector(".compPick"); 
    compOut.textContent = `Computer picked: ${computerSelection}`;
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('pick');
}

function playGame(e) {    
    const result =  document.querySelector(".gameResult"); 
    const changeStyle = document.querySelector(`button[class="${e.target.className}"]`);  
    const statistics =  document.querySelector(".finalStats"); 
    const statisticsResult = statistics.textContent = `Score: Player ${playerWins}, Computer ${computerWins}.`;    
    changeStyle.classList.add('pick');  
    computerPlay();
    computerOutput();       
    

    if (e.target.className === "rock pick") {
        if (computerSelection === "scissor") {
            result.textContent = "RESULT: You Won! Rock beats Scissor";            
            ++playerWins;        
            statisticsResult    
        } else if  (computerSelection === "paper"){
            result.textContent = "RESULT: You Lose! Paper beats Rock"; 
            ++computerWins;     
            statisticsResult       
        } else {
            result.textContent = "RESULT: Rock vs Rock it's Tie";
            statisticsResult
        }
    } else if (e.target.className === "scissor pick") {
        if (computerSelection === "paper") {
            result.textContent = "RESULT: You Won! Scissor beats Paper";
            ++playerWins;
            statisticsResult
        } else if  (computerSelection === "rock"){
            result.textContent = "RESULT: You Lose! Rock beats Scissors";  
            ++computerWins; 
            statisticsResult      
        } else {
            result.textContent = "RESULT: Scissor vs Scissor it's Tie";
            statisticsResult
        }
    } else if (e.target.className === "paper pick") {
        if (computerSelection === "rock") {
            result.textContent = "RESULT: You Won! Paper beats Rock";
            ++playerWins;
            statisticsResult  
        } else if  (computerSelection === "scissor"){
            result.textContent = "RESULT: You Lose! Scissors beats Paper";  
            ++computerWins;
            statisticsResult        
        } else {
            result.textContent = "RESULT: Paper vs Paper it's Tie";
            statisticsResult
        }     
    }

    if (playerWins === 5) {
        statistics.textContent = `Score: Player won the game, ${playerWins} wins vs computer ${computerWins} wins. Reload page if you want another round.`; 
        window.removeEventListener('click', playGame);
    } else if (computerWins === 5) {
        statistics.textContent = `Score: Computer won the game, ${computerWins} wins vs player ${playerWins} wins. Reload page if you want another round.`; 
        window.removeEventListener('click', playGame);
    }

}

const keys = Array.from(document.querySelectorAll('button'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('click', playGame);




