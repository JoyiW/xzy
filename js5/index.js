// js写法
// var button=document.getElementById('btn');
// var text = document.getElementsByName("name")[0];
// var password = document.getElementsByName("pwd")[0];
// var span = document.getElementsByTagName("span");
// button.onclick=function (){
//     var name=text.value;
//     var pwd=password.value;
//     var sendData="name="+ name + "&pwd=" + pwd;
//     console.log(sendData);

//     if (name.length == 5 && pwd.length == 6) {
//         var xmlhttp;
//         if (window.XMLHttpRequest) {
//             xmlhttp = new XMLHttpRequest();     
//         } else {
//             xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//         }

//         xmlhttp.open("POST","/carrots-admin-ajax/a/login",true);
//         xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//         xmlhttp.send(sendData);
//         xmlhttp.onreadystatechange = function(){
//             if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
//                 var responseText = JSON.parse(xmlhttp.responseText);
//                 console.log(responseText);
//                 if (responseText.code ===0) {
//                     window.open('1.html');
//                 } else {
//                     alert("账号或密码错误，请重新输入");
//                 }
//             }
//         }
//     } else if(name.length !==5 && pwd.length !== 6 ){
//         span[0].innerHTML = "请输入5位数账号名";
//         span[1].innerHTML = "请输入6位数密码";
//     }
//     if (name.length !== 5) {
//         span[0].innerHTML = "请输入5位数帐户名";
//     } else {
//         span[0].innerHTML = "";
//     }
//     if (pwd.length !== 6) {
//         span[1].innerHTML = "请输入6位数密码";
//     } else {
//         span[1].innerHTML = "";
//     }
// }

// jq写法

function runAjax(type, url, data) {// 带形参的封装的函数
        var type = type.toUpperCase();// 把传入的类型转化为大写
        $.ajax ({
            async: true,
            cache: true,
            type: type,
            url: url,
            data: data,
            dataType: "JSON",
            contentType: "application/x-www-form-urlencoded",
            success: function good(getDate) {
                console.log(getDate);
                if (getDate.code === 0) {
                    window.open('1.html');
                } else {
                    alert("帐号或密码错误，请重新输入");
                }
            }
        })
    }
    
    $(document).ready(function () {
        $("#btn").click(function () {// 点击事件
            var name = document.getElementsByName("name")[0];
            var pwd = document.getElementsByName("pwd")[0];
            var span = document.getElementsByTagName("span");
            if (name.value.length == 5 && pwd.value.length == 6) {
                var data = $("form").serialize();
                console.log(data);
                runAjax("post", "/carrots-admin-ajax/a/login", data);
            } else if (name.value.length !== 5 && pwd.value.length !== 6) {
                span[0].innerHTML = "请输入5位数帐户名";
                span[1].innerHTML = "请输入6位数密码";
            }
            if (name.value.length !== 5) {
                span[0].innerHTML = "请输入5位数帐户名";
            } else {
                span[0].innerHTML = "";
            }
            if (pwd.value.length !== 6) {
                span[1].innerHTML = "请输入6位数密码";
            } else {
                span[1].innerHTML = "";
            }
        })
    })



