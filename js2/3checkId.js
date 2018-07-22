//获得数据
var sumState=JSON.parse(sessionStorage.getItem('sumRandom'));
// console.log(sumState); 

//查看身份，隐藏身份，传给下一个
var flopCard2=document.getElementById("flopCard2");
var flopCard1=document.getElementById("flopCard1");
var checkBtn1=document.getElementById("check-btn1");
var checkBtn2=document.getElementById("check-btn2");
flopCard2.style.display="none"; 
checkBtn2.style.display="none";
function checkId() {
	flopCard1.style.display="none"; 
	checkBtn1.style.display="none";
	flopCard2.style.display="block";
	checkBtn2.style.display="block";
}
function hideId() {
	flopCard1.style.display="block";
	checkBtn1.style.display="block";
	flopCard2.style.display="none";
	checkBtn2.style.display="none";
}
