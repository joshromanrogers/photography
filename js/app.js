let music = document.querySelector('.music-img');
let travel = document.querySelector('.travel-img');
let art = document.querySelector('.art-img');
let misc = document.querySelector('.misc-img');

let showMusic = () => {
    music.style.display = "block";
}

let hideMusic = () => {
    music.style.display = "none";
}

let showTravel = () => {
    travel.style.display = "block";
}

let hideTravel = () => {
    travel.style.display = "none";
}

let showArt = () => {
    art.style.display = "block";
}

let hideArt = () => {
    art.style.display = "none";
}

let showMisc = () => {
    misc.style.display = "block";
}

let hideMisc = () => {
    misc.style.display = "none";
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

