let music = document.querySelector('.music-img');
let travel = document.querySelector('.travel-img');
let art = document.querySelector('.art-img');
let misc = document.querySelector('.misc-img');
let body = document.getElementsByTagName("BODY")[0];

let show = (image, bgColour, borderColour) => {
  image.style.opacity = 1;
  body.style.backgroundColor = bgColour;
  image.style.borderColor = borderColour;
}

let hide = (image) => {
  image.style.opacity = 0;
  body.style.backgroundColor = "white";
}

let rellax = new Rellax('.rellax');

let rellaxMisc = new Rellax('.rellax', {
  speed: -2,
  center: false,
  wrapper: null,
  round: true,
  vertical: false,
  horizontal: true
});