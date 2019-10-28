//boiling
const boiling = document.getElementById('boiling-temp');
var boilingtxt = document.createTextNode ("212");
boiling.appendChild (boilingtxt);
//freezing
const freezing = document.getElementById ('freezing-temp');
var freezingtxt = document.createTextNode ("32");
freezing.appendChild (freezingtxt);
//random water temp
let randomtemp = document.getElementById ('water-temp');
let temptxt = document.createTextNode ("50");
randomtemp.appendChild (temptxt);

let goodTemp = document.getElementById ('good-temp');
setTimeout(()=> {
  goodTemp.classList.remove('hide');
  goodTemp.classList.add('show');
}, 3000);


//extra 
let showgoodtemp = () => {
randomtemp.classList.remove('hide');
randomtemp.classList.add('show');
};

setTimeout(showgoodtemp, 3000);
//setTimeout( function () {
  //randomtemp.classList.remove ('hide');
  //randomtemp.classList.add ('show');
//}, 3000);
