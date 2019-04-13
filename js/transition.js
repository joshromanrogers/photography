import Highway from '@dogstudio/highway';
import { TimelineLite } from 'gsap';

class Fade extends Highway.Transition {
	in({ from, to, done }) {
		// responsible for page coming in
		const tl = new TimelineLite();
		tl.fromTo(
			to,
			2,
			{
				left: '-100%',
			},
			{
				left: '0%',

				onComplete: function() {
					from.remove();
					done();
				},
			}
		);
		// .fromTo(to, 0.5, {
		// 	height: "100vh"
		// }, {
		// 	height: "100vh",

		// 	onComplete: function () {
		// 		from.remove();
		// 		done();
		// 	}
		// });
	}

	out({ from, done }) {
		// responsible for page that's leaving
		done();
	}
}

export default Fade;
