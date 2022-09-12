function CheckFields(form){
    var elems = form.elements;
    var result_p = document.getElementById('result');
    result_p.innerHTML = "";
    console.log(elems.a.value);
    console.log(typeof(elems.a.value));
    
        
    if (elems.a.value < elems.b.value){
        var low = parseFloat(elems.a.value);
        var high = parseFloat(elems.b.value);
        }
        else {
            var low = parseFloat(elems.b.value);
            var high = parseFloat(elems.a.value);
        }
            
     console.log(low);
     console.log(high);
     console.log(parseFloat(elems.x.value));
    if (parseFloat(elems.x.value) >= low && parseFloat(elems.x.value) <= high ){
        result_p.innerHTML = "x принадлежит заданному промежутку";
        var check = true;
        }
        else{
            result_p.innerHTML = "x не принадлежит заданному промежутку";
            var check = false;
        }
    
    

    if (check) {
        document.getElementById("UserEnter").submit();
       }
        else{
            alert ( "есть недостатки, повторите ввод" )
            }
    }
        