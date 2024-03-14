// Scrivi due funzioni: dato un array: let numbers = [10, 12, 78, -4, -20, 11]; una che prenda in input un array di numeri e restituisca il maggiore l'altra che restituisca il minore.


//Tag Declaration
let nElements = prompt("Insert number of values: ")


//Program
array =  loadArray(nElements);
let maxArrayNumber = maxValue(array);
let minArrayNumber = minValue(array);

console.log(`In the array: ${array}, the maximum value is: ${maxArrayNumber}, the minimum value is: ${minArrayNumber} `)

//Function Declaration
function loadArray(num_elements){
    let array = [];
    for (let i = 0; i < num_elements; i++) {
        let randomNumber = Math.round(Math.random() * (100 - (-100)) + (-100));
        array.push(randomNumber);
    }
    return array;
}

function maxValue(array){
   return Math.max(...array);
}

function minValue(array){
   return Math.min(...array);
}
