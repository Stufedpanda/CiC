//-- LAB 1 --//
// Create an object representing yourself. The object should have properties like name, age, isStudent, etc. Print the entire object.
const me = {
    name: "Forbes",
    age: 21,
    gender: "Male",
    isStudent: true,
    school: "University of Toronto",
    occupation: "Software Developer",
}
console.log("Printing Object: ", me);

// Access and print 3 of the properties using dot notation.
console.log("Three properties: ", me.name, me.age, me.gender);

// Try to access an attribute that hasn't been set, like middleName. What gets printed? 
console.log("Accessing middleName: ", me.middleName) // undefined gets printed

// Remove the isStudent property from your object without changing your original object declaration. 
delete me.isStudent;

// Add the following properties: hobbies (an array of 3 strings), favoriteColour, favoriteSongs (an array of 4 strings) 
me.hobbies = ["Reading", "Gaming", "Coding"];
me.favColor = "Purple";
me.favSongs = ["Cherry Blossoms", "Astrid", "Tek It", "Tension!"];

// Print the entire modified object. 
console.log("Modified Object: ", me)

// Use object dot notation and array accessing to print out the following: “One of my hobbies is __[Your first hobby]___ and the song I play while doing this hobby is ___[Your third favorite song]___”
console.log(`One of my hobbies is ${me.hobbies[0]} and the song I play while doing this hobby is ${me.favSongs[3]}`);

// Repeat the above, but using bracket notation instead. -- the above is already bracket notation :)
console.log(`One of my hobbies is ${me["hobbies"][0]} and the song I play while doing this hobby is ${me["favSongs"][3]}`);

// Create the following variable declaration and initialization (let hobbies = 'favoriteFood'). Print out the results of the following and for each one, describe why you get the results that you do:
let hobbies = "favouriteFood";
console.log(me.hobbies); // printing out hobbies in the object, not the variable
console.log(me[hobbies]); // no property "favouriteFood"
console.log(me['hobbies']); // printing out hobbies in the object, not the variable


// EXPENSE TRACKER
const prompt = require("prompt-sync")();
const arr = [];
let total = 0;
while(true){
    desc = prompt("Description of item (or type exit to close) ");
    if(desc.toLowerCase() === "exit") {
        break;
    }
    amount = prompt("amount it costs ");
    total += Number(amount);
    arr.push({desc: desc, amount: amount});
}

console.log(arr);
console.log(total);


//-- LAB 2 --//
// A function that counts the number of vowels in a string
const numVowels = (word) => {
    const vowels = ["a", "e", "i", "o", "u", "y"];
    let count = 0;
    for(let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i])) {
            count++;
        }
    }
    return count;
}
// console.log(numVowels("Helloy"));

// A function that, when provided a sentence (string), returns the longest word in the sentence
const longest = (sentence) => {
    const words = sentence.split(" ");
    let longest = "";
    let numLongest = -1;
    for (const word of words) {
        if(word.length > numLongest){
            longest = word;
            numLongest = word.length;
        }
    }
    return(longest);
}
// console.log(longest("I have a dog and a koala"));

// A function that takes two parameters, a grade and the total, and produces a letter grade to represent the score. The grading scale is:
const grade = (grade, total) => {
    const percent = Math.round(grade/total * 100);
    if(percent > 90) {
        return "A";
    }
    if(percent > 80) {
        return "B";
    }
    if(percent > 70) {
        return "C";
    }
    if(percent > 60) {
        return "D";
    }
    else {
        return "F";
    }
}
// console.log(grade(0, 70))

// Blackjack
// A function that is responsible for asking for user input and checking if it is valid input
const validInput = (input) => {
    console.log(input)
    if(isNaN(input)){
        return false;
    } else if(input > 5 || input < 1) {
        return false;
    }
    else{
        return true;
    }
}

// A function that will add the user’s input to the current sum and add on a new random number each time
const add = (sum, input) => {
    let rng = Math.round(Math.random() * 5); // add on a new random number each time??
    sum = sum + input + rng; // adds user input and a random number?
    return sum;
}

// A function that is responsible for checking if the game is over and stopping the game if it is
const isOver = (total) => {
    if(total >= 21) {
        return false; // over
    }
    else {
        return true; // not over
    }
}

// A function that is responsible for printing a winning or losing message to the console depending on whether the user won or not
const message = (sum) => {
    if(sum > 21){ // over 21
        return "Bust!"
    }
    else {
        return "You won!" // 21
    }
}

// MAIN
let sum = 0;
while(isOver(sum)){
    console.log(sum)
    const input = prompt("Pick a number between 1-5: ");
    if(validInput()) {
        sum = add(sum, user);
        if(!isOver(sum)){
            console.log(message(sum))
            break;
        }
        console.log(sum)
    }
    else{
        console.log("not valid input");
        continue;
    }

}
message(sum);
