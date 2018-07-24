
//获得数据
var sumState=JSON.parse(sessionStorage.getItem('sumRandom'));
console.log(sumState); 
 

//查看身份，隐藏身份，传给下一个
var flopCard2=document.getElementById("flopCard2");
var flopCard1=document.getElementById("flopCard1");
var checkBtn1=document.getElementById("checkBtn1");
var checkBtn2=document.getElementById("checkBtn2");
var getId=document.getElementById("getId");
var identity=document.getElementById("identity");
var topId=document.getElementById("topId");
var clickNum = 1;
flopCard2.style.display="none"; 
checkBtn2.style.display="none";

topId.innerHTML=clickNum;
getId.innerHTML=clickNum;
checkBtn1.onclick=function() {
	flopCard1.style.display="none"; 
	checkBtn1.style.display="none";
	flopCard2.style.display="block";
	checkBtn2.style.display="block";
	
	passId.innerHTML=clickNum+1;

if (clickNum<=sumState.length) {
	if (clickNum<sumState.length) {
		if (sumState[clickNum-1].role=='killer') 
		{
			identity.innerHTML="杀手";
		} else if(sumState[clickNum-1].role=='civilian')
		{
			identity.innerHTML="平民";
		}
	}else{
		if (sumState[clickNum-1].role=='killer') 
		{
			identity.innerHTML="杀手";
		} else if(sumState[clickNum-1].role=='civilian')
		{
			identity.innerHTML="平民";
		}
		checkBtn2.innerHTML="法官查看";

	}
}
console.log(clickNum);
clickNum++;
}
checkBtn2.onclick=function () {
	flopCard1.style.display="block";
	checkBtn1.style.display="block";
	flopCard2.style.display="none";
	checkBtn2.style.display="none";
	if (clickNum<=sumState.length) {
		topId.innerHTML=clickNum;
		getId.innerHTML=clickNum;
		passId.innerHTML=clickNum;
	} else{
		flopCard1.style.display="none"; 
		checkBtn1.style.display="none";
		topId.style.display="none";
		window.location.href="4judgeCheck.html";
	}

}
