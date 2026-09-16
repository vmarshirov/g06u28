function find_edit() {
  //Корректируем имя
  const new_node = document.getElementById("name_id");
  new_node.innerHTML = "<b>Ivan</b>";
  // Вычисляем и отображаем возраст
  const birthYear = parseInt(document.getElementById("birthYear").innerHTML);
  const currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;
  console.log(age)
  const age_node = document.getElementById("age_id");
  age_node.innerHTML = age
}

const node_for_click = document.getElementById("for_click");
node_for_click.addEventListener("click", find_edit);
