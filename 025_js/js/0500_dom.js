(function(){
var elems_p = document.getElementsByTagName("p");
console.log(elems_p);

var elems_d = document.getElementsByTagName("div");
console.log(elems_d);

console.log(document.getElementsByName("Два"));
console.log(document.getElementsByClassName("class"));
console.log(document.getElementById("id"));

console.log(document.querySelector("p"))
console.log(document.querySelectorAll("p"))
console.log(document.querySelectorAll("div"))
console.log(document.querySelectorAll("div p"))
console.log(document.querySelectorAll("#id"))

for(var i = 0; i < elems_p.length; i++){
    console.log(elems_p[i] )
    }

for(var i = 0; i < elems_d.length; i++){
    console.log(elems_d[i])
    }
for(var i = 0; i < elems_d.length; i++){
    console.log(document.querySelector("div").children);
    }

    
for (let value of elems_d) {
  console.log(value.innerHTML);}
 

alert("оповещение для отладки");
  
})();