"use strict"

// Užduotis
// Realizuoto knygų katalogo(pagal ankščiau sukurtą duomenų struktūrą) funkcionalumą DOM'e
// Estetiškas knygų katalogo atvaizdavimas. Išvedam kategorijas. Paspaudus ant kategorijos - atvaziduojame sąrašo būdų, joje esančias knygas
// Naujos knygos pridėjimas į katalogą užpildant formą.
// Knygų katalogo filtras pagal ISBN, pavadinimą, kategoriją (select elementas, kuriame pasirenkame egzistuojančią kategoriją)

let booklist = {
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
            price: 8.99,
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
    'SkandinaviskiDetektyvai': [
        {
            isbn: 9786094442742,
            price: 8.99,
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

var toggle1 = false;
var toggle2 = {};

const ul = document.querySelector(".library ul")

const button = document.querySelector('.library button');
button.addEventListener('click', change);
function change() {
    if (toggle1 == false) {
        for (let key in booklist) {
            let genrebutton = document.createElement("button");
            genrebutton.textContent = key;
            genrebutton.setAttribute("id", key);
            let li = document.createElement("li");
            li.classList.add(key);
            genrebutton.addEventListener('click', function () { printlist(this); });
            li.appendChild(genrebutton);
            ul.appendChild(li);

            toggle2[key] = false;
        }
        toggle1 = !toggle1;
    }
}

function printlist(btn) {
    if (toggle2[btn.id] == false) {
        for (let genre in booklist) {
            if (btn.id == genre) {
                let liparent = document.querySelector(("." + genre));
                let ul = document.createElement("ul");
                ul.setAttribute("style", "list-style:none;");
                for (let book in booklist[genre]) {
                    let lichild = document.createElement("li");
                    lichild.textContent = "";
                    for (let key in booklist[genre][book]) {
                        lichild.textContent += booklist[genre][book][key] + " ";
                    }
                    ul.appendChild(lichild)
                }
                liparent.appendChild(ul);
            }
        }
        toggle2[btn.id] = !toggle2[btn.id];
    }
}

const newselect = document.querySelector(".addbook select");
const newisbn = document.querySelector(".addbook #isbn")
const newprice = document.querySelector(".addbook #price")
const newyear = document.querySelector(".addbook #year")
const newtitle = document.querySelector(".addbook #title")
const newpagecount = document.querySelector(".addbook #pagecount")

const addbutton = document.querySelector('.addbook button');
addbutton.addEventListener("click", add);
function add() {
    booklist[newselect.value].push({ isbn: newisbn.value, price: newprice.value, year: newyear.value, title: newtitle.value, pagecount: newpagecount.value });
    newisbn.value = "";
    newprice.value = "";
    newyear.value = "";
    newtitle.value = "";
    newpagecount.value = "";
}

const ulparent = document.querySelector('.filter ul');
const filterbutton = document.querySelector('.filter button');
filterbutton.addEventListener("click", filter);


function filter() {
    const filterselect = document.querySelector(".filter select");
    const filterisbn = document.querySelector(".filter #isbn");
    const filterprice = document.querySelector(".filter #price");
    const filteryear = document.querySelector(".filter #year");
    const filtertitle = document.querySelector(".filter #title");
    const filterpagecount = document.querySelector(".filter #pagecount");


    var query = {};
    if (filterisbn.value) query.isbn = filterisbn.value;
    if (filterprice.value) query.price = filterprice.value;
    if (filteryear.value) query.year = filteryear.value;
    if (filtertitle.value) query.title = filtertitle.value;
    if (filterpagecount.value) query.pagecount = filterpagecount.value;

    console.log(query);

    let results = filterBooks2(booklist, query, filterselect.value);

    console.log(results);

    for (let genre in results) {
        if (results[genre].length == 0) console.log("lol tuscia: " + genre);
        else {
            let liparent = document.createElement("li");
            let ulchild = document.createElement("ul");
            ul.setAttribute("style", "list-style:none;");
            for (let book in results[genre]) {
                let lichild = document.createElement("li");
                lichild.textContent = "";
                for (let key in results[genre][book]) {
                    lichild.textContent += results[genre][book][key] + " ";
                }
                ulchild.appendChild(lichild);
            }
            liparent.appendChild(ulchild);
            ulparent.appendChild(liparent);
        }
    }



    filterisbn.value = "";
    filterprice.value = "";
    filteryear.value = "";
    filtertitle.value = "";
    filterpagecount.value = "";
}

function filterBooks2(arr, query, select) {
    if (select == "") {
        for (let genre in arr) {
            for (let key in query) {
                arr[genre] = arr[genre].filter(item => item[key] == query[key]);
            }
        }
    } else {
        let temp = arr[select];
        arr = {};
        console.log(arr[select]);
        for (let key in query) {
            temp = temp.filter(item => item[key] == query[key]);
        }
        arr[select] = temp;
        console.log(arr[select]);
    }
    return arr;
}





// const button = document.querySelector('button');

// var count = document.querySelector('.count');
// const h1 = document.querySelector('section h1');
// const h3 = document.querySelector("section h3");

// var newbutton = document.createElement("button");
// newbutton.setAttribute("class", "showlist");

// button.addEventListener('click', change);

// var array = [];
// var n = 0;
// var i = 1;

// function change() {
//     if (count.value > 0 && count.value < 100) {
//         h1.textContent = "";
//         n = count.value;
//         button.style.display = "none";
//         h1.appendChild(newbutton);
//         newbutton.textContent = "prideti";
//         newbutton.addEventListener("click", prideti)
//     } else {
//         h1.textContent = "Ivestas neteisingas skaicius, bandykite dar karta";
//     }
// }

// function prideti() {
//     count = document.querySelector('.count');
//     if (i < n) {
//         array.push(count.value);
//     }
//     if (i == n) {
//         array.push(count.value);
//         h3.textContent = "Uzregistruoti zmones: " + array.toString();
//         newbutton.style.display = "none";
//     }
//     i++;
// }


// const button = document.querySelector('button');

// const count = document.querySelector('.count');
// const h1 = document.querySelector('section h1');

// var ul = document.createElement("ul");
// var li = document.createElement("li");

// var text = document.createElement("input");
// text.setAttribute("type","text");
// text.setAttribute("placeholder","vardas");

// var newbutton = document.createElement("button");
// newbutton.setAttribute("class","showlist");

// li.appendChild(text);
// ul.appendChild(li);

// button.addEventListener('click', change);

// function change() {

//     // for (let i; i < count.value; i++) {
//         h1.appendChild(ul);
//     // }
//     h1.appendChild(newbutton);
//     newbutton.textContent = "kurti";
// }



// const navigation = document.querySelector("nav ul li");
// navigation.addEventListener('click', change);
// function change(){
//     navigation.style.backgroundColor = "#eee";
// }

// var uzbaigti = document.querySelectorAll('section ul li span');
// for (let i = 0; i<uzbaigti.length; i++){
//     uzbaigti[i].addEventListener('click', function(){uzbaigti[i].setAttribute("hidden","1")});
// }

// const button = document.querySelector('button');
// const item = document.querySelector('.item');
// const price = document.querySelector('.price');
// const count = document.querySelector('.count');
// const h1 = document.querySelector('section h1');

// button.addEventListener('click', change);

// function change(){
//     h1.textContent = item.value + "  " + price.value * count.value;    
// }

