//Q35:
//Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common.
// You could print a sentence such as Any of these animals would make a great pet!

let Animals = ['Camel','Horse', 'Chicken', "Duck"];
//Printing  the names of animals line by line by using the foor loops;
console.log('Names of Animals:')
for( let i = 0; i < Animals.length; i++){
  console.log(Animals[i]);
};
console.log('\nSentences about the Each Animal =>')
for( let i = 0; i < Animals.length; i++){
  console.log(`A ${Animals[i]} would be great pet.`);
}
// Additional  common side  line outside the loop;
 let commmonThingInTheseAnimals = "They are all animals."
console.log(` The Common things in the Animlas: ${commmonThingInTheseAnimals}`);
