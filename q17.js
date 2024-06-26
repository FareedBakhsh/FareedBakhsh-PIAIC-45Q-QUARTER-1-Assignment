"use strict";
// Q17: 
//Shrinking Guest List: You just found out that your new dinner table won’t
// arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a
// message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list,
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. 
///Print your list to make sure you actually have an empty list at the end of your program.
let guestList1 = ['Hazoor Bakhsh', 'Imran Bhi ', 'Ihsan Bhi', ' New guest', 'First New Guest', 'Middle New Guest', 'Last New guest'];
// Print initial invitation messages
for (let n = 0; n < guestList1.length; n++) {
    console.log(`Hello Muhammad ${guestList1[n]}! Today, I have invited you to dinner.`);
}
// Inform about the limitation on guests
console.log('\nUnfortunately, the new dinner table won’t arrive in time, and we can only invite two people for dinner.');
// Apologized and removing guests until only two names were not  remain
while (guestList1.length > 2) {
    const removedGuest = guestList1.pop();
    console.log(`Sorry ${removedGuest}, I cannot invite you at dinner.`);
}
// Print invitation messages to the two remaining guests
console.log('\n Invitation for the remaing guests:');
for (let n = 0; n < guestList1.length; n++) {
    console.log(`Hello Muhammad ${guestList1[n]}! You are still invited at dinner.`);
}
// Remove the last two names to have an empty list
guestList1.pop();
guestList1.pop();
// Print the empty list
console.log('\nUpdated Invitation List:');
console.log(guestList1);
