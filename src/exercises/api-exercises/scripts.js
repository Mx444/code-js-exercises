"use strict";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";
const list = document.querySelector("#postList");
const btnFetch = document.querySelector("#btnFetch");

async function fetchData() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      console.log(`Error : ${response.status}`);
    }
    list.innerHTML = "";
    const data = await response.json();
    data.forEach((element) => {
      const listItem = document.createElement("li");
      listItem.textContent = element.title;
      list.appendChild(listItem);
    });
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

btnFetch.addEventListener("click", fetchData);
