//19; Dinner Guests: Working with one of the programs from Exercises 14 through 17,
// print a message indicating the number of people you are inviting to dinner.



let guestList2 = ['Hazoor Bakhsh', 'Imran Bhi', 'Ihsan Bhi', 'New Guest', 'First New Guest', 'Middle New Guest', 'Last New Guest'];
for (let n = 0; n < guestList2.length; n++) {
  console.log(`Hello Muhammad ${guestList2[n]}! Today, I have invited you to dinner.`);
}

// Inform about the limitation on guests
console.log('\nUnfortunately, the new dinner table was not arrive in time, and we can only invite two people for dinner.');

// Apologized and removing guests until only two names were not  remain
while (guestList2.length >2){
  const  removedGuest = guestList2.pop();
  console.log(`Sorry ${removedGuest}, I cannot invite you at dinner.`);
}

// Print invitation messages to the two remaining guests
console.log('\nInvitations for the remaining guests:');
for (let n = 0; n < guestList2.length; n++) {
  console.log(`Hello Muhammad ${guestList2[n]}! You're still invited to dinner.`);
}
// Remove the last two names to have an empty list
guestList2.pop();
guestList2.pop();

// Printing  the number of people that were invited to dinner
console.log(`\nNumber of people invited to dinner: ${guestList2.length}`);