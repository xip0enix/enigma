/*    _____ _                      
//   |_   _(_)_ __  ___ _ _ 
//     | | | | '  \/ -_) '_|
//     |_| |_|_|_|_\___|_|  
*/ 
window.onload = displayClock();
function displayClock() {

	var d = new Date();
	var min = (mins = ('0' + d.getMinutes()).slice(-2));
	var hh = d.getHours();
	var ampm = '';

	document.getElementById('hour').innerText = hh;
	document.getElementById('separator').innerHTML = ' : ';
	document.getElementById('minutes').innerText = min + ampm;

	setTimeout(displayClock, 1000);
}
