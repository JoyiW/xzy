//获得数据
var sumState=JSON.parse(sessionStorage.getItem('sumRandom'));
// console.log(sumState);

var mainBox=document.getElementById('mainBox');
var idBox=document.getElementsByClassName('id-box');
var getId=document.getElementsByClassName('get-id');
var identity=document.getElementsByClassName('identity');

//克隆出空的节点
for (var i = 1; i < sumState.length; i++) {

	var sClone=idBox[0].cloneNode(true);
	// console.log(sClone);
	mainBox.appendChild(sClone);
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
    }
}