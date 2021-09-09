"use strict";

window.addEventListener("load", start);

///////////////////////////* SET UP & DELEGATOR *////////////////////////////

// Getting a selected color from the user
function start() {
  let colorSelected = document.querySelector(".colorPicker");
  let harmony = document.getElementById("select");
  let object = randomColor();
  let string = rgbToCSS(object);
  colorSelected.addEventListener("input", getBaseColor);
  colorSelected.addEventListener("change", getBaseColor);
  harmony.addEventListener("input", getBaseColor);
  harmony.addEventListener("change", getBaseColor);
  document.querySelector(".colorBaseDisplay").style.backgroundColor = string;
}

function randomColor() {
  document.querySelector(".valuesDisplay").classList.add("hidden");
  let r = 0;
  let g = 0;
  let b = 0;

  return { r, g, b };
}

// Showing a selected color (possibly a delegator for the following function calls)
function getBaseColor() {
  const color = this.value;
  const hex = color;
  console.log(hex);
  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb);

  displayBaseValue(hex, rgb, hsl);
  getHarmony(hsl); //  this function is called here or in rgbtohsl convertion?
}

function displayBaseValue(hex, rgb, hsl) {
  document.querySelector(".valuesDisplay").classList.remove("hidden");

  console.log("displayBaseValue");
  displayHex(hex);
  displayRgb(rgb);
  displayHsl(hsl);

  displayBaseColor(hex);
}

function hexToRgb(hex) {
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5, 7), 16);

  return {
    red,
    green,
    blue,
  };
}

///////////////////////////* CONVERTIONS *////////////////////////////

// Converting RGB to CSS
function rgbToCSS(rgb) {
  let r = rgb.r;
  let g = rgb.g;
  let b = rgb.b;

  return `rgb(${r}, ${g}, ${b})`;
}

// Converting RGB to HSL
function rgbToHsl(rgb) {
  let red = rgb.red;
  let green = rgb.green;
  let blue = rgb.blue;

  red /= 255;
  green /= 255;
  blue /= 255;

  let h, s, l;

  const min = Math.min(red, green, blue);
  const max = Math.max(red, green, blue);

  if (max === min) {
    h = 0;
  } else if (max === red) {
    h = 60 * (0 + (green - blue) / (max - min));
  } else if (max === green) {
    h = 60 * (2 + (blue - red) / (max - min));
  } else if (max === blue) {
    h = 60 * (4 + (red - green) / (max - min));
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

  const hsl = {
    h: Math.round(h),
    s: Math.round(s),
    l: Math.round(l),
  };

  return hsl;
}

// function rgbToHex(rgb) {
//   let red = rgb.red;
//   let green = rgb.green;
//   let blue = rgb.blue;

//   red = red.toString(16);
//   green = green.toString(16);
//   blue = blue.toString(16);

//   return "#" + red + green + blue;
// }

///////////////////////////* DISPLAY VALUES *////////////////////////////

function displayBaseColor(color) {
  console.log("displayBaseColor");
  document.querySelector(".colorBaseDisplay").style.backgroundColor = color;
}

function displayHex(HEX) {
  console.log("displayHex");
  document.querySelector(".HEX").textContent = `HEX: ${HEX}`;
}

function displayRgb(RGB) {
  console.log("displayRgb");
  document.querySelector(".RGB").textContent = `RGB: ${RGB.red}, ${RGB.green}, ${RGB.blue} `;
}

function displayHsl(HSL) {
  document.querySelector(".HSL").textContent = `HSL: ${HSL.h}, ${HSL.s}, ${HSL.l}`;
}

///////////////////////////* GET HARMONY *////////////////////////////

function getHarmony(hsl) {
  console.log("getHarmony");
  let harmony = document.getElementById("select").value;

  if (harmony === "analogous") {
    getAnalogous(hsl);
    //   } else if (harmony === "monochromatic") {
    //     getMonochromatic(hsl);
    //   } else if (harmony === "triad") {
    //     getTriad(hsl);
    //   } else if (harmony === "complementary") {
    //     getComplementary(hsl);
    //   } else if (harmony === "compound") {
    //     getCompound(hsl);
    //   } else if (harmony === "shades") {
    //     getShades(hsl);
  } else {
    console.log("invalid");
  }
}

function getAnalogous(hsl) {
  console.log("getAnalogous");
  let hslObject = { h: 350, s: 45, l: 34 };
  let arrOfColors = [];
  for (let i = 0; i < 4; i++) {
    console.log(i);
    arrOfColors[i] = Object.assign({}, hslObject);
  }
  return hsl;
}
