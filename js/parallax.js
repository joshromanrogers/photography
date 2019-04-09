import Rellax from "rellax";

let rellax = new Rellax(".rellax");

let rellaxMisc = new Rellax(".rellax", {
	speed: -2,
	center: false,
	wrapper: null,
	round: true,
	vertical: false,
	horizontal: true
});

export default rellax;