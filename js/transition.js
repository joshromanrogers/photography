import Highway from "@dogstudio/highway";
import {
	TimelineLite
} from "gsap";

class Fade extends Highway.Transition {

	in ({
		from,
		to,
		done
	}) {
		// responsible for page coming in
		const tl = new TimelineLite();
		tl.fromTo(to, 0.5, {
			left: "-100%",
		}, {
			left: "0%",
			
		})
			.fromTo(to, 0.5, {
				height: "90vh"
			}, {
				height: "90vh",
				top: "100%",
				onComplete: function () {
					from.remove();
					done();
				}
			});
	}

	out({
		from,
		done
	}) {
		// responsible for page that's leaving
		done();
	}

}

export default Fade;