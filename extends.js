// //Extends -> possiamo avere delle classi che derivano da classi superiori
// class Lavoratore {
//     constructor(n, c, d){
//         this.nome = n;
//         this.cognome = c;
//         this.dataAssunzione = new Date(d);
//     }

//     getNomeCompleto() {
//         return `${this.nome} ${this.cognome}`;
//     }
// }

// let p1 = new Lavoratore("Flavio", "Martinelli", "2022/07/05");
// let p2 = new Programmatore("Paolo", "Bianchi", "2022/07/05", ["Js", "HTML", "CSS"]);
// let c1 = new Lavoratore("Marco", "Rossi", "2022/06/03");


// class Programmatore {
//     constructor(n, c, d, l) {
//         this.nome = n;
//         this.cognome = c;
//         this.dataAssunzione = new Date(d);
//         this.linguaggi = l;
//     }
//     getNomeCompleto() {
//         return `${this.cognome} ${this.nome}`;
//     }
//     getLinguaggi() {
//         let res = "Il programmatore scrive in ";
//         this.linguaggi.forEach((e)=>{
//             res += e + " ";
//         })
//         return res
//     }
// }
// class Commerciale {
//     constructor(n, c, d, nc) {
//         this.nome = n;
//         this.cognome = c;
//         this.dataAssunzione = new Date(d);
//         this.nClienti = nc;
//     }
//     static coeff = 20;
//     getNomeCompleto() {
//         return `${this.cognome} ${this.nome}`;
//     }
//     getFatturato() {
//         return Commerciale.coeff * this.nClienti;
//     }
// }

//Superclasse
class Lavoratore {
    constructor(n, c, d) {
        this.nome = n;
        this.cognome = c;
        this.dataAssunzione = new Date(d);
    }

    static stipendio = 1000

    getNomeCompleto() {
        return `${this.cognome} ${this.nome}`;
    }
}

//sottoclassi -> la scrittura è la medesima di qualunque classe, ma possiamo accedere al costruttore della superclasse con il metodo super()
class Programmatore extends Lavoratore {
    constructor(n, c, l) {
        // this.nome = n;
        // this.cognome = c;
        // this.dataAssunzione = new Date(d);
        //queste proprietà sono assegnate allo stesso modo dalla superclasse
        super(n, c, "2022/05/06"); //richiama il constructor della superclasse, da fare prima di qualunque altra assergnazione di proprietà (prima di ogni this)
        // new Lavoratore(n, c, d)
        this.linguaggi = l;
    }

    getLinguaggi() {
        let res = "Il programmatore scrive in ";
        this.linguaggi.forEach((e) => {
            res += e + " ";
        })
        return res
    }

}

class Commerciale extends Lavoratore {
    constructor(n, c, d) {
        super(n, c, d);
        this.nClienti = 0
    }
    
    static coeff = 20;
    
    getFatturato() {
        return Commerciale.coeff * this.nClienti;
    }
}

let l = new Lavoratore("Paolo", "Bianchi", "2022/07/05");
let p = new Programmatore("Paolo", "Bianchi", "2022/07/05", ["Js", "HTML", "CSS"]);
let c = new Commerciale("Marco", "Rossi", "2022/07/05");

// class Designer {
//     constructor(n, c, d, t) {
//         this.info = new Lavoratore(n, c, d)
//         this.tools = t
//     }
// }


// function f(a, b) {
//     return a+b
// }

// function g(a, b, c) {
//     return f(5, 0) + a
// }