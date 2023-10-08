// weird blackjack

let rng = Math.round(Math.random() * 5);
const prompt = require("prompt-sync")();
console.log("starting number is:", rng);

while(rng < 21){
    const input = prompt("Pick a number between 1-5: ");
    if(isNaN(input)){
        console.log("NaN");
    } else if(input > 5 || input < 1) {
        console.log("invalid input");
    }
    else{
        rng += Number(input);
        console.log("number is now:", rng)
    }
}

if(rng === 21){
    console.log("You Win!");
}
else if(rng > 21){
    console.log("You Lose :(");
}