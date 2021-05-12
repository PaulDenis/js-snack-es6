// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 

var squadre = [
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome:"Torino",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
for (var i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = randomNumber(10, 50);
    squadre[i].falliSubiti = randomNumber(10,80);
}

console.log(squadre);

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const array = [];

for (let i = 0; i<squadre.length; i++) {
    var {nome, falliSubiti} = squadre[i];
    array.push({nome, falliSubiti});
}

console.log(array);