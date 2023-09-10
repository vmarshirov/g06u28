const node_for_click = document.getElementById("for_click")

function find_edit(){
    const item  = document.getElementsByTagName('p')[1]
    console.log(item.innerText)
    item.innerText = 'новое значение'
}

node_for_click.addEventListener("click",find_edit)
