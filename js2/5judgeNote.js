//获得数据
var sumState=JSON.parse(sessionStorage.getItem('sumRandom'));
console.log(sumState);


var stepDay=document.getElementById('day');//天数
var kill=document.getElementsByClassName('kill');//杀手杀人
var lastWorld=document.getElementsByClassName('lastworld');//亡灵发表遗言
var speak=document.getElementsByClassName('speak');//玩家依次发言
var referendum=document.getElementsByClassName('referendum');// 全民投票
var gameOver=document.getElementsByClassName('game-over');//游戏结束
var judgeCheck=document.getElementById("judgeCheck");//法官日志按钮
var triangle = document.getElementsByClassName('triangle');//三角形

var fsm = new StateMachine({// 生成实例
    transitions: [// 创建生命周期
        { name: 'trans1', from: 'none', to: 'skill' },// 绑定事件，设定状态转化
        { name: 'trans2', from: 'skill', to: 'slastWorld' },
        { name: 'trans3', from: 'slastWorld', to: 'sspeak' },
        { name: 'trans4', from: 'sspeak', to: 'sreferendum' },
        { name: 'trans5', from: 'sreferendum', to: 'none' },
        { name: 'goto', from: '*', to: function (state) { return state } }
    ],
    methods: {
        onTrans1: function () {
            var state1 = fsm.state;// 保存状态
            sessionStorage.setItem('state1', state1);
            window.location.href = '6killPeople.html';
        },
        onTrans2: function () {
            var state2 = fsm.state;// 保存状态
            sessionStorage.setItem('state2', state2);
        },
        onTrans3: function () {
            var state3 = fsm.state;// 保存状态
            sessionStorage.setItem('state3', state3);
        },
        onTrans4: function () {
            referendum[0].style.backgroundColor = 'gray';
            triangle[3].style.borderRightColor = 'gray';
            var state4 = fsm.state;// 保存状态
            sessionStorage.setItem('state4', state4);
            window.location.href = '7referendum.html';
        },     
    }
});
// ------------------------------------------------------------------------------------------
if (sessionStorage.getItem('day') == null) {// 本地存储中还未存储天数
    var day = 1;// 声明天数
    sessionStorage.setItem('day', day);
} else {
    var day = sessionStorage.getItem('day');// 本地存储中已经存储了天数
}
stepDay.innerHTML = day; // 根据当前天数，把天数写入页面
console.log(day);
// --------------------------------------------------------------------------------------
$('.kill').click(function () {// 杀手杀人
    fsm.trans1();
});
if (sessionStorage.getItem('state1') == 'skill') {
    kill[0].style.backgroundColor = 'gray';
    triangle[0].style.borderRightColor = 'gray';
    fsm.goto('skill');
}

$('.lastworld').click(function () {// 亡灵发表遗言
    fsm.trans2();
    alert('亡灵发表遗言');
    lastWorld[0].style.backgroundColor = 'gray';
    triangle[1].style.borderRightColor = 'gray';
    fsm.goto('slastWorld');
});

$('.speak').click(function () {// 玩家依次发言
    fsm.trans3();
    alert('玩家依次发言');
    speak[0].style.backgroundColor = 'gray';
    triangle[2].style.borderRightColor = 'gray';
    fsm.goto('sspeak');
});

$('.referendum').click(function () {// 全民投票
    fsm.trans4();
});
if (sessionStorage.getItem('state4') == 'sreferendum') {
    fsm.goto('sreferendum');
    fsm.goto('none');
}

sessionStorage.removeItem('state1');
sessionStorage.removeItem('state2');
sessionStorage.removeItem('state3');
sessionStorage.removeItem('state4');

console.log(fsm.state);// 打印状态
// ---------------------------------------------------------------------------------------
gameOver[0].onclick = function () {// 结束游戏
    window.location.href = '1index.html';
    sessionStorage.clear();
}
judgeCheck.onclick=function() {
	window.location.href='4judgeCheck.html';
	
	// sessionStorage.clear();
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //杀手杀人
// killPeople.onclick=function () {
// 	window.location.href="6killPeople.html";	
// }
// //游戏结束
// gameOver.onclick=function () {
// 	var con=confirm("本轮游戏是否已结束？");
// 	if (con==true) {
// 		// window.location.href="#";
// 		alert('游戏结果');
// 	} 
// }
// //法官日志
// judgeCheck.onclick=function () {
// 	window.location.href="4judgeCheck.html";
// 	var startGame=document.getElementById('startGame');
// 	console.log(startGame);
// 	startGame.innerHTML="返回";
// }