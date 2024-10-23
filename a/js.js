function verify() {
    let error = ""
    if (placeNumber < 54) {
        if (placeNumber % 2) {
            console.log("нижнее место")
            place = "нижнее место"
        }
        else {
            console.log("верхнее место")
            place = "верхнее место"
        }

        if (placeNumber < 37) {
            console.log("купе")
            place2 = "купе"
        }
        else {
            console.log("боковое")
            place2 = "боковое"
        }
        result = place + ", " + place2
    check = true
    }
    else {
        console.log("Ошибка ввода данных")
        error = "Ошибка ввода данных"
        result = error
        check = false
    }

    console.log("Ответ: ", result)
    nodeResult.innerText = result
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Ошибка ввода данных")
    }
}

function verify_send() {
    verify();
    send();
}

const nodeTaskContent = document.getElementsByName("task_content")[0];
console.log(nodeTaskContent.value)
task_content.addEventListener('input', verify)

const nodePlaceNumber = document.getElementById("placeNumber");
console.log("Номер места:", nodePlaceNumber.innerText)
var placeNumber = nodePlaceNumber.innerText
placeNumber.addEventListener('keyup', verify)

const nodeResult = document.getElementById("result");
console.log("Результат: ", nodeResult.innerText)
result.addEventListener('keyup', verify)

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
  