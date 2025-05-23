import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const palos = ['♥', '♦', '♣', '♠'];
const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const palosHTML = document.querySelectorAll("#palos");
const valoresHTML = document.querySelector("#valor");
const btnHTML = document.querySelector("#btnNewCard");

let seleccionado;

function selectorAzar(arr) {
  return seleccionado = arr[Math.floor(Math.random() * arr.length)];

}


window.onload = function () {
  let paloOnload = selectorAzar(palos);

  palosHTML.forEach((palo,index) => {
    palo.innerHTML = paloOnload;

    if (paloOnload === palos[0]) {
      palo.className = "hearts";
    }

    if (paloOnload === palos[1]) {
      palo.className = "diamonds";
    }

    if (paloOnload === palos[2]) {
      palo.className = "trebols";
    }

    if (paloOnload === palos[3]) {
      palo.className = "picas";
    }
    if(index===1){
      palo.classList.add('invertido')
    }
  })

  valoresHTML.innerHTML = selectorAzar(valores);

};
