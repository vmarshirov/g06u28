var h2 = document.getElementsByTagName("h2")
console.log("Вывод в консоль")
// alert("Оповещение. Скрипта начал работать")

function h2_0_e() {
    h2[0].align = "center"
    h2[0].innerText = "Обновление заголовка 0"
    // alert(h2[0].innerText)
    console.log(h2[0].innerText)
}

function h2_1_e() {
    h2[1].align = "right"
}

h2[0].onclick = h2_0_e
h2[1].onclick = h2_1_e