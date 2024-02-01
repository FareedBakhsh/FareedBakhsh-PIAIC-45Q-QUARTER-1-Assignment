"use strict";
//Q31:No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users! ;
//• Remove all of the usernames from your array, and make sure the correct message is printed.
let usernames9 = [];
if (usernames9.length === 0) {
    console.log("We need to find some more users!");
}
else {
    for (let i = 0; i < usernames9.length; i++) {
        if (usernames9[i] === "admin") {
            console.log("Hello admin! Would you like to see the status report?");
        }
        else {
            console.log(`Hello ${usernames9[i]}, thank you for your login again.`);
        }
    }
}
