"use strict"

// Sukurti knygyną, kuris gali gauti ir apskaityti knygas, bei jas parduoti skaitytojams.
// Ezistuojantys modeliai: sandelys, skaitytojas, tiekejas
// Suprojektuokit klases ir reazlizuokite metodus auksciau paminetam funcionalumui reazlizuoti.
// Nemažiau, kaip trys skaitytojais, kurie įsigyjo n knygų
// 2 knygų tiekėjai
// Vienas knygynas
// Jeigu aplikacijoje įvykdomas neleistinas veiksmas arba pateikiami netinkami duomenys būtina "handlinti errorus"

class Book {
    constructor(isbn, price, year, title, pagecount){
        this.isbn = isbn;
        this.title = title;
        this.year = year;
        this.price = price;
        this.pagecount = pagecount;
    }

    ToString(){
        return (`${this.isbn} ${this.title} ${this.year} ${this.price} ${this.pagecount}`);
    }
}

class Reader {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullname = firstname + " " + lastname;
        this.orderHistory = [];
    }

    addOrderHistory(books) {
        this.orderHistory.push(books);
    }

    toString(){
        return (`${this.firstname} ${this.lastname} pirkimu istorija: ${this.orderHistory.toString()}`);
    }
}

function SellBooks (id, books){
    try{
        console.log("\n");
        console.log(`skaitytojas ${id} perka knygas: ${books}`);
        for (let isbn of books) {
            if (warehouse[isbn] > 0) {
                readers[id].addOrderHistory(isbn);
                warehouse[isbn]--;
            }
            else console.log(`knygos ${isbn} likutis nepakankamas`);
        }
    } catch (e) {
        if (e=="TypeError: books is not iterable"){
            console.log(`klaida - bandom dar karta...`);
            SellBooks (id, [books]);
        }
        else console.log("ajajai kokia klaida: " + e);
    }
}

function StockBooks (id, isbn, quantity){
    try{
        console.log("\n");
        console.log(`from supplier ${id} buying ${quantity} books ${isbn}`)
        if(suppliers[id][isbn] < 0) console.log(`Knygu ${isbn} kiekis sandelyje neigiamas!`);
        else if(suppliers[id][isbn] >= quantity){
            suppliers[id][isbn] -= quantity;
            warehouse[isbn] += quantity;
        }
        else{
            warehouse[isbn] += suppliers[id][isbn];
            console.log(`knygu ${isbn} buvo uzsakyta tik ${suppliers[id][isbn]}`);
            suppliers[id][isbn] = 0;
        }
        
    } catch(e) {console.log(e);}
}

var warehouse = {
    9786098233346:4,
    9786098233391:7,
    9786099609324:9,
    9786094792250:3,
    9786094792335:1,
    9786094273780:0,
    9786098233483:1,
    9786094273872:2,
    9786094273902:0,
    9786094442742:11,
    9786094442940:3,
    9786090404386:5
}

var suppliers = {
    1:{
        9786098233346: 2,
        9786098233391: 0,
        9786099609324: 0,
        9786094792250: 5,
        9786094792335: 1,
        9786094273780: 0,
        9786098233483: 3,
        9786094273872: 5,
        9786094273902: 7,
        9786094442742: 1,
        9786094442940: 8,
        9786090404386: 0
    },
    2:{
        9786098233346: 0,
        9786098233391: 1,
        9786099609324: 3,
        9786094792250: 1,
        9786094792335: 0,
        9786094273780: 2,
        9786098233483: 0,
        9786094273872: 0,
        9786094273902: 6,
        9786094442742: 9,
        9786094442940: 5,
        9786090404386: 7
    }
}

let library = [
        new Book(9786098233346, "Bloga dukte", 2006, 7.99, 250),
        new Book(9786098233391, "Mergina kuria jis pazinojo", 2015, 7.99, 315),
        new Book(9786099609324, "Tapk ragana", 2019, 7.99, 150),
        new Book(9786094792250, "Sfera", 2007, 6.99, 450),
        new Book(9786094792335, "Mes susitinkame cia", 2019, 9.99, 500),

        new Book(9786094273780, "Sunaikinimas", 2019, 7.99, 509),
        new Book(9786098233483, "Artemide", 2018, 12.99, 199),
        new Book(9786094273872, "Fondas ir imperija", 2015, 4.99, 185),
        new Book(9786094273902, "Amzinybes fjordo pranasai", 2019, 7.99, 333),

        new Book(9786094442742, "Bejegiai", 2004, 5.99, 777),
        new Book(9786094442940, "Klajunai", 2019, 14.99, 172),
        new Book(9786090404386, "Mergina, kuri pakliuvo i voratinkli", 2015, 7.99, 356)
];

var reader1 = new Reader("Ignas", "Leo");

reader1.addOrderHistory([9786099609324, 9786098233483]);
reader1.addOrderHistory([9786098233391, 9786099609324, 9786094792250]);

var readers = [];

for (let i=0; i<10; i++){
    readers.push(new Reader("reader"+i,"lastname"+i));
};

SellBooks(3, [9786098233391, 9786099609324, 9786094792250, 9786094273780, 9786094792335, 9786094792335]);
SellBooks(2, 9786098233483);

SellBooks(5, 9786094273780);

StockBooks(2, 9786094273780, 4);
StockBooks(1, 9786094273902, 5);

SellBooks(5, [9786094273780, 9786094273780, 9786094273780]);
SellBooks(5, [9786094273902,9786094273902]);

console.log(`sandelyje knygu 9786094273902 likutis yra: ${warehouse[9786094273902]}`);
console.log(`pas tiekeja 1 knygu 9786094273902 likutis yra: ${suppliers[1][9786094273902]}`);
console.log(`pas tiekeja 2 knygu 9786094273902 likutis yra: ${suppliers[2][9786094273902]}`);

for (let i=0; i<10; i++){
    console.log(readers[i].toString());
};