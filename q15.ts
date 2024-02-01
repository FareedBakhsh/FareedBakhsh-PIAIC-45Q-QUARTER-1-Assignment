// 15 :Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement 
//at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it
 //with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.


let guestLists = ['Hazoor Bakhsh', 'Imran Bhi', 'Ihsan Bhi'];

 //Print initial invitation messages
for (let n = 0; n < guestLists.length; n++) {
  console.log(`Hello Muhammad ${guestLists[n]}! Today, I have invited you to dinner.`);
}

// Assume we cannot make one friend part of dinner;
const guetCannotMakePart = 'Ihsan Bhi';
console.log(`${guetCannotMakePart} can't make it to the part of the dinner`);

// Find the index of the guest who cannot  make it part of the dinner;

const indexOfCannotMakePart = guestLists.indexOf(guetCannotMakePart);

// Replacing the guest who cannot make part with a new person ;

 const newGuest = "New Guest => Saqlain";
 guestLists[indexOfCannotMakePart] = newGuest ;

 //Printing the Second set of the invitaion message;
 console.log('\n Update the  New Invitaion List :');

 for (let n = 0; n < guestLists.length; n++) {
      console.log(`Hello Muhammad ${guestLists[n]}! Today, I have invited you at dinner.`);
    }

////////////////////////////////////////////////////////