// Import Highway & Slider
import Highway from "@dogstudio/highway";
import { slider } from "./slider.js";
import { placeImage } from "./place-image.js";

class ArtRenderer extends Highway.Renderer {
	// Hooks/methods
	onEnter() {
		// initialise slider
		slider(-150, 50, 80, "moversArt");

		let backButton = document.querySelector(".movBack");

		// override collage function preventDefault() and take user back to homepage
		backButton.addEventListener("click", event => {
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
	onLeave() {
		// End Rellax and reset parallax elements to their original position
	}
	onEnterCompleted() {}
	onLeaveCompleted() {}
}

// export renderer
export default ArtRenderer;
