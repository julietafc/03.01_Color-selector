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
  hslValue = rgbToHsl(rgbValue);

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

// function RGB TO HSL
function rgbToHsl() {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;
}

// function display color
function displayColor(color) {
  document.querySelector(".colorDisplay").style.backgroundColor = color;
}

// function display color values
function displayValues(HEX, RGB, HSL) {
  document.querySelector(".HEX").textContent = HEX;
  document.querySelector(".RGB").textContent = `${red}, ${green}, ${blue}`;
  document.querySelector(".HSL").textContent = ``;
}
