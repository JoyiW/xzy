var sumState = JSON.parse(sessionStorage.getItem('sumRandom'));// 数据传递
console.log(sumState);

// var idBox=document.getElementsByClassName('id-box');
// console.log(idBox);
var idBoxc=document.getElementById('idBox');
var ib=document.getElementsByClassName('ib');
var identity=document.getElementsByClassName('identity');
var getId=document.getElementsByClassName('get-id');
// var mainBox=document.getElementById('mainBox');
// var killImg=document.getElementById('killImg');
var sure=document.getElementById('sure');


//克隆出空的节点
for (var i = 1; i < sumState.length; i++) {

	var sClone=ib[0].cloneNode(true);
	// console.log(sClone);
	idBoxc.appendChild(sClone);
}
	// console.log(mainBox);

//遍历数组和节点进行对应写入身份和数字
for (i = 0; i < sumState.length; i++) {
	getId[i].innerHTML=i+1;
	if (sumState[i].role=='killer') {
		identity[i].innerHTML="杀手";
	} else {
		identity[i].innerHTML="平民";
	}
	if (sumState[i].state == 'died') {
        identity[i].style.backgroundColor = 'rgb(131, 176, 154)';
         // killImg.style.display="block";
    }
}

// 点选身份头像
idBoxc.onclick = function (e) {
    var target = e.target;
    for (i = 0; i < sumState.length; i++) {
        identity[i].style.backgroundColor = '#f5c97b';
        if (sumState[i].state == 'died') { 
            identity[i].style.backgroundColor='rgb(131, 176, 154)';
        }
        if (target == identity[i]) {
           if (sumState[i].state == 'living') {// 如果还活着就投死
                identity[i].style.backgroundColor = 'rgb(131, 176, 154)';
            } else {
                alert('不能选择死人');
            }
        }
    }
}
// ---------------------------------------------------------------------------------------
sure.onclick = function () {
    var kNum = 0;// 还活着的杀手
    var cNum = 0;// 还活着的平民
    for (i = 0; i < sumState.length; i++) {
        if (identity[i].style.backgroundColor == 'rgb(131, 176, 154)') {
            sumState[i].state = 'died';// 把选中的角色的状态改为死亡
            if (sumState[i].date == '') {
                sumState[i].date = sessionStorage.getItem('day');// 写入数据：在第几天被杀死
            }
            if (sumState[i].style == '') {
                sumState[i].style = 'voted';
            }
            sessionStorage.setItem('sumRandom', JSON.stringify(sumState));
        }
        if (sumState[i].state == 'living' && sumState[i].role == 'killer') {
            kNum++;
        }
        if (sumState[i].state == 'living' && sumState[i].role == 'civilian') {
            cNum++;
        }
    }
    if (kNum == cNum || kNum == 0) {
        window.location.href = '游戏结果页';
    } else {
        var day = sessionStorage.getItem('day');
        day++;
        sessionStorage.setItem('day',day);
        window.location.href = '5judgeNote.html';
    }
}
