//Q44:
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//using a different number of arguments each time.

function order_sandwich(...items :any){

    if (items.length === 0){
      console.log('You have not ordered any sandwich ingredients yet.');
    }else{
      console.log('You ordered a sandwich with:')
      for(const item of items){
        console.log("-",items)
      }
    }
  }
  //Now calling the function with different argument
  order_sandwich('bread', 'cheese','bangen');
  order_sandwich('tomato','onion','lettuce');
  order_sandwich();
  
  
