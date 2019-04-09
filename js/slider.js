// slider function
// (min number, max number, time interval between executing function, query selector)

export function slider(min, max, speed, query){

	let slider = 0;
	let inc = -1;
	let stripName = document.querySelector(`.${query}`);


	// count every second
	setInterval(() => {
		if (slider == max) inc = -1; // once we reach max, start removing from slider
		if (slider == min) inc = 1; // once we reach min, start adding to slider
		slider += inc; // increment
		stripName.style.transform = `translate3d(${slider}px, 0px, 0px)`;
	}, speed);

}

slider(-150, 50, 80, "movers");
slider(-150, 50, 80, "movers2");
slider(-150, 50, 80, "movers3");
slider(-150, 50, 80, "movers4");
// slider(-150, 50, 80, "moversIndex");



