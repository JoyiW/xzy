// 输入框，滑块
var changedNum=document.getElementById("changedNum");
var rangeNum=document.getElementById("range");

var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
changedNum.onchange=function () {
    rangeNum.value=changedNum.value;
    if (changedNum.value < 4 || changedNum.value > 18) {
        alert("请输入4-18之间的数字");
    }
    // console.log(rangeNum.value);
}
rangeNum.onchange=function () {
    changedNum.value=rangeNum.value;   
}
btn1.onclick=function () {
    rangeNum.value--;
    changedNum.value=rangeNum.value;
}
btn2.onclick=function () {
    rangeNum.value++;
    changedNum.value=rangeNum.value;
}

//设置杀手，平民数量
var setBtn=document.getElementById("set");
var option=document.getElementById("option");

setBtn.onclick=function () {
    //实时获得填入的人数
    var setNum=changedNum.value;
    //每次点击重置数组对象
    var killer=new Array();
    var civilian=new Array();
    
}