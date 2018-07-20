// 输入框值
var changedNum=document.getElementById("changedNum");
//滑块值
var rangeNum=document.getElementById("range");
//滑块加减
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
//改变输入框值后给滑块
changedNum.onchange=function () {
    rangeNum.value=changedNum.value;
    //对输入的数字进行判断,test()检测一个字符串是否匹配reg
    //符合返回true，没有返回false
    var reg=/^[0-9]+$/;
    if (reg.test(changedNum.value)) {
        if (changedNum.value>=4 && changedNum.value<=18) {
            return changedNum.value;
        } else {
            alert("请输入4-18之间的数字");
            return false;
        }
    } else {
        alert("请输入整数");
        return false;
    }
    
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
var setBtn=document.getElementById("set");  //点击设置
var option=document.getElementById("option");  //获取列表

setBtn.onclick=function () {
    var setNum=changedNum.value;    
    var killerNum=Math.floor(setNum/3);
    var civilianNum=setNum-killerNum;
    //重置节点
    while (option.hasChildNodes()) {
        option.removeChild(option.firstChild);
    }

    //添加杀手
    for(var k=1;k<=killerNum;k++){
        var lis=document.createElement('li'); 
        option.appendChild(lis).innerText="杀手"+1+"人";
        lis.style.color = '#29bde0';
    }
    for(var c=1;c<=civilianNum;c++){
        var lis=document.createElement('li'); 
        option.appendChild(lis).innerText="平民"+1+"人";
        lis.style.color = '#fbb435';
    }
    //添加li的id
    var liId=document.getElementsByTagName('li');
    for (var i = 0; i <liId.length; i++) {
        liId[i].id='li'+i;
    }
    //获取li将其变成数组存储到liArr中
    var liArr=[];
    for(var l=0;l<liId.length;l++){
        liArr.push(liId[l]);
    }

    console.log(liArr);
    //乱序排列liArr
    var result=[];
    // for(var r=0;r<setNum;r++){
    //     var ran=Math.floor(Math.random()*setNum);
    //     console.log(ran);
    //     result.push(liArr.splice(ran,1)[0]);
    //     // console.log(result);
    // };
    for(var r=0;r<setNum;r++){
        var ran=Math.floor(Math.random()*(liArr.length-r));
        result.push(liArr[ran]);
        liArr[ran]=liArr[liArr.length-r-1];
    }
    console.log(result);


    //将乱序后的数组添加到原数组中

}