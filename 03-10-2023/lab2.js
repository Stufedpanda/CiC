// SONGS

const arr = ["XO Tour Love Liv3", "Killswitch riff", "Love Like You", "xanny bar", "paranoia"]
console.log("Starting Array is: ", arr, "Length is: ", arr.length);

arr[2] = "Ephemeral";
console.log("With the song I hate: ", arr);

arr.pop();
console.log("Removed the last song: ", arr);

arr.push("For Elise");
console.log("Added song at end: ", arr);

arr.shift();
console.log("Removed first song: ", arr);

arr.unshift("House of Memories");
console.log("Added song at start: ", arr);

console.log("trying to access 10th index", arr[10]);

// 2D ARRAY SUMS
const twod = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let sumrow = 0;
for(let row = 0; row < twod.length; row++){
    for(let col = 0; col < twod[0].length; col++){
        sumrow += twod[row][col];
    }
    console.log("sum of row: ", sumrow);
    sumrow = 0;
}

let sumdiagleft = 0;
let sumdiagright = 0;
let right = twod.length - 1;
for(let left = 0; left < twod.length; left++) {
    sumdiagleft += twod[left][left];
    sumdiagright += twod[left][right];
    right--;
}
console.log("diagonals are: ", sumdiagleft, sumdiagright)

// Movie Theatre

const theatre = [];
for (let i = 0; i < 3; i++){
    const temp = [];
    for (let j = 0; j < 5; j++){
        temp.push(j);
    }
    theatre.push(temp);
}
console.log(theatre)

const prompt = require("prompt-sync")();

let row = 0;
let seat = 0;
let close = "";
while(close != "done"){
    row = prompt("Which row would you like to book? ");
    seat = prompt("Which seat would you like to book? ");
    if(theatre[row - 1][seat - 1] != "X"){
        console.log("booking successful!");
        break;
    }
    close = prompt("type 'done' to finish, anything else to continue ");
}
// not sure if they want me to 