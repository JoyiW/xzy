//获得数据
var sumState=JSON.parse(sessionStorage.getItem('sumRandom'));
// console.log(sumState);

var idBox=document.getElementsByClassName('id-box');
var identity=document.getElementsByClassName('identity');
var getId=document.getElementsByClassName('get-id');
var mainBox=document.getElementById('mainBox');

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

}