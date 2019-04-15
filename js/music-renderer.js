// Import Highway & Rellax & slider
import Highway from "@dogstudio/highway";
import { slider } from "./slider.js";
// import Modernizr from "modernizr";

class MusicRenderer extends Highway.Renderer {
	// Hooks/methods
	onEnter() { 
		// make back button visible
		let movBack = document.querySelector(".movBack");
		movBack.style.opacity = 0;
		// initialise 
		slider(-150, 50, 80, "moversMusic");
		
// Modernizr.build({}, function (result) {
//   console.log(result); // the build
// });
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

// export renderer
export default MusicRenderer;