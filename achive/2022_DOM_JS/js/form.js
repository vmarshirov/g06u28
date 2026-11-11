
var inputElem = document.getElementsByTagName("input")[0]
console.log('Значение по-умолчанию', inputElem.value);
inputElem.oninput = function (e) {
    console.clear()
    console.log(inputElem.value);
    inpValue = parseInt(inputElem.value)
    if(isNaN(inpValue)){inpValue = ''}
    if (Number.isSafeInteger(inpValue)) {
        inputElem.value = inpValue;
        inputElem.style.backgroundColor = "green";
    } else {
        inputElem.value = inpValue;
        inputElem.style.backgroundColor = "red"
    }
    e.preventDefault();
}
// console.log(inputElem.value)

/*

console.log("localStorage...")
localStorage.clear()
console.log(window.localStorage)
let myVariable = 'x'
let myValue = 11
window.localStorage.setItem(myVariable,myValue)
localStorage.getItem(myVariable)
window.localStorage.setItem("y",22)
console.log(window.localStorage)
localStorage.getItem("x")
localStorage.removeItem("x")
console.log(window.localStorage)
localStorage.clear()
console.log(window.localStorage)
*/

/*
console.log("JSON ....")
const object = {
    name: 'Иван',
    age: 20
}
localStorage.setItem('person',JSON.stringify(object))
console.log(localStorage)
strPerson = localStorage.getItem("person")
console.log(typeof strPerson)
console.log(strPerson)
parsPerson = JSON.parse(strPerson)
console.log(typeof parsPerson)
console.log(parsPerson)
*/

