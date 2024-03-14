// Scrivi un programma che dati: - 2 array di 10 elementi interi casuali compresi tra 1 e 10, permetta di effettuare, una delle seguenti operazioni: 


//Tag Declaration
const nElements = 10;
let array1 = createArray(nElements);
let array2 = createArray(nElements);
let array3 = [];


//Program

console.log(`array1: ${array1}`);
console.log(`array2: ${array2}`);

arrayCalculations(array1, array2, array3);



//Function Declaration
function arrayCalculations(array1, array2, array3){
 let operation = prompt("inserisci il tipo di operazione (add - sot - div - mol): "); 
  
  switch (operation) {
    case "add":
      for (let i = 0; i < array1.length; i++) {
        array3[i] = array1[i] + array2[i];
      }
      console.log(array3);
    break;

    case "sot":
      for (let i = 0; i < array1.length; i++) {
        array3[i] = array1[i] - array2[i];
      }
      console.log(array3);
    break;

    case "div":
      for (let i = 0; i < array1.length; i++) {
        if (array2[i] != 0){
          array3[i] = array1[i] / array2[i];
        }else
        (array3[i] = undefined);
      }
      console.log(array3);
    break;

    case "mol":
      for (let i = 0; i < array1.length; i++) {
        array3[i] = array1[i] * array2[i];
      }
      console.log(array3);
    break;
  }
}

function arraySum(array1, array2, array3){
  let sum = 0;
  for (let i = 0; i < array1.length; i++) {
    array3[i] = array1[i] + array2[i];
  }
  console.log(array3);
}

function createArray(num_elements){
  let array = [];
  for (let i = 0; i < num_elements; i++) {
    let randomNumber = Math.round(Math.random() * (10 - 0) + 0);
    array.push(randomNumber);
  }
  return array;
}
