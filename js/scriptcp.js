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

function displayBaseValue(hex, rgb, hsl) {
  console.log("displayBaseValue");
  displayHex(hex);
  displayRgb(rgb);
  displayHsl(hsl);

  displayBaseColor(hex);
}

function displayBaseColor(color) {
  console.log("displayBaseColor");
  document.querySelector(".colorBaseDisplay").style.backgroundColor = color;
}

function hexToRgb(hex) {
  console.log(hex);
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5, 7), 16);

  return {
    red,
    green,
    blue,
  };
}

function getHarmony(hsl) {
  console.log("getHarmony");
  let harmony = document.getElementById("select").value;
  switch (harmony) {
    case "Analogous":
      getAnalogous(hsl);
      break;
    default:
      `Invalid`;
  }
}

function getAnalogous() {
  console.log("getAnalogous");
}
