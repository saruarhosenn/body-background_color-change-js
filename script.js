//=============================
// Body Style
//=============================
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.minHeight = "100vh";

//======================================
// Second btn style 
// It is a very. very useful
//======================================
function redColor() {
	document.body.style.backgroundColor = "red";
};

//======================================
// Third btn style
// It is a very. very useful
//======================================
function greenColor() {
	document.body.style.backgroundColor = "green";
};
const greeBtn = document.getElementById("btn-green");
greeBtn.onclick = greenColor;

//======================================
// Four btn style
//======================================
const blueBtn = document.getElementById("btn-blue");
blueBtn.onclick = function blueColor() {
	document.body.style.backgroundColor = "blue";
};

//======================================
// Five btn style
// Use addEventListener on a Button
//======================================
const yellowBtn = document.getElementById("btn-yellow");

function yellowColor() {
	document.body.style.backgroundColor = "yellow";
};
yellowBtn.addEventListener("click", yellowColor);

//======================================
// Six btn style
// Use addEventListener on a Button
//======================================
const fuchsiaBtn = document.getElementById("btn-fuchsia");
fuchsiaBtn.addEventListener("click", function fuchsiaColor() {
	document.body.style.backgroundColor = "fuchsia";
});

//======================================
// Seven btn style
// Use addEventListener on a Button
// It is a very. very useful
//======================================
document.getElementById("btn-white").addEventListener("click", function whiteColor() {
	document.body.style.backgroundColor = "white";
});

//==========================
// Button Style
//==========================
const btns = document.getElementsByClassName("btn");
for (const clickBtn of btns) {
	clickBtn.style.backgroundColor = "#2c2c54";
	clickBtn.style.color = "#FFFFFF";
	clickBtn.style.padding = "10px 20px";
	clickBtn.style.fontSize = "16px";
	clickBtn.style.margin = "0px 5px";
	clickBtn.style.border = "0";
	clickBtn.style.outline = "0";
	clickBtn.style.cursor = "pointer";
	clickBtn.style.borderRadius = "3px";
	clickBtn.setAttribute("title", "Color Change Button");
};
