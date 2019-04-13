// Highway
import Highway from "@dogstudio/highway";
// GSAP
import Tween from "gsap";

// Fade
class IndexToMusic extends Highway.Transition {
	in({ from, to, done }) {
		// Reset Scroll
        // window.scrollTo(0, 0);
        console.log('indextomusic');

		// Animation
		Tween.fromTo(to, 1,
			{ left: "-100%" },
			{
				left: "0%",
				onComplete: done
			}
		);

		// Animation
		Tween.fromTo(from, 1,
			{ left: "-100%" },
			{
				left: "0%",
				onComplete: () => {
					// Set New View in DOM Stream
					// to.style.position = "static";

					// Remove Old View
					from.remove();
				}
			}
		);
	}

	out({ done }) {
		done();
	}
}

export default IndexToMusic;