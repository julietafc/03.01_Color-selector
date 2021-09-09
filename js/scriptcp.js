"use strict";

window.addEventListener("load", start);
let harmony = document.getElementById("select").value;

// Getting a selected color from the user
function start() {
  console.log("start");
  const colorSelected = document.querySelector(".colorPicker");
  colorSelected.addEventListener("input", getBaseColor());
}

// Showing a selected color (possibly a delegator for the following function calls)
function getBaseColor() {
  console.log("getBaseColor");
  const color = this.value;
  const hex = color;
  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb);

  displayBaseValue(hex, rgb, hsl);
  getHarmony(hsl); //  this function is called here or in rgbtohsl convertion?
}
