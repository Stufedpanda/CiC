const prompt = require('prompt-sync')();
const randomnum = Math.round(Math.random() * 10);
let guess = Number(prompt("guess a # between 1-10: "));
// console.log(guess, typeof guess, randomnum);

if (guess < 0 || guess > 10 || isNaN(guess)) {
    console.log("guess is not a valid number");
} else {
    if (guess === randomnum) {
        console.log("correct");
    } else {
        if (guess > randomnum) {
            console.log("guess is too high, " + guess + '>' + randomnum);
        } else {
            console.log("guess is too low, " + guess + '<' + randomnum);
        }
    }
}


