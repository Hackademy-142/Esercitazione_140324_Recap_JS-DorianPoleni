// Creare una funzione javascript che prende due argomenti e restituisce tutti i numeri divisibili per il divisore dato. Il primo argomento è una array e il secondo è il divisore. findMultiples([1, 2, 3, 4, 5, 6], 2) --> [2, 4, 6]


//Tag Declaration
let array = [1,2,3,4,5,6,10];
let divider = +prompt("Inserisci il Divisore: ");

//Program
findMultiples(array,divider);

//Function Declaration
function findMultiples(array, divider){
   let valueFiltered = array.filter( (num) => num % divider == 0 );
   
   if (valueFiltered.length == 0){
      console.log("Value not devidable.");
   }
   else {
      console.log(valueFiltered);
   }
}