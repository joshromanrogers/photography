import Highway from "@dogstudio/highway";
import { slider } from "./slider.js";

class MusicRenderer extends Highway.Renderer {
	onEnter() { 
		// make back button visible
		let movBack = document.querySelector(".movBack");
		movBack.style.opacity = 0;
		// initialise 
		slider(-150, 50, 80, "moversMusic");
		
	}
	onLeave() { 


	}
	onEnterCompleted() {
		// make back button visible
		let movBack = document.querySelector(".movBack");
		movBack.style.opacity = 1;
	 }
	onLeaveCompleted() { 
	}
}

export default MusicRenderer;