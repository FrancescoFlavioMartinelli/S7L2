//* - scrittura standard che usiamo
//Oggetto vuoto 
let obj = {} //*
obj = Object.create(Object.prototype) //parametro il prototype da seguire per creare l'oggetto
obj = new Object()

//Per impostare le proprietà
obj.prop = true //*
obj["prop"] = false
Object.defineProperty(obj, "prop", {
    value: true
})

//funzione creata solamente per semplificare la scrittura di Object.defineProperty()
let defineProp = function (obj, key, value) {
    let config = {
        value: value
    }

    Object.defineProperty(obj, key, config)
}

//La creazione e definizione di un oggetto segue la creazione della struttura secondo il prototype passato e definisce le proprietà con Object.defineProperty()
let o = Object.create(Object.prototype);
defineProp(o, "Nome", "Flavio")
//
let r = new Object();
defineProp(r, "Nome", "Flavio")
//L'equivalente nella notazione standard che usiamo sarà
let p = {
    Nome: "Flavio"
}//*
//Oggeto di prototype/classe Object
//Le tre scritture hanno medesimo prototype


//Module pattern -> scrittura letterale dell'oggetto (non attraverso un constructor speicifico (segue Object.prototype)), la usiamo se non vogliamo una classe che definisca una struttura o vogliamo il valore dell'oggetto (per usarlo come parametro, fattore d'operazioni ecc)

let modulePattern = {
    prop: true,
    method: function () {
        return this.prop
    }
}

//Creazione di un modulo (oggetto e le sue variabili relative)
//Possiamo creare degli oggetti per gestire precise logiche, ad esempio l'oggetto testObj vuole essere una variabile da cui eseguire i metodi per andare avanti o indietro con delle pagine. Per fare questo dobbiamo crearci delle altre variabili e funzioni esterne e manipolarle all'interno dell'oggetto.
let counter = 0;
function goPage(n) {
    console.log("Vado alla pagina", n);
}
let testObj = {
    next: function () {
        counter++
        goPage(counter)
    },
    prev: function () {
        counter--
        goPage(counter)
    }
}

testObj.next();
counter = 5 //Si può lavorare con queste variabili, creando possibili interazioni errate (ad esempio impostare counter a 5 significa che la prossima volta che eseguo testObj.next() andrò alla settima pagina mentre dopo riga 61 ero solo alla pagina 1 (seconda))

//Per questo talvolta non vogliamo dare la possibilità a chi usa il codice (normalmente si parla di moduli quando viene fornito un blocco di codice in grado di lavorare indipendentemente, tipo certe librerie e plugin, quindi a altri sviluppatori ma anche a noi stessi) di interagire con var e functions "private". Pertanto possiamo sfruttare il meccanismo dello scope per limitare i dati raggiungibili dall'utente finale del codice

//f è una funzione che se eseguita genera un modulo e restituisce l'oggetto con accesso indiretto alle variabili e funzioni interne a f
let f = function () {
    var count = 0;

    function goToPage(p) {
        //cambia alla pagina p
        console.log("Pagina", p);
    }
    //restusco l'oggetto con prop e metodi raggiungibili dall'esterno. Qusti metodi possono interagire con funzioni e variabili del modulo
    return {
        next: function () {
            count++
            goToPage(counter)
        },
        prev: function () {
            count--
            goToPage(counter)
        }
    }
};

let testModule = f()

testModule.next();
testModule.prev();
// testModule.goToPage(); //Non posso accedere alla funzione goToPage() (privata del modulo, solo come conseguenza di next() o prev())


//Crezione di un modulo per gestire delle slide di un carousel (non è tutto creato, solo la parte relativa alla variabile che potrà usare l'utente della nostra "libreria")

//L'utente deve poter usare i seguenti metodi per manipolare il carousel
// sliderController.next()
// sliderController.prev()
// sliderController.play()
// sliderController.pause()


//Tuttavia per gestirlo sono necessarie altre logiche e valori, in particolare l'indice a cui siamo, il timeout a cui assegnare l'esecuzione automatica del .next() ogni 5 secondi quando eseguiamo .play() o cancellare quando eseguiamo .pause() e una funzione per muovere le slide ogni volta che cambia pagina updateSlide()


let sliderController = (function () {

    //Queste variabili non devono essere modificabili o leggibili dall'utente, servono unicamente per il funzionamento del modulo e non devono essere toccate, quindi le definiamo all'interno dello scope di una funzione (così non esisteranno più dopo l'esecuzione della funzione).
    var slideIndex = 0
    var playTimeout

    function upadteSlide() {
        console.log("Slides updatet at " + slideIndex);
    }

    //Finchè siamo nello scope della funzione possiamo ancora usare queste variabili e funzioni. Quindi definiamo un oggetto che esegue nei suoi metodi logiche con queste var e functions
    //Restituiamo questo oggetto come risultato della funzione. Eseguire la fiunzione ora creerà variabili e funzioni "privati", genererà un oggetto con accesso a questi dati e lo restituirà al di fuori della funzione, così possiamo salvarci in variabile l'oggetto da cui eseguiremo i metodi .next(), .prev(), .play(), .pause() che a loro volta interverranno su queste variabili nascoste
    return {
        next: function () {
            slideIndex++
            upadteSlide()
        },
        prev: function () {
            slideIndex--
            upadteSlide()
        },
        play: function () {
            playTimeout = setTimeout(this.next, 5000)
        },
        pause: function () {
            clearTimeout(playTimeout)
        }
    }
})() //Per assegnare l'oggetto risultato della funzione a una variabile (da cui eseguiremo i metodi) dobbiamo eseguire la funzione in modo che il return (l'oggetto) venga poi assegnato alla variabile
//Terminata la funzione le variabili e funzioni definite nello scope non saranno più raggiungibli ma l'oggetto restitutito le mantiene ancora in memoria all'interno delle sue logiche, senza però avere un modo diretto per raggiungerle (non sono proprietà dell'oggetto)

//Possiamo ora fornire la variabile sliderController all'utente che potre interagirci soltanto con i metodi presenti nell'oggetto
sliderController.play()