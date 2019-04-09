// Import Highway & Rellax & slider
import Highway from "@dogstudio/highway";
import Rellax from "rellax";
import { slider } from "./slider.js";

class TravelRenderer extends Highway.Renderer {
	// Hooks/methods
	onEnter() { 
		// initialise 
		let rellax = new Rellax(".rellax");
		slider(-150, 50, 80, "moversTravel");
	}
	onLeave() { 
		// End Rellax and reset parallax elements to their original positions
		rellax.destroy();
	}
	onEnterCompleted() { }
	onLeaveCompleted() { }
}

// export renderer
export default TravelRenderer;