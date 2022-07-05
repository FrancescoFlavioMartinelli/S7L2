// //Es1
// class Person {
//     //
//     compareAge(){} //servirà questo metodo, può essere creato come volete
// }

// let p1 = new Person("Flavio", 30)
// let p2 = new Person("Marco", 31)
// let p3 = new Person("Paolo", 30)

// console.log(); //p1 p2 -> Flavio è più giovane di Marco
// // p2 p3 -> Marco è più vecchio di Paolo
// // p3 p1 -> Paolo ha la stessa età di Flavio


//Es2
class Pagination {

    constructor(items = [], pageSize = 10) {
        this.items = items;
        this.pageSize = pageSize;

        this.page = 1;

        this.totPage = Math.ceil(this.items.length / this.pageSize);

        this.container = document.querySelector("#utenti tbody");

        this.getVisibileItems();
    }

    next() {
        //andare alla pagina successiva
        this.page = this.page < this.totPage ? this.page + 1 : this.totPage;
        this.getVisibileItems();
    }
    prev() {
        //andare alla pagina precedente
        this.page = this.page > 1 ? this.page - 1 : 1;
        this.getVisibileItems();
    }
    first() {
        //andare alla prima pagina
        this.page = 1;
        this.getVisibileItems();
    }
    last() {
        //andare alla ultima pagina
        this.page = this.totPage;
        this.getVisibileItems();
    }

    getVisibileItems() {
        //prende gli elemtni corretti in base alla pagina a cui siamo e li imposta nella tabella
        let lastIndex = this.page * this.pageSize
        let firstIndex = this.page * this.pageSize - this.pageSize
        let rightItems = this.items.slice(firstIndex, lastIndex);

        this.container.innerHTML = "";
        rightItems.forEach((e) => {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            td1.innerHTML = e.nome + " " + e.cognome;
            td2.innerHTML = e.eta;
            tr.append(td1, td2);
            this.container.append(tr);
        })
    }
}

let users = [{
        nome: "Marco",
        cognome: "Rossi",
        eta: 20
    },
    {
        nome: "A",
        cognome: "Rossi",
        eta: 20
    },
    {
        nome: "B",
        cognome: "Rossi",
        eta: 20
    },
    {
        nome: "C",
        cognome: "Rossi",
        eta: 20
    },
    {
        nome: "D",
        cognome: "Rossi",
        eta: 20
    },
    {
        nome: "E",
        cognome: "Rossi",
        eta: 20
    },
    {
        nome: "F",
        cognome: "Rossi",
        eta: 20
    },
    {
        nome: "G",
        cognome: "Rossi",
        eta: 20
    },
    {
        nome: "H",
        cognome: "Rossi",
        eta: 20
    },
    {
        nome: "I",
        cognome: "Rossi",
        eta: 20
    },
    {
        nome: "DISPARI",
        cognome: "Rossi",
        eta: 20
    }
]


let p = new Pagination(users, 5);


document.querySelector(".avanti").addEventListener("click", () => {
    p.next();
})
document.querySelector(".indietro").addEventListener("click", () => {
    p.prev();
})
document.querySelector(".fine").addEventListener("click", () => {
    p.last();
})
document.querySelector(".inizio").addEventListener("click", () => {
    p.first();
})