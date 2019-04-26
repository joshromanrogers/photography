import Highway from "@dogstudio/highway";
import Rellax from "rellax";
import { slider } from "./slider.js";

class TravelRenderer extends Highway.Renderer {
	onEnter() { 
		// make back button invisible until page has come in
		let movBack = document.querySelector(".movBack");
		movBack.style.opacity = 0;
		
		// initialise home button and a rellax object
		slider(-150, 50, 80, "moversTravel");
		let rellax = new Rellax(".rellax");

		// on scroll, change the colour of the background (travel-container class)
		const [redY, greenY, blueY] = [50, 205, 50];
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
	onEnterCompleted() {
		// make back button visible
		let movBack = document.querySelector(".movBack");
		movBack.style.opacity = 1;
	 }
	onLeaveCompleted() { }
}

// export renderer
export default TravelRenderer;