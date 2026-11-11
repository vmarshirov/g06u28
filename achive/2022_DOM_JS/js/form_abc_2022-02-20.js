function calculate() {
    var a = document.getElementsByTagName("input")[1].value
    var b = document.getElementsByTagName("input")[2].value
    var c = document.getElementsByTagName("input")[3].value
    console.log(a)

    if (a < b) {
        var low = parseInt(a);
        var high = parseInt(b);
    } else {
        var low = parseInt(b);
        var high = parseInt(a);
    }

    if (parseInt(c) >= low && parseInt(c) <= high) {
        result = "c принадлежит заданному промежутку"
        document.getElementById("result").innerText = messageText + result;
        check = true;
    } else {
        result = "c не принадлежит заданному промежутку"
        document.getElementById("result").innerText = messageText + result;
        check = false;
    }
}

function send() {
    if (check) {
        condition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('condition')[0].value = condition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else { alert("есть недостатки, повторите ввод")}
}

function calculate_send(){
    calculate();
    send();
}

var messageText = document.getElementById("result").innerText
var result;
var check = true;
const constCalculate = document.getElementById("calculate");
constCalculate.onclick = calculate;
const constSend = document.getElementById("send");
constSend.onclick =send;
// constSend.onclick = calculate_send;

