//your JS code here. If required.
const codes = document.querrySelectorAll(".code");
code[0].focus();
codes.forEach((code, idx) => {
	code.addEventListener("keydown",(e) => {
		console.log(e.key);
	})
})