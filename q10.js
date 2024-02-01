"use strict";
// Q10 ; Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If you don’t have anything specific to write because your programs are
// too simple at this point, just add your name and the current date at the top of each program file. 
// Then write one sentence describing what the program does.
/// Program 1:
function sum(a, b) {
    // Add a and b and store the result
    const result = a + b;
    // Return the calculated sum
    return result;
}
// Example using the 'sum' function:
const num1 = 14;
const num2 = 3;
const total = sum(num1, num2);
console.log(`The sum of ${num1} and ${num2} is : ${total}`);
// Program 2:
// This program defines a function 'isEven' that checks if a given number is even or odd.
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
// Example using the 'isEven' function:
const result = isEven(15);
console.log(`The given number 15 is even: ${result}`);
