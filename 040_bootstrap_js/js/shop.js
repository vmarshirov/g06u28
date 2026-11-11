// Загружаем данные о товарах из файла shop.json.
fetch("./data/shop.json")
  // Преобразуем полученный ответ сервера из JSON в JavaScript-массив.
  .then(response => response.json())
  // После загрузки данных создаём HTML-карточки товаров.
  .then(data => {
    // Находим список на странице shop.html, в который нужно добавить товары.
    // Это <ul id="node_for_insert">; присваивая innerHTML, мы заменяем его содержимое
    // на HTML-строку, которую соберёт цепочка методов ниже.
    document.querySelector("#node_for_insert").innerHTML = data
      // Преобразуем каждый товар в HTML-разметку (метод map() вызывает функцию для каждого элемента массива).
      .map(product => `
        <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
          <img style="width: 180px" class="align-self-center"
               src="${product.img}" alt="${product.title}">
          <h6 class="card-subtitle">${product.title}</h6>
          <p class="card-text">${product.description}. Цена ${product.price} р.</p>
          <input type="hidden" name="vendor_code" value="${product.vendor_code}">
          <p class="card-text">Заказать
            <input class="w-25" type="number" name="amount" value="0" min="0">
          </p>
        </li>
      `)
      // Объединяем HTML-код всех карточек в одну строку.
      .join("");
  })
  // Если загрузить файл или обработать данные не удалось, выводим ошибку в консоль.
  .catch(error => console.error("Не удалось загрузить каталог товаров:", error));
