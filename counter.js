// Hornbills Sighted
let counterPlusElem = document.getElementById('counter-plus');
let counterDisplayElem = document.getElementById('counter-display');
let contect = counterDisplayElem.innerHTML;

let count = 0;
if (localStorage.getItem("count") !=null) {
	count = localStorage.getItem("count");
};


updateDisplay();

counterPlusElem.addEventListener("click",()=>{
	count++;
	updateDisplay();
	localStorage.setItem("count",count);
});

counterReset.addEventListener("click",()=>{
	count = 0;
	updateDisplay();
	localStorage.setItem("count",count);
});

function updateDisplay(){
	counterDisplayElem.innerHTML = contect + count.toString();
};
console.log('Aahan is dumb')