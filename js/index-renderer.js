// Import Highway & Slider
import Highway from "@dogstudio/highway";
import { slider } from "./slider.js";

class IndexRenderer extends Highway.Renderer {
	// Hooks/methods
	onEnter() {

        slider(-150, 50, 80, "movers");
slider(-150, 50, 80, "movers2");
slider(-150, 50, 80, "movers3");
slider(-150, 50, 80, "movers4");

		let art = document.querySelector(".art-img");
		let music = document.querySelector(".music-img");
		let travel = document.querySelector(".travel-img");
        let misc = document.querySelector(".misc-img");

        art.style.opacity = 0;
        music.style.opacity = 0;
        travel.style.opacity = 0;
        misc.style.opacity = 0;
        
        
		let body = document.getElementsByTagName("BODY")[0];
		let h1 = document.getElementsByTagName("H1")[0];

		let show = (image, bgColour, borderColour) => {
			h1.style.opacity = 1;
			image.style.opacity = 1;
			body.style.backgroundColor = bgColour;
			image.style.borderColor = borderColour;
		};

		let hide = (image) => {
			image.style.opacity = 0;
			body.style.backgroundColor = "white";
			h1.style.opacity = 1;
		};

		document.querySelector(".art").addEventListener("mouseover", () => show(art, "brown", "green"));
		document.querySelector(".art").addEventListener("mouseout", () => hide(art));

		document.querySelector(".misc").addEventListener("mouseover", () => show(misc, "pink", "purple"));
		document.querySelector(".misc").addEventListener("mouseout", () => hide(misc));

		document.querySelector(".travel").addEventListener("mouseover", () => show(travel, "green", "yellow"));
		document.querySelector(".travel").addEventListener("mouseout", () => hide(travel));

		document.querySelector(".music").addEventListener("mouseover", () => show(music, "red", "orange"));
        document.querySelector(".music").addEventListener("mouseout", () => hide(music));
        
		console.log("entered index");
	}
	onLeave() {
	}
	onEnterCompleted() {}
	onLeaveCompleted() {}
}

// export renderer
export default IndexRenderer;
