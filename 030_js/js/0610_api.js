// https://www.youtube.com/watch?v=QSF8JXFPR18&list=PLiOhsP3M5j5wIUlXkYMuWTVR8inofxLS0&index=7
async function getResponce() {
    // let responce = await fetch("https://my-json-server.typicode.com/typicode/demo/posts")
    let responce = await fetch("https://jsonplaceholder.typicode.com/photos")
    /*
        let content = await responce.text()
        console.log(JSON.parse(content))
    */
    let content = await responce.json()
    console.log(content.splice(0, 10))
    /*
        let key
        for (key in content ) {
            console.log(content[key].id)
            console.log(content[key].title)
            console.log(content[key].thumbnailUrl)
            console.log(content[key].url)
        }
    */

    content = content.splice(0, 5)
    let key
    let ul_0 = document.getElementsByTagName("ul")[0]
    for (key in content) {
        ul_0.innerHTML += ` 
        <li> 
        <h3>${content[key].title}</h3>
        <img src=${content[key].url} width="200px">
        </li>
                `
    }


}

getResponce()