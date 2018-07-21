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
    // var killerNum=Math.floor(setNum/3);
    // var civilianNum=setNum-killerNum;
    //重置节点
    // while (option.hasChildNodes()) {
    //     option.removeChild(option.firstChild);
    // }

    //添加杀手
//     for(var k=1;k<=killerNum;k++){
//         var lis=document.createElement('li'); 
//         option.appendChild(lis).innerText="杀手1人";
//         lis.style.color = '#29bde0';
//     }
//     for(var c=1;c<=civilianNum;c++){
//         var lis=document.createElement('li'); 
//         option.appendChild(lis).innerText="平民1人";
//         lis.style.color = '#fbb435';
//     }
//     //添加li的id
//     var liId=document.getElementsByTagName('li');
//     liArr= Array.prototype.slice.call(liId, 0);
//     for(var i=0;i<liId.length;i++){
//         liId[i].id='li'+i;
//     }

//     console.log(liArr);
//     //乱序排列liArr
//     var result=[];
//     for(var r=0;r<liArr.length;r++){
//         var ran=Math.floor(Math.random()*(liArr.length-r));
//         result.push(liArr[ran]);
//         liArr[ran]=liArr[liArr.length-r-1];
//     }
//     console.log(result);


// 每次点击重置数组对象
    var killerNum=Math.floor(setNum/3);
    var civilianNum=setNum-killerNum;
    var killer=[],civilian=[];
    function obj(state, identify) {
            this.state = state;
            this.role = identify;
            this.date = '';
            this.style = '';
        }

//重置节点
    while (option.hasChildNodes()) {
        option.removeChild(option.firstChild);
    }
//根据分配规则在数组中添加对象
    for (var i = 0; i <killerNum; i++) {
        killer[i]=new obj('living','killer');
    }
    
    for(var j=0; j<civilianNum;j++){

        civilian[j]=new obj('living','civilian');
    }

    var sumArr = killer.concat(civilian);
// 数组乱序
    realArr = Array.prototype.slice.call(sumArr, 0);
    var sumRandom = new Array();
    for (i = 0; i < sumArr.length; i++) {
        var num = Math.floor(Math.random() * realArr.length);
        sumRandom.push(realArr[num]);
        realArr.splice(num, 1);
    }
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