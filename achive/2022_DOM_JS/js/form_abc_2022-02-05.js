function CheckFields() {
    var a = document.getElementsByTagName("input")[0].value
    var b = document.getElementsByTagName("input")[1].value
    var c = document.getElementsByTagName("input")[2].value
    console.log(a);
    console.log(b);
    console.log(c);

    if (a < b) {
        var low = parseFloat(a);
        var high = parseFloat(b);
    } else {
        var low = parseFloat(b);
        var high = parseFloat(a);
    }

    console.log(low);
    console.log(high);
    // var c = high - low
    // document.getElementsByTagName("input")[2].value = c;
    console.log(c);

    if (parseFloat(c) >= low && parseFloat(c) <= high) {
        document.getElementsByTagName("p")[0].innerText = "c принадлежит заданному промежутку";
        var check = true;
    } else {
        document.getElementsByTagName("p")[0].innerText = "x не принадлежит заданному промежутку";
        var check = false;
    }

    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("есть недостатки, повторите ввод")
    }
}


const mySubmit = document.getElementsByTagName('input')[4];
mySubmit.onclick = CheckFields;