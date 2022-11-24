// https://learn.javascript.ru/fetch
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://jsonplaceholder.typicode.com/

function nav_clear() {
    const clear_nav = document.getElementsByClassName("nav-link")
    for (let index = 0; index < clear_nav.length; index++) {
        console.log("index: ", index)
        clear_nav[index].style = "color: green;"
    }
}

// component_01
async function fetchHTML_01() {
    let responce = await fetch("../../tmp/g06u28.component_01.html")
    console.log(responce)
    let content = await responce.text()
    console.log(content)
    let component = document.getElementById("component")
    component.innerHTML = content
}

function navComponent_01() {
    nav_clear()
    nav_01.style = "color: red;"
}

function Component_01() {
    fetchHTML_01()
    navComponent_01()
}


// component_02
async function fetchHTML_02() {
    let responce = await fetch("../../tmp/g06u28.component_02.html")
    let content = await responce.text()
    console.log(content)
    let component = document.getElementById("component")
    component.innerHTML = content

}

async function fetchJson_02() {
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
    for (let key in content) {
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

function navComponent_02() {
    nav_clear()
    nav_02.style = "color: red;"
}

function Component_02() {
    fetchHTML_02()
    fetchJson_02()
    navComponent_02()
}

const nav_01 = document.getElementById("id_nav_01")
nav_01.addEventListener("click", Component_01)
const nav_02 = document.getElementById("id_nav_02")
nav_02.addEventListener("click", Component_02)
