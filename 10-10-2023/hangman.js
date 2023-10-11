//-- Pseudocode --//
// const arr =  [list of predefined words]
// const word = arr[random index]
// let solution = '_'.repeat(word.length);
// console.log(solution)
// while tries is not 0 {
// prompt user to input letter
// check if letter is in word and what index (also if valid input and/or repeated letter)
// if letter in word {
// replace '_' in solution variable with all instances of guessed letter 
// print out new solution
// }
// else{
//  print how many tries left
// }
// }

const inWord = (word, letter) => {
    const indices = []; // store indices of instances that the letter occurs in the word
    for(let i = 0; i < word.length; i++) {
        if(word[i].toLowerCase() === letter.toLowerCase()){
            indices.push(i);
        }
    }
    return indices; // if blank, no letters in word
}

const replace = (solution, letter, index) => { // replace letter in a string given an index
    return newWord = solution.substring(0, index) + letter + solution.substring(index + 1);
}

//-- MAIN --//
const prompt = require("prompt-sync")();
const arr = ["fossil",
    "reverse",
    "attract",
    "profit",
    "prefer",
    "shelf",
    "tiger",
    "dignity",
    "novel",
    "responsible"]; // arr of predefined words
const seen = []; // arr to house already entered letters
const word = arr[Math.floor(Math.random() * arr.length)]; // randomely pick from list
let solution = '_'.repeat(word.length);
let tries = 6;
console.log(`Let's play Hangman: ` + solution + " | 6 tries left");

while(true){
    const guess = prompt("\nChoose a Letter: "); // user input
    if(guess === ""){
        break;
    }
    if(!/^[A-Za-z]$/.test(guess)) { // use regex to determine if its a character
        console.log("Not a valid character");
        continue;
    }

    if(!seen.includes(guess)){ // store guess in seen array if not already there
        seen.push(guess);
    }

    const index = inWord(word, guess); // array of indices

    if(index.length === 0){ // if letter not in word
        tries--;
        console.log(`${guess} is not in the word, ${tries} tries left, letters used: `, seen);
        if(tries === 0){
            console.log("Ran out of tries, gg");
            break;
        }
        else{
            continue;
        }
    }
    else{ // letter is in word
        for(const i of index){ // for all indices, replace letter in solution with user input
            solution = replace(solution, guess, i);
        }
        console.log("Current: " + solution, " | letters used: ", seen);
    }

    if(solution === word){ // win
        console.log("You Won!")
        break;
    }
}



