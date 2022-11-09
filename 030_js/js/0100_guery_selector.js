const myObject = document.getElementById("id1")

function random(number) {
    return Math.floor(Math.random()*(number+1));
    }

function color(){
    console.log("myObject.innerHTML: ", myObject.innerHTML)
    console.log("myObject.id: ", myObject.id)
    console.log("myObject.name", myObject.name)
    console.log("myObject", myObject)

    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    console.log("rndCol:", rndCol)
    document.body.style.backgroundColor = rndCol;
}

myObject.addEventListener("click",color)
