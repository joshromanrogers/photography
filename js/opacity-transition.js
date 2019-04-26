import Highway from "@dogstudio/highway";
import Tween from "gsap";

class Opacity extends Highway.Transition {
	in({ from, to, done }) {
		// Reset Scroll
		window.scrollTo(0, 0);

		// Animation
		Tween.fromTo(to, 0.5,
			{ opacity: 0 },
			{
				opacity: 1,
              
			}
		);
	}
      
	out({ from, done }) {
		// Animation
		Tween.fromTo(from, 0.5,
			{ opacity: 1 },
			{
				opacity: 0,
				onComplete: () => {
					// Remove Old View
					from.remove();
					done();
				}
			}
		);
	}
}
    

export default Opacity;