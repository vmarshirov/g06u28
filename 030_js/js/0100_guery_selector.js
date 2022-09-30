var myObject = document.getElementById("id_button")

function random(number) {
    return Math.floor(Math.random()*(number+1));
    }

function color(){
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    console.log(rndCol)
    document.body.style.backgroundColor = rndCol;
}
// https://learn.javascript.ru/introduction-browser-events
// https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
myObject.addEventListener("click",color,false)
// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousedown
// myObject.onmousemove = color


