// https://learn.javascript.ru/fetch
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://jsonplaceholder.typicode.com/


// id_component_01
async function getComponent_01() {
    let responce = await fetch("../../tmp/g06u28.component_01.html")
    console.log(responce)
    let content = await responce.text()
    console.log(content)
    let component = document.getElementById("component")
    component.innerHTML = content
}

function styleComponent_01() {
    nav_clear()
    id_nav.style = "color: red;"
    getComponent_01()
}
const id_nav = document.getElementById("id_component_01")
id_nav.addEventListener("click", styleComponent_01)



// id_component_02
async function getJson() {
    // let responce = await fetch("https://my-json-server.typicode.com/typicode/demo/posts")
    //let responce = await fetch("https://vmarshirov.github.io/g06u28/030_js/data/0620.json")
    //let responce = await fetch("http://185.182.111.214:7628/tmp/g06u28.txt_api.json")
    let responce = await fetch("../../tmp/g06u28.shop.json")
    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)
    // content = await responce.json()
    content = content.splice(0, 4)
    console.log(content)

    let key
    for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }
    let ul_0 = document.getElementById("ul_0")
    for (key in content) {
        ul_0.innerHTML += ` 
        <li class="m-2 list-group-item"> 
        <img src=${content[key].img} width="200px">
        <h6>${content[key].title}</h6>
        <p>${content[key].description}. Цена 
        ${content[key].price} р.</p>
        <p>Заказать 
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <input type="number" name="amount" value="0" style="width: 2.0rem;">
        </p> 
        </li>
           `
    }
}

async function getComponent_02() {
    let responce = await fetch("../../tmp/g06u28.component_02.html")
    let content = await responce.text()
    console.log(content)
    let component = document.getElementById("component")
    component.innerHTML = content
    getJson()
}

function styleComponent_02() {
    const id_component_02 = document.getElementById("id_component_02")
    nav_clear()
    id_component_02.style = "color: red;"
    getComponent_02()
}
id_component_02.addEventListener("click", styleComponent_02)



function nav_clear() {
    const clear_nav = document.getElementsByClassName("nav-link")
    for (let index = 0; index < clear_nav.length; index++) {
        console.log("index: ", index)
        clear_nav[index].style = "color: green;"
    }
}
//nav_clear()




/*

function content_hidden() {
    const hidden_node = document.getElementsByClassName("hidden_node")
    for (let index = 0; index < hidden_node.length; index++) {
        console.log("index: ", index)
        hidden_node[index].style = "display: none;"
    }
}
content_hidden()
*/



/*

const id_main = document.getElementById("id_main")
const main = document.getElementById("main")
function style_main() {
    content_hidden()
    nav_clear()
    id_main.style = "color: red;"
    main.style = "display: flex; "
}
id_main.addEventListener("click", style_main)
*/

/*

const id_component_01 = document.getElementById("id_component_01")
const component_01 = document.getElementById("component")
function style_component() {
    content_hidden()
    nav_clear()
    id_component_01.style = "color: red;"
    component_01.style = "display: initial;"
    getComponent_01()
}

id_component_01.addEventListener("click", style_component)

*/
