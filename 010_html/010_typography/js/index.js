;

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function new_color() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    p_3_child_0.style.color = rndCol;
}

function identifier_new_color() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    identifier.style.color = rndCol;
}


const p_3_child_0 = document.querySelectorAll('p')[3].children[0]
p_3_child_0.style = "font-weight: bold; font-size: 1.5rem; color: brown; background-color: aquamarine;   word-spacing: 3rem; letter-spacing: 3.0rem;"


p_3_child_0.addEventListener("click", new_color, false)
// https://developer.mozilla.org/en-US/docs/Web/Events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events



const identifier = document.getElementById('identifier')
identifier.addEventListener("click", identifier_new_color, false)



/*
window.alert("Оповещение из js-файла в рабочее окно");
console.log("Оповещение из js-файла в  в консоль");
*/

/*
if (window.confirm("Изменить стиль на новый?")) {
    p_3_child_0.style = "font-weight: bold; font-size: 4.5rem; color: red; background-color: aquamarine;   word-spacing: 3rem; letter-spacing: 3.0rem;"
}
*/


/*
let first_name = prompt("Ваше имя?");
*/
