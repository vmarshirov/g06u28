function findEdit() {
    // Корректируем имя
    const nameNode = document.getElementById("name_id");
    nameNode.innerText = "Ivan";

    // Вычисляем и отображаем возраст
    const birthYearNode = document.getElementById("birthYear");
    let birthYear = parseInt(birthYearNode.innerText);
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    console.log(age);
    const ageNode = document.getElementById("age_id");
    ageNode.innerText = age;
}
const nodeForClick = document.getElementById("for_click");
nodeForClick.addEventListener("click", findEdit);
