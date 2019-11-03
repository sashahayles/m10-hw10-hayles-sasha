const boilingTemp = document.getElementBy('boiling-temp');
const freezingTemp = document.getElementBy('freezing-temp');
const waterTemp = document.getElementBy('water-temp');
const boilingMessage = document.getElementBy('boiling');
const freezingMessage = document.getElementBy('frozen');
const goodMessage = document.getElementBy('good-temp');

const frozenNum =32;
const boilingNum = 212;
let waterNum = 50;

const showBoilingTemp = () => {
  boilingTemp.innerHTML = boilingNum;
}
showBoilingTemp();

const showFreezingTemp = () => {
  freezingTemp.innerHTML = frozenNum;
}
showFreezingTemp();

const showWaterTep = () => {
  waterTemp.innerHTML= waterNum;
}
showWaterTemp();

const showWaterFine = () => {
  if (waterNum > boilingNum) {
    boilingMessage.classList.remove ('hide');
  } else if (waterNum < frozenNum) {
    freezingMessage.classList.remove ('hide');
  } else {
    goodMessage.classList.remove ('hide');
  }
}
setTimeout(showWaterFine, 3000);
