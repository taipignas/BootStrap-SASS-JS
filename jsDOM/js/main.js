"use strict"

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
    'SkandinaviskiDetektyvai': [
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


const ul = document.querySelector(".library ul")

const button = document.querySelector('button');
button.addEventListener('click', change);
function change() {
    for (let key in booklist){
        let button = document.createElement("button");
        button.textContent = key;
        button.addEventListener('click', printlist);
        let li = document.createElement("li");
        li.classList.add(key);
        li.appendChild(button);
        ul.appendChild(li);
    }
}

function printlist(){
    for (let genre in booklist){
        if (button.className = genre){
            let liparent = document.querySelector("genre");
            let ul = document.createElement("ul");
            

            
            for (let book in booklist.key){
                let lichild = document.createElement("li");
                
                ul.appendChild(lichild)
            }
            liparent.appendChild(ul);
        }
    }
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

