// Import Highway & Rellax & slider
import Highway from '@dogstudio/highway';
import Rellax from 'rellax';
import { slider } from './slider.js';

class MiscRenderer extends Highway.Renderer {
	// Hooks/methods
	onEnter() {
		// initialise
		slider(-150, 50, 80, 'moversMisc');

		let rellaxMisc = new Rellax('.rellax', {
			speed: -2,
			center: false,
			wrapper: null,
			round: true,
			vertical: false,
			horizontal: true,
		});

		// on scroll, change the colour of the background (travel-container class)
		const [redX, greenX, blueX] = [260, 160, 160];
		let miscContent = document.querySelector(".misc-content");


		window.addEventListener("scroll", () => {
			let y = 1 + (window.scrollX || window.pageXOffset) / 150;
			y = y < 1 ? 1 : y; // ensure y is always >= 1 (due to Safari's elastic scroll)
			const [rX, gX, bX] = [redX / y, greenX / y, blueX / y].map(Math.round);
			miscContent.style.backgroundColor = `rgb(${rX}, ${gX}, ${bX})`;
		});
	}
	onLeave() {
		// End Rellax and reset parallax elements to their original positions
		// rellaxMisc.destroy();
	}
	onEnterCompleted() {}
	onLeaveCompleted() {}
}

// export renderer
export default MiscRenderer;
