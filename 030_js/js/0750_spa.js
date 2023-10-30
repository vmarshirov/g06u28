// https://learn.javascript.ru/fetch
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://jsonplaceholder.typicode.com/

function nav_clear() {
    const nav_items = document.getElementsByClassName("nav-link")
    for (let index = 0; index < nav_items.length; index++) {
        console.log("index: ", index)
        console.log("id: ", nav_items[index].id)
        nav_items[index].style = "color: green;"
    }
}

// component_01
/*async function fetchHTML_01() {
//    page = '../../tmp/g06u28/' + search_obj['page']
    let responce = await fetch("../../tmp/g06u28.component_02.html")
    let content = await responce.text()
    console.log("content: ", content)
    let component = document.getElementById("component")
    component.innerHTML = content
}*/

async function fetchHTML_01(content_url) {

   console.log("content_url: ", content_url)
    let response = await fetch(content_url)
    let content = await response.text()
    console.log("content: ", content)
    let component = document.getElementById("component")
    component.innerHTML = content

}

function navComponent_01() {
    nav_clear()
    nav_01.style = "color: red;"
}
function Component_01(content_url) {
    navComponent_01()
    fetchHTML_01(content_url)
}

function navComponent_02() {
    nav_clear()
    nav_02.style = "color: red;"
}
function Component_02() {
    navComponent_02()
    fetchHTML_02()
    fetchJson_02()
}


// component_02
async function fetchHTML_02() {
//    let responce = await fetch("../../tmp/g06u28.component_02.html")
    let responce = await fetch("./pages/component_02.html")
    let content = await responce.text()
    console.log("content: ", content)
    let component = document.getElementById("component")
    component.innerHTML = content

}

async function fetchJson_02() {
    // let responce = await fetch("https://my-json-server.typicode.com/typicode/demo/posts")
    //let responce = await fetch("https://vmarshirov.github.io/g06u28/030_js/data/0620.json")
    //let responce = await fetch("http://185.182.111.214:7628/tmp/g06u28.txt_api.json")
    let responce = await fetch("../../tmp/g06u28.shop.json")
    let content = await responce.text()
    console.log("content: ", content)
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

console.clear()
    baseUrl = document.URL
    console.log("baseUrl: ", baseUrl)
    const url = new URL(baseUrl)
    console.log("url: ", url)
    console.log("url.pathname: ", url.pathname)
    path_lst  = url.pathname.split("/")
    last_path = path_lst[path_lst.length-1]
    console.log("last_path: ", last_path)
    console.log("url.search: ", url.search)
    search_string = url.search.split("?")
    search_string[1].split("&")
    search_parameters = search_string[1].split("&")
    console.log("search_parameters:", search_parameters)
    search_obj = {}
    for (let index = 0; index < search_parameters.length; index++) {
        pair = search_parameters[index].split("=")
        key = pair[0]; value = pair[1]
        search_obj[key] = value
        console.log(search_obj)
    }
   console.log("search_obj: ", search_obj)
   var content_url  = "https://vmarshirov.github.io/g06u28/030_js/public_html/pages/" + search_obj
    console.log("content_url: ", content_url)

const nav_01 = document.getElementById("id_nav_01")
nav_01.addEventListener("click", Component_01(content_url))
const nav_02 = document.getElementById("id_nav_02")
nav_02.addEventListener("click", Component_02)



