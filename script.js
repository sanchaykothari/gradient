var h3 = document.querySelector("h3");
var input1 = document.getElementById("inp1");
var input2 = document.getElementById("inp2");
var bg = document.getElementById("getcolor");
var primarycolor = bg.style.backgroundImage;
h3.textContent = primarycolor + ";";
function colorPicker(){
	bg.style.backgroundImage = "linear-gradient(to right, "+ input1.value +" , " + input2.value +")";
	h3.textContent = bg.style.backgroundImage + ";";
}
input1.addEventListener("input",colorPicker);
input2.addEventListener("input",colorPicker);
