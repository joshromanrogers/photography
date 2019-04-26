import Highway from "@dogstudio/highway";
import { slider } from "./slider.js";

class IndexRenderer extends Highway.Renderer {
	onEnter() {
		// get the link buttons moving
		slider(-400, 0, 80, "movers");
		slider(-400, 0, 80, "movers2");
		slider(-400, 0, 80, "movers3");
		slider(-400, 0, 80, "movers4");

		let art = document.querySelector(".art-img");
		let music = document.querySelector(".music-img");
		let travel = document.querySelector(".travel-img");
		let misc = document.querySelector(".misc-img");
		let homeContent = document.querySelector(".home-content");

		art.style.opacity = 0;
		music.style.opacity = 0;
		travel.style.opacity = 0;
		misc.style.opacity = 0;

		// when moused over, image appears in center of screen with a border colour
		// and specific background colour
		let show = (image, bgColour, borderColour) => {
			image.style.opacity = 1;
			homeContent.style.backgroundColor = bgColour;
			image.style.borderColor = borderColour;
		};

		// when mouse leaves, page reverts to original appearance
		let hide = (image) => {
			image.style.opacity = 0;
			homeContent.style.backgroundColor = "cornsilk";
		};

		// hooking up links to the 2 above functions
		document.querySelector(".art").addEventListener("mouseover", () => show(art, "brown", "green"));
		document.querySelector(".art").addEventListener("mouseout", () => hide(art));

		document.querySelector(".misc").addEventListener("mouseover", () => show(misc, "pink", "purple"));
		document.querySelector(".misc").addEventListener("mouseout", () => hide(misc));

		document.querySelector(".travel").addEventListener("mouseover", () => show(travel, "green", "yellow"));
		document.querySelector(".travel").addEventListener("mouseout", () => hide(travel));

		document.querySelector(".music").addEventListener("mouseover", () => show(music, "red", "orange"));
		document.querySelector(".music").addEventListener("mouseout", () => hide(music));
        
	}
	onLeave() {
	}
	onEnterCompleted() {}
	onLeaveCompleted() {}
}

// export renderer
export default IndexRenderer;
