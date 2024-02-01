"use strict";
//24 : More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. Have at least one
// True and one False result for each of the following:
// • Tests for equality and inequality with strings 
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and 
//less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array;
let str1 = "Hello";
let str2 = "hello";
let number1 = 5;
let number2 = 11;
let array = ['Oppo', 'I-phone', 'Vivo'];
///Tests for equality and Inequlity with string;
console.log("Test For Equality wiht string: I predict False.");
console.log(str1 == str2);
console.log("Test For Inequality wiht string: I predict True.");
console.log(str1 != str2);
// Tests using the lower case function
console.log("Test using the lower case function: I predict True.");
console.log(str1.toLowerCase() == str2);
//Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to
console.log("Numerical test for equality: I predict False.");
console.log(number1 == number2);
console.log("Numerical test for inequality: I predict True.");
console.log(number1 != number2);
console.log("Greater than test: I predict False.");
console.log(number1 > number2);
console.log("Less than test: I predict True.");
console.log(number1 < number2);
console.log("Greater than or equal to test: I predict False.");
console.log(number1 >= number2);
console.log("Less than or equal to test: I predict True.");
console.log(number1 <= number2);
// Tests using "and" and "or" operators
console.log("Test using 'and' operator: I predict True.");
console.log(number1 < number2 && str1 == 'Hello');
console.log("Test using 'or' operator: I predict True.");
console.log(number1 > number2 || str1 == 'Hello');
// Test whether an item is in an array
console.log("Test whether 'oppo' is in the array: I predict True.");
console.log(array.includes('Oppo'));
// Test whether an item is not in an array
console.log("Test whether 'grape' is not in the array: I predict True.");
console.log(!array.includes('grape'));
