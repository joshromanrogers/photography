let art = document.querySelector(".art-img");
let music = document.querySelector(".music-img");
let travel = document.querySelector(".travel-img");
let misc = document.querySelector(".misc-img");

let body = document.getElementsByTagName("BODY")[0];
let h1 = document.getElementsByTagName("H1")[0];

let show = (image, bgColour, borderColour) => {
	h1.style.opacity = 1;
	image.style.opacity = 1;
	body.style.backgroundColor = bgColour;
	image.style.borderColor = borderColour;
};

let hide = (image) => {
	image.style.opacity = 0;
	body.style.backgroundColor = "white";
	h1.style.opacity = 1;
};

document.querySelector(".art").addEventListener("mouseover", () => show(art, "brown", "green"));
document.querySelector(".art").addEventListener("mouseout", () => hide(art));

document.querySelector(".misc").addEventListener("mouseover", () => show(misc, "pink", "purple"));
document.querySelector(".misc").addEventListener("mouseout", () => hide(misc));

document.querySelector(".travel").addEventListener("mouseover", () => show(travel, "green", "yellow"));
document.querySelector(".travel").addEventListener("mouseout", () => hide(travel));

document.querySelector(".music").addEventListener("mouseover", () => show(music, "red", "orange"));
document.querySelector(".music").addEventListener("mouseout", () => hide(music));
