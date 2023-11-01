// https://learn.javascript.ru/fetch
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://jsonplaceholder.typicode.com/


function activeNavigTitle(content_file_key) {
    const nav_items = document.getElementsByClassName("nav-item")
    for (let index = 0; index < nav_items.length; index++) {
        console.log("index: ", index)
        console.log("content_file_key: ", content_file_key)
        console.log("nav_items[index].childNodes[0].className: ", nav_items[index].childNodes[0].className)
        nav_items[index].childNodes[0].className = "nav-link"
        if(nav_items[index].childNodes[0].id == content_file_key) {
            nav_items[index].childNodes[0].className = "nav-link active"
            console.log('nav_items[index].id: ', nav_items[index].id)
            console.log("innerText: ", nav_items[index].innerText)
            document.getElementsByTagName("title")[0].innerText=nav_items[index].innerText
        }
    }
}

async function fetchHTML(content_url) {
   console.log("content_url: ", content_url)
    let response = await fetch(content_url)
    let content = await response.text()
    console.log("content: ", content)
    let component = document.getElementById("component")
    component.innerHTML = content
}

function Component(content_url, content_file_key) {
    activeNavigTitle(content_file_key)
    fetchHTML(content_url)
}

//------------------------------

async function fetchJson() {
    let component = document.getElementById("component")
    let innerHTML = '<h6>component_json_</h6>\n<p>Содержание ...</p>\n\n'
    // let responce = await fetch("https://my-json-server.typicode.com/typicode/demo/posts")
    //let responce = await fetch("https://vmarshirov.github.io/g06u28/030_js/data/0620.json")
    //let responce = await fetch("http://185.182.111.214:7628/tmp/g06u28.txt_api.json")
    let responce = await fetch("../public_html/pages/component_json.json")
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
        <p>Количество
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <input type="number" name="amount" value="0" style="width: 2.0rem;">
        </p>
        </div>
        `
    }
    innerHTML +=`
    </div>
    <button type="submit" class="btn btn-light">Оформить</button>
    `
    console.log(innerHTML)
    component.innerHTML = innerHTML
}

function component_json(content_url, content_file_key) {
    activeNavigTitle(content_file_key)
    fetchJson()
}


//По URL названия файлов для считывания  content_file_key
console.clear()
baseUrl = document.URL
console.log("baseUrl: ", baseUrl)
const url = new URL(baseUrl)
console.log("url: ", url)
console.log("url.search: ", url.search)
if(url.search.length <=1){
    url.search = "?content_file_key=component_01.html"
}
search_string = url.search.split("?")
search_string[1].split("&")
search_parameters = search_string[1].split("&")
console.log("search_parameters:", search_parameters)
search_obj = {}
for (let index = 0; index < search_parameters.length; index++) {
    pair = search_parameters[index].split("=")
    key = pair[0]; value = pair[1]
    search_obj[key] = value  //формируем объект из строки запроса
}
console.log("search_obj: ",search_obj) //объект из строки запроса
console.log("search_obj.content_file_key: ", search_obj.content_file_key)
var content_url  = "../public_html/pages/" + search_obj.content_file_key // формируем путь к файлу для считывания
console.log("content_url: ", content_url) // путь к файлу для считывания

//Вызываем основные функции
console.log("content_url, search_obj.content_file_key: ", content_url, search_obj.content_file_key)
if(search_obj.content_file_key !=  "component_json.json"){
Component(content_url, search_obj.content_file_key)
}
else{
component_json(content_url, search_obj.content_file_key)
}


/*

const nav_01 = document.getElementById("nav_01_id")
nav_01.addEventListener("click", Component())
const nav_02 = document.getElementById("nav_02_id")
nav_02.addEventListener("click", Component())
const nav_03 = document.getElementById("nav_03_id")
nav_03.addEventListener("click", component_json())


*/

