// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

var bikes = [
    {
        name: "Hyper",
        weight: 25,
    },
    {
        name: "Nova",
        weight: 23,
    },
    {
        name: "Morningstart",
        weight: 23,
    },
    {
        name: "Karisma",
        weight: 21,
    },
    {
        name: "BMX-250",
        weight: 25,
    },
    {
        name: "Jarvis",
        weight: 32,
    },
    {
        name: "Kawasaki-1080",
        weight: 27,
    }
];

var biciLeggera = lightBike (bikes);
console.log(biciLeggera);

var bici = document.getElementById("bici");

var {name} = biciLeggera;
console.log(name);
var {weight} = biciLeggera;
console.log(weight);

bici.innerHTML = `
    <h1> La bici più leggera è ${name} </h1>
    <h2> Che pesa ${weight} kg</h2>
`;