// Import Highway & Rellax & slider
import Highway from "@dogstudio/highway";
import { slider } from "./slider.js";

class MusicRenderer extends Highway.Renderer {
	// Hooks/methods
	onEnter() { 
		// initialise 
        slider(-150, 50, 80, "moversMusic");
	}
	onLeave() { }
	onEnterCompleted() { }
	onLeaveCompleted() { 
	}
}

// export renderer
export default MusicRenderer;