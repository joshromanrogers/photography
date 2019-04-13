// Highway
import Highway from "@dogstudio/highway";
// GSAP
import Tween from "gsap";

// Fade
class Opacity extends Highway.Transition {
	in({ from, to, done }) {
		// Reset Scroll
		window.scrollTo(0, 0);

		// Animation
		Tween.fromTo(to, 0.5,
            { opacity: 0 },
            {
              opacity: 1,
              onComplete: done
            }
          );
        }
      
        out({ from, done }) {
          // Animation
          Tween.fromTo(from, 0.5,
            { opacity: 1 },
            {
              opacity: 0,
              onComplete: done
            }
          );
        }
}
    

export default Opacity;