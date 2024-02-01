//Q43: Unchanged Magicians: Start with your work from Exercise 40. 
//Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original 
//names and one array with the Great added to each magician’s name.
function show_magicians(Magicians9) {
    for (var i = 0; i < Magicians9.length; i++) {
        console.log(Magicians9[i]);
    }
}
function make_great(Magicians9) {
    var greatMagicians = [];
    for (var i = 0; i < Magicians9.length; i++) {
        greatMagicians.push(Magicians9[i] + " the Great");
    }
    return greatMagicians;
}
// Create an array of magician names
var Magicians9 = ['Fareed', 'Ihsan', 'Saqlain', 'Sanwal', 'Mohsin', 'Ayaz'];
// Call make_great() with a copy of the magicians array and store the new array
var greatMagicians = make_great(Magicians9.slice()); // Create a copy using slice()
// Print the original array
console.log("Original magicians:");
show_magicians(Magicians9);
// Print the modified array
console.log("\nGreat magicians:");
show_magicians(greatMagicians);
