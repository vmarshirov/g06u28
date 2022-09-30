function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "pic_bulboff.gif"
    } else {
        pic = "pic_bulbon.gif"
    }
    document.getElementById('myImage').src = pic;
}

/* 


console.log(document.all)

document.all[6].getAttribute('src')

document.all[6].src="http://g06u28.nn2000.info/public_html/025_js/public_html/pic_bulbon.gif";

document.all[6].src="http://g06u28.nn2000.info/public_html/025_js/public_html/pic_bulboff.gif";

document.getElementById("myImage")
var node = document.getElementById("myImage");

*/