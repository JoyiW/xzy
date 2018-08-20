var button=document.getElementById('btn');
// console.log(button);

var text = document.getElementsByName("uname")[0];
var password = document.getElementsByName("pwd")[0];
// console.log(text);
// console.log(password);

var span = document.getElementsByTagName("span");
// console.log(span[0]);
// console.log(span[1]);

button.onclick=function (){
    var name=text.value;
    var pwd=password.value;
    // console.log(name.length);
    // console.log(pwd.length);

    var sendData="name="+ name + "&pwd=" + pwd;
    console.log(sendData);

    if (name.length == 5 && pwd.length == 6) {
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();     
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.open("POST","/carrots-admin-ajax/a/login",true);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  
        xmlhttp.send(sendData);
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState ==4 && xmlhttp.status == 200){

                // console.log(xmlhttp.responseText);
                // console.log(JSON.parse(xmlhttp.responseText));
                var responseText = JSON.parse(xmlhttp.responseText);
                console.log(responseText);
                if (responseText.code ===0) {
                    window.open('1.html');
                } else {
                    alert("账号或密码错误，请重新输入");
                }
            }
        }
    } else if(name.length !==5 && pwd.length !== 6 ){
        span[0].innerHTML = "请输入5位数账号名";
        span[1].innerHTML = "请输入6位数密码";
    }
    if (name.length !== 5) {
        span[0].innerHTML = "请输入5位数帐户名";
    } else {
        span[0].innerHTML = "";
    }
    if (pwd.length !== 6) {
        span[1].innerHTML = "请输入6位数密码";
    } else {
        span[1].innerHTML = "";
    }
}