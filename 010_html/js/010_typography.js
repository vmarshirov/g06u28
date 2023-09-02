alert("Запускаем скрипт")
let name  = document.getElementsByTagName('p')[2].childNodes[1].innerText
const node_1 = document.getElementsByTagName('p')[1].childNodes[1]
console.log(node_1.innerHTML)
node_1.innerHTML = '123www'
console.log(node_1.innerHTML)
