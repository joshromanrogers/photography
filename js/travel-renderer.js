// Import Highway & Rellax & slider
import Highway from "@dogstudio/highway";
import Rellax from "rellax";
import { slider } from "./slider.js";

class TravelRenderer extends Highway.Renderer {
	// Hooks/methods
	onEnter() { 
		// initialise home button and a rellax object
		slider(-150, 50, 80, "moversTravel");
		let rellax = new Rellax(".rellax");

		// on scroll, change the colour of the background (travel-container class)
		const [redY, greenY, blueY] = [160, 160, 160];
		let travelContainer = document.querySelector(".travel-container");

		window.addEventListener("scroll", () => {
			let y = 1 + (window.scrollY || window.pageYOffset) / 300;
			y = y < 1 ? 1 : y; // ensure y is always >= 1 (due to Safari's elastic scroll)
			const [rY, gY, bY] = [redY/y, greenY/y, blueY/y].map(Math.round);
			travelContainer.style.backgroundColor = `rgb(${rY}, ${gY}, ${bY})`;
		});
	}
	onLeave() { 
	}
	onEnterCompleted() { }
	onLeaveCompleted() { }
}

// export renderer
export default TravelRenderer;