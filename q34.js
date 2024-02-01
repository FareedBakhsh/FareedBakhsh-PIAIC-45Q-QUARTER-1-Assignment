"use strict";
//Q34:
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names
//in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza 
//instead of printing just the name of the pizza. For each pizza you should have 
//one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states 
//how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like 
//and then an additional sentence, such as I really love pizza!
let my_Fav_pizzas = ['Chicken Tikka', 'Fajita', 'BBQ Chicken', "Margherita"];
//Printing  the names of my favourite pizza line by line;
console.log('Names of Favourite Pizzas:');
for (let i = 0; i < my_Fav_pizzas.length; i++) {
    console.log(my_Fav_pizzas[i]);
}
;
console.log('\nSentences about the favourite pizzas');
for (let i = 0; i < my_Fav_pizzas.length; i++) {
    console.log(`I likes ${my_Fav_pizzas[i]} pizza.`);
}
// Additional line outside the loop;
console.log('\nI really love pizzas!');
