// index.js
// TODO : code review, check passing output from one func to another, add comments to func


let playerSelection = null;
let computerSelection = null;
let result = null;

function computerPlay() {
    const computerMove = ["paper","scizor","rock"]
    computerSelection = computerMove[Math.floor(Math.random() * computerMove.length)];
    return computerSelection;    
}

function playerPlay() {
   playerSelection = window.prompt("Type rock, paper or scizor to play");
   return playerSelection = playerSelection.toLowerCase();
}

function playRound(playerSelection, computerSelection) {     
    const resultWin = "win";
    const resultLoose = "lose";
    const resultTie = "tie";

    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scizor") {
                return result = resultWin;
            } else if  (computerSelection === "paper"){
                return result = resultLoose;          
            } else {
                return result = resultTie;
            }
        
        case "scizor":
            if (computerSelection === "paper") {
                return result = resultWin;
            } else if  (computerSelection === "rock"){
                return result = resultLoose;           
            } else {
                return result = resultTie;
            }
        
        case "paper":
            if (computerSelection === "scizor") {
                return result = resultWin;
            } else if  (computerSelection === "rock"){
                return result = resultLoose;             
            } else {
                return result = resultTie;
            }
    }
} 



function Game() {
    let winner = 0;
    let looser = 0;       

    for (let i = 0; i < 5; i++) {        
        playerPlay();
        computerPlay();
        playRound(playerSelection, computerSelection)
        if (result === "win") {
          ++winner;
          console.log("Player has won round. Won count: ", winner);
        } else if (result === "lose") {
            ++looser;
            console.log("Player has lost round. Lose Count: ", looser);
        } else {
             console.log("Tie u didn't get any ponits");
        }
        if (i === 4) {
            if (winner > looser) {
                console.log("You won the game. With score" + winner + " wins out of 5 rounds.");
            } else if (winner < looser) {
                console.log("You lost the game. With score " + looser + " losess and only " + winner + " win.");
            } else {
                console.log("You draw with computer. You had " + winner + " wins and " + looser +" loses and " + (5-(winner+looser)) + " times draw.");
            }
        } 
    }
}

computerPlay()
Game()



