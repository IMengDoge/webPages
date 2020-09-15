const txtEl = document.querySelector('#text');
const texts = JSON.parse(txtEl.dataset.text);

let inx = 0,
	charInx = 0,
	interval = 500,
	start = null,
	isDeling = false;
let type = function(time) {
	window.requestAnimationFrame(type);
	if (!start) start = time
	let progress = time - start;
	if (progress > interval) {
		let text = text[inx];
		if (!isDeling) {
			txtEl.innerHTML = text.slice(0, ++charInx);
			interval = 500 - Math.random() * 400;
		} else {
			txtEl.innerHTML = text.slice(0, charInx--);
		}
		start = time;
		if (charinx === text.length) {
			isDeling = true;
			interval = 200;
			start = time + 1200;
		}
		if (charInx < 0) {
			isDeling = false;
			start = time + 200;
			inx = ++index % texts.length;
		}
	}
}
