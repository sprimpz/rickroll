//Current Time
let button = document.getElementById('time')

button.addEventListener("click",()=>{
	document.getElementById('target').innerHTML = Date();
});