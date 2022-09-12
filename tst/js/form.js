var inputElem = document.getElementsByTagName("input")[0]
console.log('Значение по-умолчанию', inputElem.value);
inputElem.oninput = function (e) {
    console.clear()
    console.log(inputElem.value);
    if (inputElem.value.length < 3) {
        inputElem.style.backgroundColor = "red"
    } else {
        inputElem.style.backgroundColor = "green"
    }
    e.preventDefault();
}
// console.log(inputElem.value)
