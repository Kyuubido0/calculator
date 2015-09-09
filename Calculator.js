/* Calculate the '+', '-', '/', '%', '*' Functions */

function c(val) {
	document.getElementById("d").value = val;
}
function v(val) {
	document.getElementById("d").value += val;
}

/* Power */

function pow() {
	var getValue = document.getElementById("d").value;
	document.getElementById("d").value = Math.pow(getValue, 2);
}

/* Sqrt */

function sqrt() {
	var getValue = document.getElementById("d").value;
	document.getElementById("d").value = Math.sqrt(getValue);
}

/* Natural Log */

function log() {
	var getValue = document.getElementById("d").value;
	document.getElementById("d").value = Math.log(getValue);
}

/* Tagent */ 

function tan() {
	var getValue = document.getElementById("d").value;
	document.getElementById("d").value = Math.tan(getValue);
}

/* Sinus */

function sin() {
	var getValue = document.getElementById("d").value;
	document.getElementById("d").value = Math.sin(getValue);
}

/* Cosinus */

function cos() {
	var getValue = document.getElementById("d").value;
	document.getElementById("d").value = Math.cos(getValue);
}

/* Add PI */

function PI() {
	var getValue = document.getElementById("d").value;
	document.getElementById("d").value = Math.PI(getValue);
}

/* Add E */

function enat() {
	var getValue = document.getElementById("d").value;
	document.getElementById("d").value = Math.E(getValue);
}

/* Factorial */

function factorial(val) { 
	if (val <= 1) return 1; 
	return val * factorial(val - 1); 
} 


/* Equal */ 

function e() { 
	try  { 
		c(eval(document.getElementById("d").value)) 
	} 
	catch(e) {
		c('Error') 
	} 
}

