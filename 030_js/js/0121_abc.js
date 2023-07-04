function verify() {
    console.log("a, b, c")
    let a = parseInt(elementA.value);
    let b = parseInt(elementB.value);
    let c = parseInt(elementC.value);
    console.log(a, b, c)

    let low, high
    if (a < b) {
        low = a;
        high = b;
    }
    else {
        low = b;
        high = a;
    }

    if (c >= low && c <= high) {
        result = " С принадлежит заданному диапазону"
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    } else {
        result = " С не принадлежит заданному диапазону"
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = false;
    }
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;

const elementA = document.getElementById("a");
elementA.addEventListener('keyup', verify);

const elementB = document.getElementById("b");
elementB.addEventListener('keyup', verify);

const elementC = document.getElementById("c");
elementC.addEventListener('keyup', verify);

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)


