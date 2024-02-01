"use strict";
//////////////////////////////////////////////////////////////////////////////////////
//Q :3 Name Cases: Store a person’s name in a variable, and then print
// that person’s name in lowercase, uppercase, and titlecase.
let yourName = 'Fareed Bakhsh';
console.log(yourName);
console.log(yourName.toUpperCase());
console.log(yourName.toLowerCase());
console.log(yourName.replace(/\b\w/g, c => c.toUpperCase()));
