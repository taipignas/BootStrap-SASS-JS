"use strict"
// let xhr = new XMLHttpRequest(); /*Sukuriamas objektas*/
// xhr.onreadystatechange = function () { /*Callback funkcija*/
//     if(xhr.readyState ===4) {
//         if (xhr.status === 200) {
//             document.querySelector('aside').innerHTML = xhr.responseText;
//         } else {
//             alert(xhr.statusText);
//         }
//     }
// };
// xhr.open('GET', 'menu.html');
// document.querySelector('button.showMenu').onclick = function() {
//     xhr.send(); /*issiunciam apklausa*/
//     document.querySelector('button.showMenu').style.display = "none";
// }

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState ===4 && xhr.status === 200){
        let jsonArr = JSON.parse(xhr.response);
        console.log(jsonArr);
        let section = document.querySelector('.row section div');
        let ul = document.createElement('ul');
        ul.setAttribute("style", "list-style:none;");
        for (let mokinys of jsonArr){
            console.log(mokinys);
            let li = document.createElement('li');
            let i = document.createElement('i');
            let p = document.createElement('p');
            i.classList.add('fas','fa-check-square');
            if (!mokinys.lokacija) {
                i.setAttribute("style", "color: red;")
            }
            p.textContent = mokinys.vardas;
            li.appendChild(i);
            li.appendChild(p)
            ul.appendChild(li);
        }
        section.appendChild(ul);
    }
}
xhr.open('GET', 'mokiniai.json');
xhr.send();

