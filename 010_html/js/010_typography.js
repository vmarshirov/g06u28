function find_edit(){
    const item  = document.getElementById('new')
    console.log(item.innerText)
    item.innerHTML="<b>оригинальный фрагмент изменен</b>"
}

const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click",find_edit)
