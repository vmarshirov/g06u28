
function verify() {
    a = parseInt(document.getElementsByTagName("input")[1].value);
    b = parseInt(document.getElementsByTagName("input")[2].value);
    c = parseInt(document.getElementsByTagName("input")[3].value);

    console.log(a,b,c)

    if (a < b) {
        low = a;
        high = b;
    } else {
        low = b;
        high = a;
    }

    if (c >= low && c <= high) {
        result = " С принадлежит заданному диапазону"
        document.getElementById("result").innerText = messageText + result;
        check = true;
    } else {
        result = " С не принадлежит заданному диапазону"
        document.getElementById("result").innerText = messageText + result;
        check = false;
    }
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else { alert("есть недостатки, повторите ввод")}
}

function verify_send(){
    verify();
    send();
}

var messageText = document.getElementById("result").innerText
var result;
var check = true;

/*
const constVerify = document.getElementById("verify");
constVerify.addEventListener('click',verify)
*/

const constVerify = document.getElementById("c");
constVerify.addEventListener('keyup',verify)

const constSend = document.getElementById("send");
constSend.addEventListener('click',send)


