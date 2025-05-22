"use strict";

const conto = document.querySelector("#conto");
const percentuale = document.querySelector("#percentuale");
const persone = document.querySelector("#persone");
const btnCalcola = document.querySelector("#calcola");
const list = document.querySelector("#list");
function calcolaMance() {
  const intConto = Number(conto.value);
  const intPercentuale = Number(percentuale.value / 100);
  const intPersone = Number(persone.value);
  const Mance = (intConto * intPercentuale) / intPersone;
  const createNewList = document.createElement("li");
  list.innerHTML = "";
  const newListMance = list.appendChild(createNewList);
  createNewList.textContent = Mance + " €";
}

btnCalcola.addEventListener("click", calcolaMance);

