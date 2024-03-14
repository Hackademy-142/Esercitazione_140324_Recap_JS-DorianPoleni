
//Tag Declaration
let list = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, eyes: 'Brown' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, eyes: 'Black' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, eyes: 'green' }
];


//Program

console.log(greenEyes(list));

//Function Declaration
    function greenEyes(array){
        // let filtered = [];

       return array.filter(person => person.eyes.toLowerCase() == "green").length > 0;

}


