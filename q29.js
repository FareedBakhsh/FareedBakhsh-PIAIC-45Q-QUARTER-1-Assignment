"use strict";
//Q 29 :
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if 
//statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, 
// the if block should print a statement, such as You really like bananas!
let my_Fav_Fruits = ['apples', 'Bananas', 'Orange'];
if (my_Fav_Fruits.includes("apples")) {
    console.log("Waho , apples is one of my Favourite fruits");
}
if (my_Fav_Fruits.includes("Bananas")) {
    console.log("Waho , Bananas is one also of my Favourite fruits");
}
if (my_Fav_Fruits.includes("Orange")) {
    console.log("Waho , this is third of my Favourite fruits");
}
if (my_Fav_Fruits.includes("melon")) {
    console.log("Waho , orange is one of my Favourite fruits");
}
else {
    console.log(" Melon is not include in my favourite fruits of array list");
}
if (my_Fav_Fruits.includes("straberry")) {
    console.log("Waho , this is one of my Favourite fruits");
}
else {
    console.log(" Straberry is not include in my favourite fruits of array list");
}
