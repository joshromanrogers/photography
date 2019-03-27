let music = document.querySelector('.music-img');
let travel = document.querySelector('.travel-img');
let art = document.querySelector('.art-img');
let misc = document.querySelector('.misc-img');
let body = document.getElementsByTagName("BODY")[0];
let h1 = document.getElementsByTagName("H1")[0];

let show = (image, bgColour, borderColour) => {
  h1.style.opacity = 0;
  image.style.opacity = 1;
  body.style.backgroundColor = bgColour;
  image.style.borderColor = borderColour;
}

let hide = (image) => {
  image.style.opacity = 0;
  body.style.backgroundColor = "white";
  h1.style.opacity = 1;

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