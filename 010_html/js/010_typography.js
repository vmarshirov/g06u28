function find_edit(){
    const new_node  = document.getElementById('new')
    new_node.innerHTML="<b>оригинальный фрагмент изменен</b>"
}

const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click",find_edit)
