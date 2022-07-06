
// // function Automobile(m, colore) {
// //     this.modello = m;
// //     this.colore = colore;
// //     this.route = 4;

// //     this.getModello = function() {
// //         return this.modello;
// //     }
// // }

// class Automobile {
//     //metodo costruttore, eseguito dal new e può contentere logica ma sopratutto le assegnazioni delle proprietà principali dell'oggetto (che solitamente prendiamo come parametro per comodità)
//     constructor(modello, colore, p) {
//         this.modello = modello;
//         this.colore = colore;
//         this.prezzo = p;
//         Automobile.counter++; //
//     }

//     //prop e metodi statici, sono interagibili dalla classe Automobile ma non dalle istanze (sono tipo le "variabili/funzioni globali" della classe)
//     static route = 4;
//     static counter = 0;
//     static sconto = 20;

//     static getRoute() {
//         return Automobile.route;
//     }

//     // Metodi della classe
//     getPrezzo() {
//         return this.prezzo - (this.prezzo * Automobile.sconto/100); //Possimao usare metodi e prop statici ovunque nel codice, anche dentro ai metodi stessa classe
//     }

//     getModello(){
//         return this.modello;
//     }
// }




// //Istanza della classe
// let c = new Automobile("Berlina", "Nero");
// c.consumo = 100
// console.log(c.modello);
// console.log(c.getModello());




// // function f(a, b) {
// //     return a + b
// // }

// // function g(a, b, c) {
// //     // return a + b + c
// //     return f(a, b) + c
// // }


// // p1.linguaggi = ["JS", "CSS", "HTML"];
// // p2.linguaggi = ["JS", "CSS", "HTML"];

// // let lavoratori = []

// // lavoratori.forEach((e)=>{
// //     if(/*È un programmatore*/) {
// //         e.linguaggi = []
// //     } else {
// //         e.nClienti = 3
// //     }
// // })


// // c1.nClienti = 6;


let prodotti = [
    {
        nome: "nome prod",
        prezzo: 40,
        disponibilita: true 
    },
    {
        nome: "nome prod",
        prezzo: 40,
        disponibilita: true 
    },
    {
        nome: "nome prod",
        prezzo: 40,
        disponibilita: true 
    },
    {
        nome: "nome prod",
        prezzo: 40,
        disponibilita: true 
    },
    {
        nome: "nome prod",
        prezzo: 40,
        disponibilita: true 
    },
    {
        nome: "nome prod",
        prezzo: 40,
        disponibilita: true 
    },
    {
        nome: "nome prod",
        prezzo: 40,
        disponibilita: true 
    },
    {
        nome: "nome prod",
        prezzo: 40,
        disponibilita: true 
    },
    {
        nome: "nome prod",
        prezzo: 40,
        disponibilita: true 
    },
    {
        nome: "nome prod",
        prezzo: 40,
        disponibilita: true 
    },
    {
        nome: "nome prod",
        prezzo: 40,
        disponibilita: true 
    },
    {
        nome: "nome prod",
        prezzo: 40,
        disponibilita: true 
    },
    {
        nome: "nome prod",
        prezzo: 40,
        disponibilita: true 
    },
    {
        nome: "nome prod",
        prezzo: 40,
        disponibilita: true 
    }
]
let p = new Pagination(prodotti, 6)



// p.next();

// p.last();