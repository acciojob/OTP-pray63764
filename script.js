//your JS code here. If required.
const codes = document.querrySelectorAll(".code");
code[0].focus();
codes.forEach((code, idx) => {
	code.addEventListener("keydown",(e) => {
		if(e.key >= 0 && e.key <=9){
		     codes[idx+1].focus();	
			setTimeout(() => codes[idx+1].focus(), 10);
		}else if(e.key ==="Backspace"){
			codes[idx-1].focus();
		}
	})
})