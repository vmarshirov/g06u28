function light(sw) {
    console.log("sw:", sw)
    var picture
    if (sw == 0) {
        picture = "pic_bulboff.gif"
    } else {
        picture = "pic_bulbon.gif"
    }
    const image = document.getElementById('idImage')
    image.src = picture;
    image.style = "border-style: solid;  padding: 25px;"
}

/* 
console.log(document.all)
document.all[6].getAttribute('src')
document.all[6].src="http://g06u28.nn2000.info/public_html/025_js/public_html/pic_bulbon.gif";
document.all[6].src="http://g06u28.nn2000.info/public_html/025_js/public_html/pic_bulboff.gif";
document.getElementById("myImage")
var node = document.getElementById("myImage");
*/