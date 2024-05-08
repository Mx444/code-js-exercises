"use strict";

const inputText = document.querySelector("#numero");
const btnConverti = document.querySelector("#converti");
const list = document.querySelector("#list");

function convertiInBinario() {
  let intText = Number(inputText.value);

  while (intText > 0) {
    var divisioneBinario = Math.trunc(intText / 2);
    var restoBinario = Math.trunc(intText % 2);
    let newList = document.createElement("li");
    newList.textContent = restoBinario;
    list.appendChild(newList);
    intText = divisioneBinario;
  }
}

btnConverti.addEventListener("click", convertiInBinario);
