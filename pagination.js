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

        this.rightItems = []
        this.getRightItems();

        this.totPage = Math.ceil(this.items.length / this.pageSize);

        this.container = document.querySelector("#paginationTabel tbody");

        this.thead = document.querySelector("#paginationTabel thead");

        let tr = document.createElement("tr")
        for(let prop in this.items[0]){
            let th = document.createElement("th")
            th.innerHTML = prop
            tr.append(th)
        }
        this.thead.innerHTML = "";
        this.thead.append(tr)



        this.getVisibileItems();
    }

    getRightItems() {
        let lastElement = this.page * this.pageSize;
        let firstIndex = lastElement - this.pageSize;

        this.rightItems = this.items.slice(firstIndex, lastElement);

        // let rightusers = []
        // for(let i = this.pageSize; i > 0; i--) {
        //     rightusers.push(this.items[laseElement - i])
        // }

    }

    next() {
        //andare alla pagina successiva
        this.page = this.page < this.totPage ? this.page + 1 : this.totPage;
        this.getRightItems();
        this.getVisibileItems();
    }

    prev() {
        //andare alla pagina precedente
        this.page = this.page > 1 ? this.page - 1 : 1;
        this.getRightItems();
        this.getVisibileItems();
    }

    first() {
        //andare alla prima pagina
        this.page = 1;
        this.getRightItems();
        this.getVisibileItems();
    }
    last() {
        //andare alla ultima pagina
        this.page = this.totPage;
        this.getRightItems();
        this.getVisibileItems();
    }

    getVisibileItems() {
        //prende gli elemtni corretti in base alla pagina a cui siamo e li imposta nella tabella

        this.container.innerHTML = "";
        let strHtml = "";
        this.rightItems.forEach((e) => {
            // let tr = document.createElement("tr");
            // strHtml += "<tr>"

            strHtml += `<tr><td>${e.nome} ${e.cognome}</td><td>${e.eta}</td></tr>`

            // strHtml += "</tr>"

            // for(let prop in e) {
            //     let td = document.createElement("td");
            //     td.innerHTML = e[prop];
            //     tr.append(td)
            // }
            // td1.innerHTML = e.nome + " " + e.cognome;
            // td2.innerHTML = e.eta;
            this.container.innerHTML = strHtml;
        });
    }
}

// //EQ: pageSize * page -> indice di partenza
// // (pageSide * page) - 3
// // (pageSide * page) - 2
// // (pageSide * page) - 1
// // per pageSize

// //pageSize = 3

// //page = 1
// users[0]
// users[1]
// users[2]
// lastElement = 3

// //page = 2
// users[3]
// users[4]
// users[5]
// lastElement = 6

// //page = 3
// users[6]
// users[7]
// users[8]
// lastElement = 9

// //a ogni pagina l'indice d'inizo e successivo all'ultimo
// //-> indici
// //

// //users.length = 16
// //pagina 6
// users[3 * 6 - 3]
//     ...
//     users[3 * 6 - 1]



// let p = new Pagination(users, 5);
// let q = new Pagination(prodotti);

// document.querySelector(".prodottiAvanti").addEventListener("click", () => {
//     q.next();
// })