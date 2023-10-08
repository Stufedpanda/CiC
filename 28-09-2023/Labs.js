//-- Lab 1.1 --//
// let balance = 100;

// const prompt = require("prompt-sync")();

// let user = prompt("How much would you like to withdraw/deposit: ");

// if (isNaN(user)) {
//     console.log("NaN");
// } else if(balance + parseFloat(user) < 0){
//     console.log("Insufficient Funds");
// } else {
//     console.log(`Remaining balance: $${balance + parseFloat(user)}`);
// }


//-- Lab 1.2 --//
// let sum = 0;
// for(let i = 1; i <= 10; i++){
//     sum += i;
// }
// console.log(`sum of numbers from 1-10 is: ${sum}`);

// let start = '';
// for(let i = 1; i<6; i++) {
//     start += String(i)
//     console.log(start);
// }

//-- Lab 2.1 --//
// let balance = 100;

// const prompt = require("prompt-sync")();
// let bool = true;
// while(bool){
//     let user = prompt("How much would you like to withdraw/deposit: ");
//     if (parseFloat(user) === 0){
//         break;
//     }
//     if (isNaN(user)) {
//         console.log("NaN");
//     } 
//     // else if(balance + parseFloat(user) < 0){
//     //     console.log("Insufficient Funds");
//     // } 
//     else {
//         balance += parseFloat(user);
//         console.log(`Remaining balance: $${balance}`);
//     }
// }

//-- Lab 2.2 --//
// const rng = Math.round(Math.random() * 100) + 1; //1-100
// const prompt = require("prompt-sync")();

// let guess = -1;
// while(parseInt(guess) !== rng){
//     guess = prompt("Guess a Number between 1-100: ");
//     const diff = rng - parseInt(guess);
//     if (parseInt(guess) === rng){
//         console.log("Correct!");
//         break;
//     }
//     else if (diff < 10 && diff > -10){
//         console.log("warm");
//     }
//     else{
//         console.log("cold");
//     }
//     console.log(rng) // just so I can see the ans
// }
