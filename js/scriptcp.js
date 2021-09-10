"use strict";

window.addEventListener("load", start);

let arrOfColors = [];

///////////////////////////* SET UP & DELEGATOR *////////////////////////////

// Getting a selected color from the user
function start() {
  let colorSelected = document.querySelector(".colorPicker");
  let harmony = document.getElementById("select");
  let rgb = randomColor();
  let string = rgbToCSS(rgb);
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

// Showing a selected color & delegator
function getBaseColor() {
  const color = this.value;
  const hex = color;
  console.log(hex);
  const rgbObj = hexToRgb(hex);
  const hslObj = rgbToHsl(rgbObj);
  const css = rgbToCSS(rgbObj);

  displayValues(hex, rgbObj, hslObj, css);
  displayColor();
  getHarmony();
}

///////////////////////////* CONVERTIONS *////////////////////////////

// Converting HEX to RGB
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

// Converting RGB to CSS
function rgbToCSS(rgb) {
  let r = rgb.r;
  let g = rgb.g;
  let b = rgb.b;

  return `rgb(${r}, ${g}, ${b})`;
}

// Converting RGB to HEX
function rgbToHex(rgb) {
  let red = rgb.red;
  let green = rgb.green;
  let blue = rgb.blue;

  red = red.toString(16);
  green = green.toString(16);
  blue = blue.toString(16);

  return "#" + red + green + blue;
}

// Converting HSL to RGB
function HSLtoRGB(hsl) {
  let h = hsl.h;
  let s = hsl.s;
  let l = hsl.l;

  h = h;
  s = s / 100;
  l = l / 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;
  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return { r, g, b };
}

///////////////////////////* DISPLAY VALUES *////////////////////////////

function displayValues(hex, rgb, hsl) {
  document.querySelector(".valuesDisplay").classList.remove("hidden");

  console.log("displayBaseValue");
  displayHex(hex);
  displayRgb(rgb);
  displayHsl(hsl);

  displayColor(hex);
}

function displayColor(color) {
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
    getAnalogous(hslObject);
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

  displayValues();
  displayColor();
}

function getAnalogous(hslObject) {
  const h = hslObject.h;
  const s = hslObject.s;
  const l = hslObject.l;

  for (let i = 1; i < 5; i++) {
    arrOfColors[i] = Object.assign({}, hslObject);
  }
  arrOfColors[1].h = arrOfColors[1].h - 40;
  arrOfColors[1].h = arrOfColors[1].h + 60;
  arrOfColors[1].h = arrOfColors[1].h + 180;
  arrOfColors[1].h = arrOfColors[1].h - 104;

  return arrOfColors;
}
