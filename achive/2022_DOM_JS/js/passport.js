/*
window.innerWidth
window.innerHeight
BOM
navigator.userAgent
navigator.platform
location.host
alert("Оповещение")
const confirmResult = confirm('Согласен?')
const promtResult = prompt('ФИО?')
DOM
document.body.children
document.body.children[0].hidden = "true"
document.body.hasChildNodes()
console.dir(p[0])
*/

console.log("Вывод в консоль")
// alert("Оповещение. Скрипта начал работать")
const h2 = document.getElementsByTagName("h2")
console.log(h2[0].outerHTML)
const p = document.getElementsByTagName("p")
console.log(p)
const comment = document.getElementsByTagName("p")[0].childNodes[1]
console.log(comment)


function h2_0_e() {
    console.log(h2[0].outerHTML)
    console.log(h2[0].innerText)
    h2[0].align = "center"
    h2[0].innerText = "Обновление заголовка 0"
    alert(h2[0].innerText)
}

let values_0="Отделом внутренних ...";
let values = ['Отделом внутренних .']
function p_0() {
    // p[0].firstElementChild.innerText = values_0
    p[0].firstElementChild.innerText = values[0]
}
p[0].children[0].onclick = p_0

values.push("11.11.2011")
function p_1() {
    // p[0].firstElementChild.innerText = values_0
    p[1].firstElementChild.innerText = values[1]
}
p[1].children[0].onclick = p_1



