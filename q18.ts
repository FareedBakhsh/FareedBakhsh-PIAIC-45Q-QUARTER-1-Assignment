//18:Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. 
//Print the list to show that its order has changed.

let placesToVisit = [
    'Makkah',
    'Madina',
    'Masjid-e-Aqsa',
    'Istanbul',
    'Hajry-Asad',
  
                      ];
  // Printing in original order;
  console.log('Array  in original order',placesToVisit);
  //Printing in the Alphabatical order without changing original list
  //console.log(placesToVisit.sort());
  console.log('Alphabatical order without changing original list',[...placesToVisit].sort());
  //Now verifying that now originals array list is still intact.
  console.log('originals array',placesToVisit);
  // Print in reverse alphabatical order without the changing the original array list 
  console.log('Reverse alphabatical order without the changing the original array list',[...placesToVisit].sort().reverse());
  //Now again verifying that now originals array list is still intact.
  console.log('Originals array list',placesToVisit);
  //Reversing the original array list
  placesToVisit.reverse();
  console.log('Reversing the original array list',placesToVisit)
  //console.log(placesToVisit.reverse());
  //Reverse the again to its original array list
  console.log('Reverse the again to its original array list',placesToVisit.reverse());
  // Sort the array in the alphabatical order;
  console.log('Sort the array in the alphabatical order',placesToVisit.sort());
  //Sort the array in the reverse alphabatical order;
  console.log('Sort the array in the reverse alphabatical order',placesToVisit.sort().reverse());
  