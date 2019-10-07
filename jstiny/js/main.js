(function () {

"use strict"

let library = ['Bejegiai', 'Klajunai', 'Artemide', 'Sunaikinimas', 'Sfera'];

// library.shift();
// library.unshift();

// library.push('asd');
// library.pop();

// let cut = library.splice(2,1, "IDETAS");


// for(let knyga of library){
//     console.log(knyga);
// }

// console.log(library.toString())

// function ilgi(item) {
//     return item.length >= 7;
// }

// let tikrink = function () {
//     console.log("Labas");
// }


function plus1(item) {
    return item+"1";
}

for(let i=0; i< library.length; i++)
{
    library[i] = plus1(library[i]);
}

for(let knyga of library){
    console.log(knyga);
}

})();