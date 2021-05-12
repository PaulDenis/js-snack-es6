// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

var bikes = [
    {
        nome: "Hyper",
        peso: 25,
    },
    {
        nome: "Nova",
        peso: 23,
    },
    {
        nome: "Morningstar",
        peso: 20,
    },
    {
        nome: "Karisma",
        peso: 21,
    },
    {
        nome: "BMX-250",
        peso: 25,
    },
    {
        nome: "Jarvis",
        peso: 32,
    },
    {
        nome: "Kawasaki-1080",
        peso: 27,
    }
];

var biciLeggera = lightBike (bikes);
// console.log(biciLeggera);

var bici = document.getElementById("bici");

var {nome, peso} = biciLeggera;
// console.log(nome, peso);

bici.innerHTML = `
    <h1> La bici più leggera è ${nome} </h1>
    <h2> Che pesa ${peso} kg</h2>
`;