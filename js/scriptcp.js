"use strict";

window.addEventListener("load", start);
let harmony = document.getElementById("select").value;

// Getting a selected color from the user
function start() {
  console.log("start");
  const colorSelected = document.querySelector(".colorPicker");
  colorSelected.addEventListener("input", getBaseColor());
}
