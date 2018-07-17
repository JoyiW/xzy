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

setBtn.onclick = function () {
    //实时获得填入的人数
    var setNum=changedNum.value;
    //每次点击重置数组对象
    var killer=new Array();
    var civilian=new Array();
    function obj(state,identify) {
        this.state=state;
        this.role=identify;
        this.date='';
        this.style='';
    }

    //重置节点
    while (option.hasChildNodes()) {
        option.removeChild(option.firstChild);
    }
    
    //根据分配规则在数组中添加对象
    if (setNum == 4 || setNum == 5) {
        for (var i = 0; i < 1; i++) {
            killer[i] = new obj('living', "killer");
        }
        for (var i = 0; i < setNum - 1; i++) {
            civilian[i] = new obj('living', "civilian");
        }
    } else if (setNum > 5 && setNum < 9) {
        for (var i = 0; i < 2; i++) {
            killer[i] = new obj('living', "killer");
        }
        for (var i = 0; i < setNum - 2; i++) {
            civilian[i] = new obj('living', "civilian");
        }
    } else if (setNum >= 9 && setNum <= 11) {
        for (var i = 0; i < 3; i++) {
            killer[i] = new obj('living', "killer");
        }
        for (var i = 0; i < setNum - 3; i++) {
            civilian[i] = new obj('living', "civilian");
        }
    } else if (setNum >= 12 && setNum <= 15) {
        for (var i = 0; i < 4; i++) {
            killer[i] = new obj('living', "killer");
        }
        for (var i = 0; i < setNum - 4; i++) {
            civilian[i] = new obj('living', "civilian");
        }
    } else if (setNum >= 16 && setNum <= 18) {
        for (var i = 0; i < 5; i++) {
            killer[i] = new obj('living', "killer");
        }
        for (var i = 0; i < setNum - 5; i++) {
            civilian[i] = new obj('living', "civilian");
        }
    }
    
    var sumArr=killer.concat(civilian);

    //数组乱序
    realArr=Array.prototype.slice.call(sumArr,0);
    var sumRandom=new Array();
    for(i=0;i<sumArr.length;i++){
        var num=Math.floor(Math.random()*realArr.length);
        sumRandom.push(realArr[num]);
        realArr.splice(num,1);
    }
    
    // 存储数据
    sessionStorage.sumRandom = JSON.stringify(sumRandom); 
    
    //实现随机分配
    for (i = 0; i < sumRandom.length; i++) {
        var li = document.createElement('li');
        if (sumRandom[i].role == 'killer') {
            option.appendChild(li);
            li.innerHTML = "杀手 1 人";
            li.style.color = '#29bde0';
        } else if (sumRandom[i].role == 'civilian') {
            option.appendChild(li);
            li.innerHTML = "平民 1 人";
            li.style.color = '#fbb435';
        }
    }
}