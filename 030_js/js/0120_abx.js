function checkFields(form) {
    const elems = form.elements
    console.log("elems:", elems)
    console.log("elems[0]: ", elems[0])
    console.log("elems[0].name: ", elems[0].name)
    console.log("elems[0].value: ", elems[0].value)
    console.log("elems.a.value: ", elems.a.value)

    console.log("typeof (elems.a.value): ", typeof (elems.a.value))
    let aFloat = parseFloat(elems.a.value)
    let bFloat = parseFloat(elems.b.value)
    let xFloat = parseFloat(elems.x.value)

    if (aFloat < bFloat) {
        var low = aFloat
        var high = bFloat
    } else {
        var low = bFloat
        var high = aFloat
    }
    console.log(low)
    console.log(high)
    console.log(xFloat)


    if (low <= xFloat && xFloat <= high) {
        var result = "X принадлежит заданному промежутку"
        var check = true
    } else {
        var result = "X не принадлежит заданному промежутку"
        var check = false
    }

    let result_p = document.getElementById('result')
    result_p.innerHTML = "Ответ: " + result


    if (check) {
        document.getElementById("UserEnter").submit()
    } else {
        alert("Ответ\n" + result + "\nПовторите ввод")
    }
}
