//boiling temp
const boiling = document.getElementById('boiling-temp');
const boilingtxt = document.createTextNode ("212");
boiling.appendChild (boilingtxt);

//freeze() => {
  //boiling.appendChild (boilingtxt);
  //document.appendChild (boiling);
//  freeze();
// }

//freezing temp
const freezing = document.getElementById ('freezing-temp');
const freezingtxt = document.createTextNode ("32");
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
