"use strict"

// var item = "Dvaro pienas";
// var description = "Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30 Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30";
// var quantity = 50;
// var discount = 0.3;
// var price = 0.95;


// var itemObject = {
//     item: item,
//     description: "Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30 Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30",
//     quantity: 50,
//     discount: 0.3,
//     price: 0.95
// }

// for (let key in itemObject) {
//     console.log(key + " yra " + itemObject[key]);
// }

// var cutString = 150;

// if (description.length > cutString) {
//     console.log(description.substring(0, cutString * 0.65));
// }

// var prekes = ['pienas', 10, true, function () { console.log("sveiki") }];

// let duomenys = function () { return 10; };

// console.log(typeof (function () { console.log("labas") }));


// var myArray = [56, 57, 132, 97, 23, 111];

// console.log(myArray[2]);

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// let catalog = ['pienas', 'duona', 'kava'];

// catalog[0] = ['sportas', 'dviraciai', 'riedlentes', 'paspirtukai'];
// catalog[1] = ['mergaitem', 'leles', 'rutuliukai', 'gelytes'];
// catalog[2] = ['berniukam', 'lego', 'masinytes', 'telefonai'];


// for (var i = 0; i < catalog.length; i++) {
//     console.log("Kategorija: " + catalog[i][0]);
//     for (var j = 1; j < catalog[i].length; j++) {
//         console.log(catalog[i][j]);
//     }
// }

// let vartotojas = { vardas: "Ignas" };
// let vartotojai = {
//     grupe: {
//         vardas: "Ignas"
//     }
// }

// let katalogas = {
//     maistas: ['pienas', 'duona', 'alus'],
//     iranga: ['kompiuteris', 'telefonas'],
//     kita: ['rasiklis', 'piestukas']
// }

// for (let cat in katalogas) {
//     console.log("(" + katalogas[cat].length + ")" + cat.charAt(0).toUpperCase() + cat.slice(1) + ':');
//     for (let i = 0; i < katalogas[cat].length; i++) {
//         console.log(katalogas[cat][i].charAt(0).toUpperCase() + katalogas[cat][i].slice(1));
//     }
// }

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

// for (let genre in library) {
//     console.log("=======================================");
//     console.log("Kategorija: " + genre + " (" + library[genre].length + ")");
//     console.log("=======================================\n");
//     console.log("\n");
//     for (let i = 0; i < library[genre].length; i++) {
//         if(library[genre][i]["year"]==2018){
//             for (let key in library[genre][i]) {
//                 console.log(dictionary[key] + ": " + library[genre][i][key] + ((key == "pagecount") ? ((library[genre][i][key] > 350) ? " STORA KNYGA!!!" : "") : ""));
//             }
//         }
//         console.log("\n");
//     }
// }


/*
Sukurkite funkciją, kuri surikiuoja knygas kataloge pagal abecelę
*/

for (let genre in library) {
    console.log("=======================================");
    console.log("Kategorija: " + genre + " (" + library[genre].length + ")");
    console.log("=======================================\n");
    console.log("\n");
    library[genre].sort((a, b) => (a.title > b.title) ? 1 : -1);
    for (let i = 0; i < library[genre].length; i++) {
        for (let key in library[genre][i]) {
            console.log(dictionary[key] + ": " + library[genre][i][key]);
        }
        console.log("\n");
    }
}


/*
1.1 Išvesti knygas, kurios išleistos 2018 m.
*/

for (let genre in library) {
    for (let i = 0; i < library[genre].length; i++) {
        if(library[genre][i]["year"]==2018){
            console.log("Kategorija: " + genre + " (" + library[genre].length + ")");
            for (let key in library[genre][i]) {
                console.log(dictionary[key] + ": " + library[genre][i][key]);
            }
            console.log("\n");
        }
    }
}

/*
1.2 Išvesti knygų kategorijas su pigiausiomis knygomis. (Kategorijos pavadinimas: Pigiausios knygos pavadinimas)
*/

for (let genre in library) {
    console.log("=======================================");
    console.log("Kategorija: " + genre + " (" + library[genre].length + ")");
    console.log("=======================================\n");
    console.log("\n");
    library[genre].sort((a,b) => (a.price > b.price) ? 1 : -1 );
    for (let key in library[genre][0]) {
        console.log(dictionary[key] + ": " + library[genre][0][key]);
    }
    console.log("\n");
}

/*
1.3 Apvalinkite knygų katalogo kainas iki dviejų skaičių po kablelio
*/

for (let key in library['skandinaviski detektyvai'][2]) {
    if(key == 'price')
        console.log(dictionary[key] + ": " + Math.round(library['skandinaviski detektyvai'][2][key]) );
    else
        console.log(dictionary[key] + ": " + library['skandinaviski detektyvai'][2][key] );
}

/*
1.3 Sukurti knygos paiešką pagal pavadinimą. Paieškos užklausa priskiriama konstantai. Išvedama visa informacija apie surastą knygą.
*/

function query(book)  {
    return book.title == "Mergina, kuri pakliuvo i voratinkli";
};

console.log(library["skandinaviski detektyvai"].find(query));

/*
1.4 Sukurti knygos paieškos programą, kuri ieško pagal visas savybes, kurias turi knygos objektas.
*/

let search = {
    isbn:9786090404386,
    price:7.99,
    year:2015,
    title:"Mergina, kuri pakliuvo i voratinkli",
    pagecount:356,
    match(sample) {
        return sample.price == this.price
            && sample.isbn == this.isbn
            && sample.year === this.year
            && sample.title == this.title
            && sample.pagecount == this.pagecount
            ;
    }
};

let results = library['skandinaviski detektyvai'].filter(search.match, search);

for (let genre in results) {
    for (let i = 0; i < results[genre].length; i++) {
       
            console.log("Kategorija: " + genre + " (" + results[genre].length + ")");
            for (let key in results[genre][i]) {
                console.log(dictionary[key] + ": " + results[genre][i][key]);
            }
            console.log("\n");
        
    }
}

for (let genre in results) {
    console.log(results[genre]);
}

console.log(results);

/*
1.5 Sukurti knygos paieškos programą, kuri ieško pagal visas savybes, kurias turi knygos objektas.
*/

console.log('asd');

let search2 = {
    isbn:9786090404386,
    price:7.99,
    year:2015,
    title:"Mergina, kuri pakliuvo i voratinkli",
    pagecount:356
};

for (let genre in library) {
    let compare = library['skandinaviski detektyvai'].pop();

    for (let i=0; i<compare.length; i++){
        if(compare[i]['isbn']==search2['isbn']){
            for (let key in compare) {
                console.log(compare[i][key]);
            }
        
        }
    }
}



// let results = library['skandinaviski detektyvai'].filter(search.match, search);

// for (let genre in results) {
//     for (let i = 0; i < results[genre].length; i++) {
       
//             console.log("Kategorija: " + genre + " (" + results[genre].length + ")");
//             for (let key in results[genre][i]) {
//                 console.log(dictionary[key] + ": " + results[genre][i][key]);
//             }
//             console.log("\n");
        
//     }
// }

// for (let genre in results) {
//     console.log(results[genre]);
// }

// console.log(results);



