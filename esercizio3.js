// Dato un array di oggetti, creare una funzione che permetta di mostrare un messaggio di alert:

// se logged=true: mostrare il messaggio “L’utente è stato registrato.”
// se logged=false: mostrare il messaggio “L’utente non è registrato.”

//Tag Declaration
let list = [
    { firstName: 'EmMa', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, logged: true }, //[0]
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, logged: false }, //[1]
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, logged: true } //[2]
];

//Program
 personName = prompt("inserisci il nome: ");
logAlert(list,personName);  

//Function Declaration
function logAlert(array, fName){
    let personExist = [];
    personExist = array.filter(
        (person) => person.firstName.toLowerCase() == fName.toLowerCase() 
    )

    if (personExist.length > 0 && personExist[0].logged == true){
        alert(`${fName} is Logged`);
    }else if (personExist.length > 0 && personExist[0].logged == false){
        alert(`${fName} is Not Logged`);
    }else{
        alert(`${fName} not found`);
    }
    }
    
    
