//16 : More Guests: You just found a bigger dinner table, so now more space is available.
//
 //Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program 
//informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() 
//to add one new guest to the end of your list. • Print a new set of invitation messages,
// one for each person in your list.
// ==>
let guestLists1 = ['Hazoor Bakhsh', 'Imran Bhi', 'Ihsan Bhi'];

 //Print initial invitation messages
for (let n = 0; n < guestLists1.length; n++) {
  console.log(`Hello Muhammad ${guestLists1[n]}! Today, I have invited you to dinner.`);
}

// Assume we cannot make one friend part of dinner;
const guetCannotMakePart1 = 'Ihsan Bhi';
console.log(`${guetCannotMakePart1} can't make it to the part of the dinner`);

// Find the index of the guest who cannot  make it part of the dinner;

const indexOfCannotMakePart1 = guestLists1.indexOf(guetCannotMakePart1);

//Replacing the guest who cannot make part with a new person ;

const newGuest1 = "New Guest => Saqlain";
guestLists1[indexOfCannotMakePart1] = newGuest1 ;

///Informing about the big dinner table 
console.log('\n Great News ! we found the big dinner table.');

// Adding the new guets in the array;
guestLists1.unshift('First New Guest =>Azam Bhi');//Add start of the array;
guestLists1.splice(Math.floor(guestLists1.length/2),0,"Middle New Guest => Zohaib Bhi" );// Adding the Middle of the Array
guestLists1.push("Last New Guest => Cousin Sajad Bhi ")// Adding in the last of the array;

// Print new set of the invitaion of message;

console.log('\n New Updated Invitation List:')
  for (let n = 0; n < guestLists1.length; n++) {
   console.log(`Hello Muhammad ${guestLists1[n]}! Today, I have invited you at dinner.`);
 }
