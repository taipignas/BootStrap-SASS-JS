"use strict"

let library = {
    grozine: [
        {
            isbn: 9786098233346,
            price: 7.99,
            year: 2006,
            title: "Bloga dukte",
            pagecount: 250
        },
        {
            isbn: 9786098233391,
            price: 7.99,
            year: 2015,
            title: "Mergina kuria jis pazinojo",
            pagecount: 315
        },
        {
            isbn: 9786099609324,
            price: 7.99,
            year: 2019,
            title: "Tapk ragana",
            pagecount: 150
        },
        {
            isbn: 9786094792250,
            price: 6.99,
            year: 2007,
            title: "Sfera",
            pagecount: 450
        },
        {
            isbn: 9786094792335,
            price: 9.99,
            year: 2019,
            title: "Mes susitinkame cia",
            pagecount: 500
        }
    ],
    scifi: [
        {
            isbn: 9786094273780,
            price: 7.99,
            year: 2019,
            title: "Sunaikinimas",
            pagecount: 509
        },
        {
            isbn: 9786098233483,
            price: 12.99,
            year: 2018,
            title: "Artemide",
            pagecount: 199
        },
        {
            isbn: 9786094273872,
            price: 4.99,
            year: 2015,
            title: "Fondas ir imperija",
            pagecount: 185
        },
        {
            isbn: 9786094273902,
            price: 7.99,
            year: 2019,
            title: "Amzinybes fjordo pranasai",
            pagecount: 333
        }
    ],
    'skandinaviski detektyvai': [
        {
            isbn: 9786094442742,
            price: 5.99,
            year: 2004,
            title: "Bejegiai",
            pagecount: 777
        },
        {
            isbn: 9786094442940,
            price: 14.99,
            year: 2019,
            title: "Klajunai",
            pagecount: 172
        },
        {
            isbn: 9786090404386,
            price: 7.99,
            year: 2015,
            title: "Mergina, kuri pakliuvo i voratinkli",
            pagecount: 356
        }
    ]
}

let dictionary = {
    isbn:"ISBN",
    price: "Kaina",
    year:"Metai",
    title:"Pavadinimas",
    pagecount:"Puslapiu skaicius"
}

let library2 = {
    grozine: [
        {
            isbn: 9786098233346,
            price: 7.99,
            year: 2006,
            title: "Bloga dukte",
            pagecount: 250
        },
        {
            isbn: 9786098233391,
            price: 7.99,
            year: 2015,
            title: "Mergina kuria jis pazinojo",
            pagecount: 315
        },
        {
            isbn: 9786099609324,
            price: 7.99,
            year: 2019,
            title: "Tapk ragana",
            pagecount: 150
        },
        {
            isbn: 9786094792250,
            price: 6.99,
            year: 2007,
            title: "Sfera",
            pagecount: 450
        },
        {
            isbn: 9786094792335,
            price: 9.99,
            year: 2019,
            title: "Mes susitinkame cia",
            pagecount: 500
        }
    ],
    scifi: [
        {
            isbn: 9786094273780,
            price: 7.99,
            year: 2019,
            title: "Sunaikinimas",
            pagecount: 509
        },
        {
            isbn: 9786098233483,
            price: 12.99,
            year: 2018,
            title: "Artemide",
            pagecount: 199
        },
        {
            isbn: 9786094273872,
            price: 4.99,
            year: 2015,
            title: "Fondas ir imperija",
            pagecount: 185
        },
        {
            isbn: 9786094273902,
            price: 7.99,
            year: 2019,
            title: "Amzinybes fjordo pranasai",
            pagecount: 333
        }
    ],
    'skandinaviski detektyvai': [
        {
            isbn: 9786094442742,
            price: 7.99,
            year: 2019,
            title: "Bejegiai",
            pagecount: 172
        },
        {
            isbn: 9786094442940,
            price: 7.99,
            year: 2015,
            title: "Klajunai",
            pagecount: 172
        },
        {
            isbn: 9786090404386,
            price: 7.99,
            year: 2015,
            title: "Mergina, kuri pakliuvo i voratinkli",
            pagecount: 356
        }
    ]
}


// function Reader(name, surname, books) {
//     this.name = name;
//     this.surname = surname;
//     this.readHistory = books;
//     this.greeting = function() {
//         alert("Hi i'm " + this.name + " " + surname + ". I've read these books: " + this.readHistory)
//     };
// }

// var reader1 =  new Reader("Ignas", "Leo", ["Klajunai", "Vilioke", "Bloga dukte"]);

// console.log(reader1);

// reader1.greeting();


// function Reader(name, surname, books) {
//     this.firstname = name;
//     this.surname = surname;
//     this.fullname = name + " " + surname
//     this.readHistory = books;
// }

// var reader1 =  new Reader("Ignas", "Leo", ["Klajunai", "Vilioke", "Bloga dukte"]);

// Reader.prototype.due = function () {
//     alert(this.fullname + " prasau grazinkite knygas: " + this.readHistory + " !");
// };

// reader1.due();

// function VipReader(name, surname, books, rank) {
//     Reader.call(this, name, surname, books);
//     this.rank = rank;
// }

// var vipreader1 = new VipReader("Tomas", "Leo", ["Klajunai", "Vilioke", "Bloga dukte"], 4);

// VipReader.prototype.due = function () {
//     alert(this.fullname + " prasau grazinkite knygas: " + this.readHistory + " ! Jusu rankas " + this.rank + " gali buti pazemintas.");
// };

// vipreader1.due();

// let vardas = "Ignas";
// let email = "asd@asd.lt";
// let preke = "batonas";
// let kiekis = 15;
// let kaina = 2.7;
// console.log (`Mano vardas ${vardas} emailas ${email}
// vakar pirkau ${kiekis} ${preke} po ${kaina}
// is viso sumokejau ${kiekis * kaina}`);

// let [firstName, middleName, lastName] = ['Ignas', 'Jonas', 'Leo'];
// console.log(lastName);

// let vardai = ['Ignas', 'Jonas', 'Leo', 'tomas', 'Ungurys'];

// function ieskotiVardo(arr, vardas){
//     for (const name of arr) {
//         if (name.toLowerCase().includes(vardas.toLowerCase())) {
//             console.log(name);
//         };
//     };
// }

// ieskotiVardo(vardai, "ign");

class Reader {
    constructor(name, surname, books) {
        this.firstname = name;
        this.surname = surname;
        this.fullname = name + " " + surname
        this.readHistory = books;
    }

    due() {
        console.log(this.fullname + " prasau grazinkite knygas: " + this.readHistory + " !");
    }
}

var reader1 =  new Reader("Ignas", "Leo", ["Klajunai", "Vilioke", "Bloga dukte"]);

reader1.due();