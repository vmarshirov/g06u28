// Загружаем данные о товарах из файла shop.json.
fetch("./data/shop.json")
  .then(response => response.json())
  // После загрузки данных создаём HTML-карточки товаров.
  // Параметр data — массив объектов-товаров (сейчас в shop.json их 11),
  .then(data => {
    // Находим список на странице shop.html, в который нужно добавить товары.
    document.querySelector("#node_for_insert").innerHTML = data
      .map(product => `
        <li>
          <img src="${product.img}" alt="${product.title}">
          <h6>${product.title}</h6>
          <p class="margin_01rem">${product.description}. Цена ${product.price} р.</p>
          <input type="hidden" name="vendor_code" value="${product.vendor_code}">
          <p class="margin_01rem">Заказать <input type="number" name="amount" value="0" min="0"></p>
        </li>
      `)
      // Объединяем HTML-код всех карточек в одну строку.
      .join("");
  })
  // Если загрузить файл или обработать данные не удалось, выводим ошибку в консоль.
  .catch(error => console.error("Не удалось загрузить каталог товаров:", error));
