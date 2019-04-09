// Import Highway & Rellax & slider
import Highway from "@dogstudio/highway";
import Rellax from "rellax";
import { slider } from "./slider.js";

class MiscRenderer extends Highway.Renderer {
	// Hooks/methods
	onEnter() { 
		// initialise 
		let rellaxMisc = new Rellax(".rellax", {
			speed: -2,
			center: false,
			wrapper: null,
			round: true,
			vertical: false,
			horizontal: true
		});
		slider(-150, 50, 80, "moversMisc");
	}
	onLeave() { 
		// End Rellax and reset parallax elements to their original positions
		// rellaxMisc.destroy();

	}
	onEnterCompleted() { }
	onLeaveCompleted() { 
	}
}

// export renderer
export default MiscRenderer;