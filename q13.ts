//13 ;Your Own Array: Think of your favorite mode of transportation, 
//such as a motorcycle or a car, and make a list that stores several examples. 
//Use your list to print a series of statements about these items, such as
// “I would like to own a Honda motorcycle.”

let myFavModTran = [
    'Motercyle',
    'Bycle',
    'Car',
    'Bus',
];

for( let m = 0 ; m < myFavModTran.length ; m++){
    console.log(`I would like to own a "${myFavModTran[m]}".`);
console.log(`${myFavModTran[0]} : " I would like to own a Honda motorcycle.”`)
 console.log(`${myFavModTran[1]} : " I would like to own a Bycles.”`)
 console.log(`${myFavModTran[2]} : " I would like to own a car.”`)
 console.log(`${myFavModTran[3]} : " I would like to own a bus.”`)
}