function startFlash() {
	var square=document.getElementsByClassName("square");
	var squareArray=Array.prototype.slice.call(square,0);
	for (var i = 0; i < 9; i++) {
		squareArray[i].style.backgroundColor="orange";
	}
	var randomArray = new Array();
	for(i=0;i<3;i++){
		var num=Math.floor(Math.random()*squareArray.length);
		randomArray.push(squareArray[num]);
		squareArray.splice(num,1);
	}
	function randomColor() {
		var hex=Math.floor(Math.random()*16777216).toString(16);
		while(hex.length<6){
			hex="0"+hex;
		}
		return "#"+hex;
	}
	for (var i = 0; i < 3; i++) {
		randomArray[i].style.backgroundColor=randomColor();
	}
}
var mySet;
function startButton() {
	clearInterval(mySet);
	mySet=setInterval(startFlash,1000);
}
function stopButton() {
	var square=document.getElementsByClassName("square");
	var squareArray=Array.prototype.slice.call(square,0);
	for(i=0;i<9;i++){
		squareArray[i].style.backgroundColor="orange";
	}
	clearInterval(mySet);
}