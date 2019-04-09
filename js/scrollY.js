const [redY, greenY, blueY] = [69, 111, 225];

window.addEventListener("scroll", () => {
	let y = 1 + (window.scrollY || window.pageYOffset) / 300;
	y = y < 1 ? 1 : y; // ensure y is always >= 1 (due to Safari's elastic scroll)
	const [rY, gY, bY] = [redY/y, greenY/y, blueY/y].map(Math.round);
	body.style.backgroundColor = `rgb(${rY}, ${gY}, ${bY})`;
});

window.addEventListener();