"use strict";
//Q37:Large Shirts: Modify the make_shirt() function so that shirts are large by default
// with a message that reads I love TypeScript. Make a large shirt and 
//a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirts(size = 'Large', message = 'I love Typescript') {
    console.log(`The  Shirt is ${size} size and Keep the Message :${message}.`);
}
;
/// Make a large shirt with the default message;
make_shirts();
/// Make a medium shirt with the default message;
make_shirts("medium");
/// Make a  shirt of any size with the different message;
make_shirts('small', 'tradition message here');
