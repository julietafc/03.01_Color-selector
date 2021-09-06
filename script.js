"use strict";

/*  SETUP */
window.addEventListener("load", start);

let colorInput = document.querySelector(".colorPicker");
let hexValue = document.querySelector(".HEX");
let rgbValue = document.querySelector(".RGB");
let hslValue = document.querySelector(".HSL");

function start() {
  // add eventlistener to color picker
  colorInput.addEventListener("input", newColorSelected);
  colorInput.addEventListener("change", newColorSelected);
}
