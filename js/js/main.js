"use strict"

var item = "Dvaro pienas";
var description = "Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30 Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30";
var quantity = 50;
var discount = 0.3;
var price = 0.95;


var itemObject = {
    item: item,
    description: "Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30 Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30",
    quantity: 50,
    discount: 0.3,
    price: 0.95
}

for (let key in itemObject) {
    console.log(key + " yra " + itemObject[key]);
}

var cutString = 150;

if (description.length > cutString) {
    console.log(description.substring(0, cutString * 0.65));
}

var prekes = ['pienas', 10, true, function () { console.log("sveiki") }];

let duomenys = function () { return 10; };

console.log(typeof (function () { console.log("labas") }));


var myArray = [56, 57, 132, 97, 23, 111];

console.log(myArray[2]);

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

let catalog = ['pienas', 'duona', 'kava'];

catalog[0] = ['sportas', 'dviraciai', 'riedlentes', 'paspirtukai'];
catalog[1] = ['mergaitem', 'leles', 'rutuliukai', 'gelytes'];
catalog[2] = ['berniukam', 'lego', 'masinytes', 'telefonai'];


for (var i = 0; i < catalog.length; i++) {
    console.log("Kategorija: " + catalog[i][0]);
    for (var j = 1; j < catalog[i].length; j++) {
        console.log(catalog[i][j]);
    }
}

let vartotojas = { vardas: "Ignas" };
let vartotojai = {
    grupe: {
        vardas: "Ignas"
    }
}

let katalogas = {
    maistas: ['pienas', 'duona', 'alus'],
    iranga: ['kompiuteris', 'telefonas'],
    kita: ['rasiklis', 'piestukas']
}

for (let cat in katalogas) {
    console.log("(" + katalogas[cat].length + ")" + cat.charAt(0).toUpperCase() + cat.slice(1) + ':');
    for (let i = 0; i < katalogas[cat].length; i++) {
        console.log(katalogas[cat][i].charAt(0).toUpperCase() + katalogas[cat][i].slice(1));
    }
}

let library = {
    grozine: [
        {
            isbn: 9786098233346,
            year: 2006,
            title: "Bloga dukte",
            pagecount: 250
        },
        {
            isbn: 9786098233391,
            year: 2015,
            title: "Mergina kuria jis pazinojo",
            pagecount: 315
        },
        {
            isbn: 9786099609324,
            year: 2019,
            title: "Tapk ragana",
            pagecount: 150
        },
        {
            isbn: 9786094792250,
            year: 2007,
            title: "Sfera",
            pagecount: 450
        },
        {
            isbn: 9786094792335,
            year: 2019,
            title: "Mes susitinkame cia",
            pagecount: 500
        }
    ],
    scifi: [
        {
            isbn: 9786094273780,
            year: 2019,
            title: "Sunaikinimas",
            pagecount: 509
        },
        {
            isbn: 9786098233483,
            year: 2018,
            title: "Artemide",
            pagecount: 199
        },
        {
            isbn: 9786094273872,
            year: 2015,
            title: "Fondas ir imperija",
            pagecount: 185
        },
        {
            isbn: 9786094273902,
            year: 2019,
            title: "Amzinybes fjordo pranasai",
            pagecount: 333
        }
    ],
    'skandinaviski detektyvai': [
        {
            isbn: 9786094442742,
            year: 2004,
            title: "Bejegiai",
            pagecount: 777
        },
        {
            isbn: 9786094442940,
            year: 2019,
            title: "Klajunai",
            pagecount: 172
        },
        {
            isbn: 9786090404386,
            year: 2015,
            title: "Mergina, kuri pakliuvo i voratinkli",
            pagecount: 356
        }
    ]
}

let dictionary = {
    isbn:"ISBN",
    year:"Metai",
    title:"Pavadinimas",
    pagecount:"Puslapiu skaicius"
}

for (let genre in library) {
    console.log("=======================================");
    console.log("Kategorija: " + genre + " (" + library[genre].length + ")");
    console.log("=======================================\n");
    console.log("\n");
    for (let i = 0; i < library[genre].length; i++) {
        for (let key in library[genre][i]) {
            if (key == "year" && library[genre][i][key] == 2019) {
                console.log(dictionary[key] + ": " + library[genre][i][key] + " (nauja)");
            } else
                console.log(dictionary[key] + ": " + library[genre][i][key] + ((key == "pagecount") ? ((library[genre][i][key] > 350) ? " STORA KNYGA!!!" : "") : ""));
        }
        console.log("\n");
    }
}