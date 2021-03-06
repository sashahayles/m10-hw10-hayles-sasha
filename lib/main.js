'use strict';

//variables for messages
var boilingTemp = document.getElementBy('boiling-temp');
var freezingTemp = document.getElementBy('freezing-temp');
var waterTemp = document.getElementBy('water-temp');
var boilingMessage = document.getElementBy('boiling');
var freezingMessage = document.getElementBy('frozen');
var goodMessage = document.getElementBy('good-temp');
//variables for temperatures
var frozenNum = 32;
var boilingNum = 212;
var waterNum = 50;
// functions
var showBoilingTemp = function showBoilingTemp() {
  boilingTemp.innerHTML = boilingNum;
};
showBoilingTemp();

var showFreezingTemp = function showFreezingTemp() {
  freezingTemp.innerHTML = frozenNum;
};
showFreezingTemp();

var showWaterTep = function showWaterTep() {
  waterTemp.innerHTML = waterNum;
};
showWaterTemp();
//settime out
var showWaterFine = function showWaterFine() {
  if (waterNum > boilingNum) {
    boilingMessage.classList.remove('hide');
  } else if (waterNum < frozenNum) {
    freezingMessage.classList.remove('hide');
  } else {
    goodMessage.classList.remove('hide');
  }
};
setTimeout(showWaterFine, 3000);