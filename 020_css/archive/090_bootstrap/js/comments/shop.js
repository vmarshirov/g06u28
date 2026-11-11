// Загружаем данные о товарах из файла shop.json.
// fetch() отправляет GET-запрос и сразу возвращает Promise — «обещание» будущего ответа.
// Путь "./data/shop.json" отсчитывается от папки, где лежит shop.html.
fetch("./data/shop.json")
  // Преобразуем полученный ответ сервера из JSON в JavaScript-массив.
  // response.json() читает тело ответа и разбирает JSON; это тоже асинхронная операция,
  // поэтому возвращается новый Promise, который обрабатывается следующим .then().
  .then(response => response.json())
  // После загрузки данных создаём HTML-карточки товаров.
  // Параметр data — массив объектов-товаров (сейчас в shop.json их 11),
  // у каждого есть поля: id, title, vendor_code, description, price, img.
  .then(data => {
    // Находим список на странице shop.html, в который нужно добавить товары.
    // Это <ul id="node_for_insert">; присваивая innerHTML, мы заменяем его содержимое
    // на HTML-строку, которую соберёт цепочка методов ниже.
    document.querySelector("#node_for_insert").innerHTML = data
      // Преобразуем каждый товар в HTML-разметку (метод map() вызывает функцию для каждого элемента массива).
      // ВНИМАНИЕ: в исходном комментарии было написано «оставляем первые 9 товаров»,
      // но в коде нет вызова .slice(0, 9), поэтому выводятся ВСЕ товары из файла (все 11).
      // Если нужно показать только 9, перед .map() добавьте .slice(0, 9).
      // Внутри шаблонной строки (между обратными кавычками) нельзя использовать //-комментарии:
      // они стали бы частью HTML. Поэтому пояснение разметки дано здесь:
      //   <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
      //        — карточка товара: элемент списка шириной 210px; Bootstrap-классы:
      //          d-flex flex-column — flex-контейнер с вертикальным расположением,
      //          m-1 — внешний отступ, p-1 — внутренний отступ,
      //          border — рамка, bg-body — фон страницы;
      //   <img style="width: 180px" class="align-self-center" src="${product.img}" alt="${product.title}">
      //        — картинка товара шириной 180px, по центру (align-self-center);
      //          src берётся из поля img, alt — из названия товара;
      //   <h5 class="card-subtitle">${product.title}</h5>
      //        — название товара;
      //   <p class="card-text">${product.description}. Цена ${product.price} р.</p>
      //        — описание и цена в одной строке;
      //   <input type="hidden" name="vendor_code" value="${product.vendor_code}">
      //        — скрытое поле с артикулом: пользователь его не видит, но при отправке формы
      //          оно уйдёт на сервер как параметр vendor_code;
      //   <p class="card-text">Заказать
      //        — подпись к полю количества;
      //   <input class="w-25" type="number" name="amount" value="0" min="0">
      //        — поле ввода количества: число, по умолчанию 0, меньше 0 ввести нельзя (min="0"),
      //          ширина 25% (w-25), параметр при отправке формы называется amount.
      .map(product => `
        <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
          <img style="width: 180px" class="align-self-center"
               src="${product.img}" alt="${product.title}">
          <h5 class="card-subtitle">${product.title}</h5>
          <p class="card-text">${product.description}. Цена ${product.price} р.</p>
          <input type="hidden" name="vendor_code" value="${product.vendor_code}">
          <p class="card-text">Заказать
            <input class="w-25" type="number" name="amount" value="0" min="0">
          </p>
        </li>
      `)
      // Объединяем HTML-код всех карточек в одну строку.
      // map() вернул массив строк; join("") склеивает их без разделителей
      // (иначе при записи в innerHTML между карточками появились бы запятые).
      .join("");
  })
  // Если загрузить файл или обработать данные не удалось, выводим ошибку в консоль.
  // .catch() ловит ошибки любого предыдущего шага цепочки:
  // сетевой сбой, отсутствие файла, некорректный JSON, отсутствие элемента #node_for_insert.
  .catch(error => console.error("Не удалось загрузить каталог товаров:", error));
