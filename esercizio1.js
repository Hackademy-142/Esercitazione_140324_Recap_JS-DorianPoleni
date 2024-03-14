// Dato un array di oggetti crea una funzione che ritorni un array e aggiunga a ogni oggetto la proprietà ‘greeting’ con il seguente valore:
// "Awee regà, mi chiamo < firstName > e lavoro con < language here >, ma effettivamente è meglio javascript"

//Tag Declaration
let list = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];




//Program

greet(list);
console.log(list);

//Function Declaration
function greet(array){
    array.forEach( (person) => person.greeting = `Awee regà, mi chiamo ${person.firstName} e lavoro con ${person.language}, ma effettivamente è meglio javascript` );

    return array;
}
