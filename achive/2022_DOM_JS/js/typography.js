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
console.log('h2[0].outerHTML:', h2[0].outerHTML)
console.log(`h2[0].outerHTML: ${h2[0].outerHTML}`)

const p = document.getElementsByTagName("p")
console.log(p)
console.log(`${p[0].outerHTML}`)
console.log(`${p[0].outerHTML}`)


const comment = document.getElementsByTagName("p")[0].childNodes[1]
console.log(comment)


function h2_0_e() {
    console.log(h2[0].outerHTML)
    console.log(h2[0].innerText)
    h2[0].align = "center"
    h2[0].innerText = "Обновление заголовка 0"
    alert(h2[0].innerText)
}

function p_0() {
    // let p_0_inner = p_0.innerHTML
    // p_0.innerHTML = p_0_inner + h2[0].innerHTML
    // p_0.outerHTML = ${p_0.outerHTML}
    // console.dir(p[0]) - отражает изменения
    p[0].firstElementChild.innerText = "Новое содержание"
    let p_0_span_0 = "Обновленное содержание"
    let p_0_span_1 = "Дополненное содержание"
    p[0].children[0].innerText = p_0_span_0 + p_0_span_1 + comment.data
}

h2[0].onclick = h2_0_e
p[0].children[0].onclick = p_0


