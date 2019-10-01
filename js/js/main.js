"use strict"

var item = "Dvaro pienas";
var description = "Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30 Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30";
var quantity = 50;
var discount = 0.3;
var price = 0.95;


var itemObject = {
    item:item,
    description:"Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30 Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30Dvaro pienas yra 32% riebumo, turi daug baltymu, pakuote 1 litro, pakuotes tipas pet30",
    quantity:50,
    discount:0.3,
    price:0.95
}

for (let key in itemObject) {
    console.log(key + " yra " + itemObject[key]);
}

var cutString = 150;

if (description.length > cutString) {
    console.log(description.substring(0, cutString*0.65));
}

var prekes = ['pienas',10,true,function(){console.log("sveiki")}];

let duomenys = function(){return 10;};

console.log(typeof(function(){console.log("labas")}));


var myArray = [56, 57, 132, 97, 23, 111];

console.log(myArray[2]);

for(let i=0; i < myArray.length; i++){
    console.log(myArray[i]);
}

let catalog = ['pienas', 'duona', 'kava'];

catalog[0]= ['sportas','dviraciai','riedlentes','paspirtukai'];
catalog[1]= ['mergaitem', 'leles','rutuliukai', 'gelytes'];
catalog[2]= ['berniukam', 'lego', 'masinytes', 'telefonai'];


for(var i=0; i < catalog.length; i++){
    console.log("Kategorija: " + catalog[i][0]);
    for(var j=1; j<catalog[i].length; j++){
        console.log(catalog[i][j]);
    }
}

let vartotojas = {vardas:"Ignas"};
let vartotojai = {grupe:{
    vardas:"Ignas"
}}

let katalogas = {
    maistas:['pienas', 'duona', 'alus'],
    iranga:['kompiuteris', 'telefonas'],
    kita:['rasiklis','piestukas']
}

for (let cat in katalogas) {
    console.log("(" + katalogas[cat].length + ")" + cat.charAt(0).toUpperCase() + cat.slice(1) + ':');
    for (let i = 0; i < katalogas[cat].length; i++) {
        console.log(katalogas[cat][i].charAt(0).toUpperCase() + katalogas[cat][i].slice(1));        
    }
}