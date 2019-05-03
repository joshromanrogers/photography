import images from "../imgs/photography/music/*.jpg";
let i = 0;

export function placeImage(x, y) {
	const nextImage = images[Object.keys(images)[i]];
	
	let mql = window.matchMedia("(max-width: 640px)");

	// create img element,
	// set the src as an img in the images array,
	// give top left coords based on x and y input values
	const img = document.createElement("img");
	img.setAttribute("src", nextImage);
	img.classList.add("collage-img");
	img.style.maxHeight = "1800px";
	if (mql.matches) {
		img.style.left = x / 4 + "%";
		img.style.top = y / 8 + "%";
		img.style.transform = `translate(-50%, -50%) scale(${Math.random() * 1.2 + 0.5}) rotate(${Math.random() * 20 -
			10}deg)`;
	}
	else {
		img.style.left = x / 10 + "%";
		img.style.top = y / 10 + "%";
		img.style.transform = `translate(-50%, -50%) scale(${Math.random() * 0.2 + 0.2}) rotate(${Math.random() * 20 -
			10}deg)`;
	}
	
	
	console.log(img.style.left);
	console.log(img.style.top);

	// add to page
	let collageBody = document.querySelector(".collage-body");
	collageBody.appendChild(img);

	i = i + 1;

	// loop back to first image when the end of images array reached
	if (i >= Object.keys(images).length) {
		i = 0;
	}
}

