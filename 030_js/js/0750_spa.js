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
    fetchHTML_01(content_url)
    navComponent_01()
}

//------------------------------
function navComponent_03() {
    nav_clear()
    nav_03.style = "color: red;"
}
async function fetchJson_03() {
    let component = document.getElementById("component")
    let innerHTML = '<h6>component_03</h6>\n<p>Содержание ...</p>\n\n'

    // let responce = await fetch("https://my-json-server.typicode.com/typicode/demo/posts")
    //let responce = await fetch("https://vmarshirov.github.io/g06u28/030_js/data/0620.json")
    //let responce = await fetch("http://185.182.111.214:7628/tmp/g06u28.txt_api.json")
    let responce = await fetch("https://vmarshirov.github.io/g06u28/030_js/public_html/pages/shop.json")
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
     innerHTML +=`
    <form action="https://www.bing.com/search?" id="UserEnter" name="UserEnter" target="_blank">
    <input type="hidden"  name="q" value="search">
    `
    innerHTML +='<div class="d-flex flex-wrap">'
    for (key in content) {
        innerHTML += `
        <div class="border p-2 m-2" style="width: 220px;">
        <img src=${content[key].img} width="200px">
        <h6>${content[key].title}</h6>
        <p>${content[key].description}. Цена
        ${content[key].price} р.</p>
        <p>Заказать
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <input type="number" name="amount" value="0" style="width: 2.0rem;">
        </p>
        </div>
        `
    }
    innerHTML +=`
    </div>
    <button type="submit" class="btn btn-light">Заказать</button>
    `
    console.log(innerHTML)
    component.innerHTML = innerHTML
}
function Component_03() {
    fetchJson_03()
    navComponent_01()
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
console.log("search_obj.page: ", search_obj.page)
var content_url  = "../public_html/pages/" + search_obj.page
console.log("content_url: ", content_url)

if(search_obj.page ==  "component_03.html"){
Component_03()
}
else{Component_01(content_url)}


/*

const nav_01 = document.getElementById("nav_01_id")
nav_01.addEventListener("click", Component_01())
const nav_02 = document.getElementById("nav_02_id")
nav_02.addEventListener("click", Component_01())
const nav_03 = document.getElementById("nav_03_id")
nav_03.addEventListener("click", Component_03())


*/

