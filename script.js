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

// function when the user selects a new color
function newColorSelected() {
  let color = colorInput.value;
  hexValue = color;
  rgbValue = hexToRgb(hexValue);
  //   hslValue = rgbToHsl(rgbValue);

  displayColor(hexValue);
  displayValues(hexValue, rgbValue, hslValue);
}

// function HEX TO RGB
function hexToRgb(hex) {
  let red = hex.substring(1, 3);
  let green = hex.substring(3, 5);
  let blue = hex.substring(5, 7);

  red = parseInt(red, 16);
  green = parseInt(green, 16);
  blue = parseInt(blue, 16);

  const rgbValue = {
    red: red,
    green: green,
    blue: blue,
  };
  return rgbValue;
}

// function RGB TO HEX
function rgbToHex(rgbValue) {
  let red = rgbValue.red;
  let green = rgbValue.green;
  let blue = rgbValue.blue;

  red = red.toString(16);
  green = green.toString(16);
  blue = blue.toString(16);

  const hexValue = "#" + red + green + blue;
  return hexValue;
}

// function display color
function displayColor(color) {
  document.querySelector(".colorDisplay").style.backgroundColor = color;
}

// function display color values
function displayValues(HEX, RGB) {
  document.querySelector(".HEX").textContent = HEX;
  document.querySelector(".RGB").textContent = `R:${rgbValue.red}, G:${rgbValue.green}, B:${rgbValue.blue}`;
}
