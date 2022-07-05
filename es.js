//Es1
class Person {
    //
    compareAge(){} //servirà questo metodo, può essere creato come volete
}

let p1 = new Person("Flavio", 30)
let p2 = new Person("Marco", 31)
let p3 = new Person("Paolo", 30)

console.log(); //p1 p2 -> Flavio è più giovane di Marco
// p2 p3 -> Marco è più vecchio di Paolo
// p3 p1 -> Paolo ha la stessa età di Flavio


//Es2
class Pagination {
    
    constructor(items = [], pageSize = 10){
        
    }

    next(){
        //andare alla pagina successiva
        this.getVisibleItems();
    }
    prev(){
        //andare alla pagina precedente
        this.getVisibleItems();
    }
    first(){
        //andare alla prima pagina
        this.getVisibleItems();
    }
    last(){
        //andare alla ultima pagina
        this.getVisibleItems();
    }

    getVisibileItems(){
        //prende gli elemtni corretti in base alla pagina a cui siamo e li imposta nella tabella
    }
}

let users = [
    {nome: "Marco", cognome: "Rossi", eta: 20},
    {nome: "A", cognome: "Rossi", eta: 20},
    {nome: "B", cognome: "Rossi", eta: 20},
    {nome: "C", cognome: "Rossi", eta: 20},
    {nome: "D", cognome: "Rossi", eta: 20},
    {nome: "E", cognome: "Rossi", eta: 20},
    {nome: "F", cognome: "Rossi", eta: 20},
    {nome: "G", cognome: "Rossi", eta: 20},
    {nome: "H", cognome: "Rossi", eta: 20},
    {nome: "I", cognome: "Rossi", eta: 20}
]

let p = new Pagination(users, 2)

document.getElementById("nextButton").addEventListener("click", ()=>{
    p.next();
    // p.getVisibileItems();
})