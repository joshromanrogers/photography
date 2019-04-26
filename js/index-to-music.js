import Highway from "@dogstudio/highway";
import Tween from "gsap";

class IndexToMusic extends Highway.Transition {
	in({ from, to, done }) {
	
		// Animation, slide in
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