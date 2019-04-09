import Fade from "./transition.js";
import Highway from "@dogstudio/highway";

// Import Renderers
import MiscRenderer from "./misc-renderer.js";
import TravelRenderer from "./travel-renderer.js";
import ArtRenderer from "./art-renderer.js";
import MusicRenderer from "./music-renderer";


// Relate renderers to pages with the label of the `data-router-view`.
const H = new Highway.Core({
	transitions: {
		default: Fade
	},
	renderers: {
		misc: MiscRenderer,
		travel: TravelRenderer,
		art: ArtRenderer,
		music: MusicRenderer,
	  }
});
