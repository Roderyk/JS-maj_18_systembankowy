class Bank {
    constructor(nazwaBank) {
        this.nazwaBank = nazwaBank
        this.listaKlientow = []
    }
}

class Klient {
    constructor() {
        this.listaKont = []
    }
}

class Osoba extends Klient {
    constructor(imie, nazwisko) {
        super()
        this.imie = imie
        this.nazwisko = nazwisko
    }
}

class Firma extends Klient {
    constructor(nazwaFirmy, regon) {
        super()
        this.nazwaFirmy = nazwaFirmy
        this.regon = regon
    }
}

class Konto {
    constructor(nazwaKonta) {
        this.nazwaKonta = nazwaKonta
        this.stanKonta = 0
    }
    wplac(kwota) {
        this.stanKonta += kwota
    }
    wyplac(kwota) {
        this.stanKonta -= kwota
    }
    pokazStan() {
        return this.stanKonta.toFixed(2)
    }
}

class KontoVIP extends Konto {
    constructor(nazwaKonta) {
        super(nazwaKonta)
        this.prowizja = 1
    }
    wplac(kwota) {
        super.wplac(kwota - this.prowizja) 
    }
    wyplac(kwota) {
        super.wyplac(kwota + this.prowizja) 
    }
}

class KontoW extends Konto {
    constructor(nazwaKonta, symbolWaluty) {
        super(nazwaKonta)
        this.symbolWaluty = symbolWaluty
    }
    pokazStan() {
        return super.pokazStan() + this.symbolWaluty
    }
}
let bank = new Bank("Nowy Bank")


bank.listaKlientow.push(new Osoba("Paweł", "Kozłowski"))

bank.listaKlientow[0].listaKont.push(new Konto("II konto"))
bank.listaKlientow[0].listaKont.push(new KontoVIP("III konto"))
bank.listaKlientow[0].listaKont.push(new KontoW("IV konto"))

bank.listaKlientow.push(new Osoba("Adam", "Kozłowski"))

bank.listaKlientow[1].listaKont.push(new KontoVIP("V konto"))
bank.listaKlientow[1].listaKont.push(new KontoVIP("VI konto"))
bank.listaKlientow[1].listaKont.push(new Konto("VII konto"))

bank.listaKlientow.push(new Firma("Google", "098765432211"))

bank.listaKlientow[2].listaKont.push(new KontoW("VIII konto"))
bank.listaKlientow[2].listaKont.push(new Konto("IX konto"))
bank.listaKlientow[2].listaKont.push(new Konto("X konto"))

bank.listaKlientow.push(new Firma("Apple", "123456789"))

bank.listaKlientow[3].listaKont.push(new Konto("XI konto"))
bank.listaKlientow[3].listaKont.push(new KontoVIP("XII konto"))
bank.listaKlientow[3].listaKont.push(new KontoW("XIII konto"))

function wplacKwoteAll() {
    for (let i = 0; i < bank.listaKlientow.length; i++) {
        for (let j = 0; j < bank.listaKlientow[i].listaKont.length; j++) {
           bank.listaKlientow[i].listaKont[j].wplac(Math.floor(1 + Math.random()*1000))
        }
    }
}
wplacKwoteAll()
console.log(bank)


// let kon1 = new KontoW("PierwszeKonto", "$")
// //console.log(kon1.pokazStan())

// kon1.wplac(200)
// //console.log(kon1.pokazStan())

// kon1.wyplac(1000)
// console.log(kon1.pokazStan())