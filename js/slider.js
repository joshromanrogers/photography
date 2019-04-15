// slider function
// (min number, max number, time interval between executing function, query selector)

export function slider(min, max, speed, query){
	console.log(query);
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

// let moversTravel = document.querySelector(".moversTravel");
// let moversArt = document.querySelector(".moversArt");
// let moversMisc = document.querySelector(".moversMisc");
// let moversMusic = document.querySelector(".moversMusic");

// slider(-150, 50, 80, moversTravel);
// slider(-150, 50, 80, moversArt);
// slider(-150, 50, 80, moversMisc);
// slider(-150, 50, 80, moversMusic);




