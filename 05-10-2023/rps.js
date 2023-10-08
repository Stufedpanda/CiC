// Requires: User input
// Does: Checks for valid input
// Returns: Valid user input or false if invalid

const input = (input) => {
    const valid = ["rock", "paper", "scissors", "r", "s", "p"];
    if(valid.includes(input.toLowerCase())){
        return input.toLowerCase()[0]; // return first letter of string, r, s or p;
    }
    else{ // invalid 
        return false;
    }
}

// Requires: N/A
// Does: Determines computer choice randomely
// Returns: computer choice
const computer = () => {
    const choices = ['r', 's', 'p'];
    const rng = Math.round(Math.random() * 2);
    return choices[rng];
}

// Requires: User input, computer choice, score -> array where arr[0] - computer, arr[1] - user
// Does: checks who won and updates a score
// Returns: round winner
// If tie, score is not increased
const determineWinner = (user, computer, score) => {
    let winner = 0; // -1 if computer, 1 if user
    if(user === 'r'){
        if (computer === 'p'){
            score[0]++;
            winner = -1;
        }
        else if(computer === 's') {
            score[1]++;
            winner = 1;
        }
    }
    else if(user === 'p'){
        if(computer === 'r'){
            score[1]++;
            winner = 1;
        }
        else if(computer === "s"){
            score[0]++;
            winner = -1;
        }
    }
    else{
        if(computer === "s"){
            score[0]++;
            winner = -1;
        }
        else if(computer === "p"){
            score[1]++;
            winner = 1;
        }
    }
    return winner;
}

// Requires: result, user input, computer choice, score
// Does: prints out round winner and the chosen options and the round score
// Returns: N/A
const roundWin = (result, user, computerm, score) => {
    const choices = {
        r: "Rock",
        p: "Paper",
        s: "Scissors",
    }

    if(result === -1){
        console.log(`Computer chose ${choices[computer]}, Player chose ${choices[user]} - Computer won the round`);
    }
    else if(result === 1){
        console.log(`Computer chose ${choices[computer]}, Player chose ${choices[user]} - Player won the round`);
    }
    else{
        console.log(`Computer chose ${choices[computer]}, Player chose ${choices[user]} - It's a tie`);
    }
    console.log("Current score is: ", score)
}

// Requires: score
// Does: prints out score
// Returns: N/A
const finalScore = (score) => {
    console.log(`Computer's score is ${score[0]}, player's score is ${score[1]}`);
    return;
}   

// Main
const prompt = require("prompt-sync")();
const score = [0, 0]
while(true){
    const user = prompt("Rock, Paper or Scissors? (Type done to exit) ");
    if(user.toLowerCase() === 'done'){
        break;
    }
    if(input(user) === false){
        continue;
    }
    const comp = computer();
    const winner = determineWinner(input(user), comp, score)
    roundWin(winner, user, comp, score);
}
finalScore(score);
