"use strict";
//Q41:Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
let Magicians = ['Fareed', 'Ihsan', 'Saqlain', 'Sanwal', 'Mohsin', "Ayaz"];
//Main our topic task is that print all names of magicians in arrays
function show_magician(Magicians) {
    for (let i = 0; i < Magicians.length; i++) {
        console.log(Magicians[i]);
    }
}
//let MagiciansName = ['Fareed','Ihsan','Saqlain','Sanwal','Mohsin',"Ayaz"];
//show_magicians(MagiciansName);
show_magician("Magicians");
