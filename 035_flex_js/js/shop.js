// Запрашиваем и загружаем данные о товарах из файла shop.json.
fetch("./data/shop.json")
  .then(response => response.json())
  // Параметр data — массив объектов-товаров (сейчас в shop.json их 11),
  .then(data => {
    console.log(data)
    console.log(data.map(abc => abc.title + abc.price))
    console.log(data.map(abc => abc.title + abc.price).join())
    console.log(data.map(abc => abc.title + abc.price).join(""))
    // Находим фрагмент на странице shop.html, в который нужно добавить товары.
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
    // Объединяем массив шаблонов и убираем запятые.
    .join("");
  })
  // Если загрузить файл или обработать данные не удалось, выводим ошибку в консоль.
  .catch(error => console.error("Не удалось загрузить каталог товаров:", error));
