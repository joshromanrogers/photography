// Import Highway & Slider
import Highway from "@dogstudio/highway";
import { slider } from "./slider.js";
import { placeImage } from "./place-image.js";

class ArtRenderer extends Highway.Renderer {
	onEnter() {
		// make back button invisible until page has come in
		let movBack = document.querySelector(".movBack");
		movBack.style.opacity = 0;

		// initialise slider
		slider(-150, 50, 80, "moversArt");
	
		let backButton = document.querySelector(".movBack");

		backButton.addEventListener("click", () => {
			window.location.href = "index.html";
		});

		let tap = document.querySelector(".tap");

		// when user clicks, add image based on event/cursor xy position
		document.querySelector(".art-content").addEventListener("click", event => {
			event.preventDefault();
			tap.style.display = "none";
			placeImage(event.pageX, event.pageY);
		});

		// same as above, but for mobile
		document.addEventListener("touchend", event => {
			event.preventDefault();
			placeImage(event.pageX, event.pageY);
		});
	}
	onLeave() {}
	onEnterCompleted() {
		// make back button visible
		let movBack = document.querySelector(".movBack");
		movBack.style.opacity = 1;
	}
	onLeaveCompleted() {}
}

// export renderer
export default ArtRenderer;
