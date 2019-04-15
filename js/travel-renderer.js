// Import Highway & Rellax & slider
import Highway from "@dogstudio/highway";
import Rellax from "rellax";
import { slider } from "./slider.js";

class TravelRenderer extends Highway.Renderer {
	// Hooks/methods
	onEnter() { 
		// initialise 
		slider(-150, 50, 80, "moversTravel");
		let rellax = new Rellax(".rellax");
	}
	onLeave() { 
	}
	onEnterCompleted() { }
	onLeaveCompleted() { }
}

// export renderer
export default TravelRenderer;