"use strict"

let fotos;
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        fotos = JSON.parse(xhr.response);
        console.log(fotos);
    }
}
xhr.open('GET', 'http://web-training.lt/img_api/');
xhr.send();

let fotoUrlArr = [];
let button1 = document.querySelector('body div:nth-child(1) button');
let button2 = document.querySelector('body div:nth-child(2) button');
button1.addEventListener('click', showFotos);
button2.addEventListener('click', shuffleFotos);

function showFotos() {
    button1.setAttribute("style", "display:none;");
    let div = document.querySelector('body div:nth-child(2)');
    for (let foto of fotos) {
        let url = "img/" + foto;
        console.log(url);
        let img = document.createElement('img');
        img.setAttribute('src', url);
        img.setAttribute('style', 'width:20%;');
        img.classList.add('p-4');
        img.onclick = function(e) {
            e.target.setAttribute('src','img/default.png');
        }
        div.appendChild(img);
    }
    var fotoArr = document.querySelectorAll('img[src]');
    console.log(fotoArr);
    for (let foto of fotoArr) {
        fotoUrlArr.push(foto.attributes.src.value);
    }
}

function shuffleFotos() {
    fotoUrlArr = shuffle(fotoUrlArr);
    for (let i = 1; i<fotoUrlArr.length+1; i++) {
        let img = document.querySelector(`div img:nth-of-type(${i})`);
        img.setAttribute('src',fotoUrlArr[i-1]);
    }
}

function shuffle(array) {
    for (let i = array.length-1; i > 0; i--) {
        let index = Math.floor(Math.random() * i);
        let temp = array[i];
        array[i] = array[index];
        array[index] = temp;
    }
    return array;
}