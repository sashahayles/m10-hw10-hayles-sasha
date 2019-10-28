'use strict';

//boiling temp
var boiling = document.getElementById('boiling-temp');
var boilingtxt = document.createTextNode("212");
boiling.appendChild(boilingtxt);

//freeze() => {
//boiling.appendChild (boilingtxt);
//document.appendChild (boiling);
//  freeze();
// }

//freezing temp
var freezing = document.getElementById('freezing-temp');
var freezingtxt = document.createTextNode("32");
freezing.appendChild(freezingtxt);

//random water temp
var randomtemp = document.getElementById('water-temp');
var temptxt = document.createTextNode("50");
randomtemp.appendChild(temptxt);

var goodTemp = document.getElementById('good-temp');
setTimeout(function () {
  goodTemp.classList.remove('hide');
  goodTemp.classList.add('show');
}, 3000);