async function getResponce() {
    let responce = await fetch("./data/shop.json")
    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 9)
    console.log(content)

    let key
    for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content) {
        node_for_insert.innerHTML += `
        <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
        <img style="width: 180px" class="align-self-center" src=${content[key].img}>
        <h5 class="card-title">${content[key].title}</h5>
        <p class="card-text">${content[key].description}. Цена ${content[key].price} р.</p>
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <p class="card-text" >Заказать <input class="w-25" type="number" name="amount" value="0"></p>
        </li>
                `
    }


}
getResponce()
