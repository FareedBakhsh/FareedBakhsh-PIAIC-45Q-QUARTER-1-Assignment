//45:Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. Print the Object that’s returned 
//to make sure all the information was stored correctly.

function make_car(maker: string, modelName: string, ...moreInfo: (string | number)[]): Car {
    const car: Car = {
        maker: maker,
        modelName: modelName,
    };

    // If moreInfo is provided
    if (moreInfo.length > 0) {
        // Iterate over moreInfo in pairs and add them to the car object
        for (let i = 0; i < moreInfo.length; i += 2) {
            const key = moreInfo[i] as string;
            const value = moreInfo[i + 1] as string | number;
            car[key] = value;
        }
    }

    return car;
}

// Call the function with required information and additional key-value pairs
const myCar = make_car('Toyota', 'Camry', 'color', 'blue', 'year', 2022);

// Print the returned car object
console.log(myCar);
