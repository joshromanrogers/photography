// Import Highway & Rellax & slider
import Highway from '@dogstudio/highway';
import Rellax from 'rellax';
import { slider } from './slider.js';

class MiscRenderer extends Highway.Renderer {
	// Hooks/methods
	onEnter(e) {

		// make back button invisible until page has come in
		let movBack = document.querySelector(".movBack");
		movBack.style.opacity = 0;

		// initialise back button movement + rellax
		slider(-150, 50, 80, 'moversMisc');
		let rellax = new Rellax(".rellax");

		
		// on scroll, change the colour of the background (misc-container class)
		const [redY, greenY, blueY] = [95,158,160];
		let miscContent = document.querySelector(".travel-content");

		window.addEventListener("scroll", () => {
			let y = 1 + (window.scrollY || window.pageYOffset) / 300;
			y = y < 1 ? 1 : y; // ensure y is always >= 1 (due to Safari's elastic scroll)
			const [rY, gY, bY] = [redY/y, greenY/y, blueY/y].map(Math.round);
			miscContent.style.backgroundColor = `rgb(${rY}, ${gY}, ${bY})`;
		});
	}
	onLeave() {
		// End Rellax and reset parallax elements to their original positions
		// rellaxMisc.destroy();
	}
	onEnterCompleted() {
		// make back button visible
		let movBack = document.querySelector(".movBack");
		movBack.style.opacity = 1;
	}
	onLeaveCompleted() {}
}

// export renderer
export default MiscRenderer;
