//获得数据
var sumState=JSON.parse(sessionStorage.getItem('sumRandom'));
console.log(sumState);

// var idBox=document.getElementsByClassName('id-box');
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
	idBoxc.appendChild(sClone);
}

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
         // killImg[i].style.display="block";
    }
}

// for (var i = 0; i < sumState.length; i++) {
// 	idBox[i].onclick=function () {
// 		console.log(killImg);
// 		killImg.style.display="block";
// 		identity[i].style.backgroundColor = 'rgb(131, 176, 154)';
// 	}
// }

// 点选身份头像
idBoxc.onclick = function (e) {
    var target = e.target;
    for (i = 0; i < sumState.length; i++) {
        if (sumState[i].state != 'died') { 
            identity[i].style.backgroundColor = '#f5c97b';// 重置颜色，其实也就是重置选择，不让玩家重复选择并杀死多人——from世豪师兄
        }
        if (target == identity[i]) {
            if (sumState[i].role == 'civilian') {
                identity[i].style.backgroundColor = 'rgb(131, 176, 154)';
                // killImg[i].style.display="block";
            }
            if (sumState[i].role == 'killer') {
                alert('你是杀手不能杀死本职业，请选择其他玩家杀死');
            }
            if (sumState[i].state == 'died' && sumState[i].role == 'civilian') {
                alert('当前玩家已死亡，请选择其他玩家');
            }
        }
    }
}
// console.log(idBoxc);
// ---------------------------------------------------------------------------------------
sure.onclick = function () {
    var kNum = 0;// 还活着的杀手
    var cNum = 0;// 还活着的平民
    for (i = 0; i < sumState.length; i++) {
        if (identity[i].style.backgroundColor == 'rgb(131, 176, 154)') {// console.log(identity[i].style.backgroundColor); 居然是rgb……
            sumState[i].state = 'died';// 把选中的角色的状态改为死亡
            if (sumState[i].date == '') {
                sumState[i].date = sessionStorage.getItem('day');// 写入数据：在第几天被杀死
            }
            if (sumState[i].style != 'voted') {
                sumState[i].style = 'killed';
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
        window.location.href = '5judgeNote.html';
    }
}