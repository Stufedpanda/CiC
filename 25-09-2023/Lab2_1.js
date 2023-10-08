const first = "Forbes";
const last = "Li";
const age = 21;

console.log(first);
console.log(last);
console.log(age);
console.log(`I am ${first} ${last}, and I am ${age} years old`);

//-- Explanations --//
/*
* A variable can be declared by its type, name and then using an assign operator ('=')
* A number and a string are different types in js, with a string being any combination of characters, whereas numbers are purely made of integer digits
*/

//-- errors --//
/*
* TypeError: console.lg is not a function - mistyping log
* ReferenceError: consolelog is not defined - removing period
* SyntaxError: Invalid or unexpected token - removing one quotation mark
* SyntaxError: Missing initializer in const declaration - removing equals sign
* SyntaxError: Unexpected token 'const' - not initializing variable
*/
