// Import Highway
import Highway from "@dogstudio/highway";

// Import Transitions
import Fade from "./fade.js";
import IndexToMisc from "./index-to-misc.js";
import IndexToTravel from "./index-to-travel.js";
import IndexToArt from "./index-to-art.js";
import IndexToMusic from "./index-to-music.js";

// Import Renderers
import IndexRenderer from "./index-renderer.js";
import MiscRenderer from "./misc-renderer.js";
import TravelRenderer from "./travel-renderer.js";
import ArtRenderer from "./art-renderer.js";
import MusicRenderer from "./music-renderer.js";

// Relate renderers to pages with the label of the `data-router-view`.
const H = new Highway.Core({
	// animations the occur when there's a transition to another page
	transitions: {
		default: Fade,
		contextual: {
			indexToMisc: IndexToMisc,
			indexToTravel: IndexToTravel,
			indexToArt: IndexToArt,
			indexToMusic: IndexToMusic,
		},
	},
	// holds all js that is to be executed on the page the user is entering
	renderers: {
		misc: MiscRenderer,
		travel: TravelRenderer,
		art: ArtRenderer,
		music: MusicRenderer,
		home: IndexRenderer,
	},
});
