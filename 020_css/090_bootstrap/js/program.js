// Отправляем HTTP-запрос (GET) за файлом с данными о программе.
// "./data/program.json" — относительный путь: от папки, где лежит program.html.
// fetch() не ждёт ответа и сразу возвращает Promise («обещание» результата).
fetch("./data/program.json")
  // Когда сервер ответил, получаем объект response (заголовки, статус, тело).
  // Метод response.json() читает тело ответа и разбирает его как JSON;
  // он тоже асинхронный и возвращает новый Promise, поэтому дальше идёт ещё один .then().
  .then(response => response.json())
  // Когда JSON разобран, в data лежит готовый JavaScript-объект
  // вида { program: {...}, people: [ {...}, {...}, {...} ] }.
  // Именно здесь мы подставляем данные в страницу.
  .then(data => {
    // Меняем текст вкладки браузера (тег <title>) на название программы из JSON.
    // В program.html тега <title> нет, поэтому браузер создаёт его при присвоении.
    document.title = data.program.title;
    // Находим на странице элемент с id="program-title" (заголовок <h5>)
    // и заменяем его текст названием программы.
    // textContent вставляет именно текст, а не HTML — это безопасно.
    document.querySelector("#program-title").textContent = data.program.title;
    // Находим абзац с id="program-description" и записываем в него краткое описание программы.
    document.querySelector("#program-description").textContent = data.program.description;
    // Находим абзац с id="program-details" (раздел «О программе») и записываем подробности.
    document.querySelector("#program-details").textContent = data.program.details;
    // document.querySelector("#programUrl").innerHTML = `<a href="${data.program.programUrl}" target="_blank"><br>Ссылка на программу</a>`
   document.querySelector("#programUrl").innerHTML =
  `<a href="${data.program.programUrl}" target="_blank"><br>Ссылка на программу</a>`;



    // Находим контейнер с id="people-list" и целиком заменяем его внутреннее HTML-содержимое (innerHTML)
    // на строку, которая будет получена цепочкой методов ниже.
    document.querySelector("#people-list").innerHTML = data.people
      // Метод map() проходит по массиву people и для КАЖДОГО человека (person)
      // возвращает строку с HTML-разметкой его карточки.
      // В результате получается новый массив строк, а не один текст.
      // Обратные кавычки ` ` задают шаблонную строку: она может быть многострочной,
      // а конструкция ${...} подставляет в неё значение выражения JavaScript.
      // Внутри шаблонной строки нельзя писать // комментарии (они попали бы в HTML),
      // поэтому построчное пояснение разметки дано здесь:
      //   <div class="col">                     — внешняя колонка-обёртка одной карточки;
      //   <div class="d-flex flex-column ...">  — сама карточка: flex-колонка (d-flex flex-column),
      //                                           внешние/внутренние отступы m-1 p-1,
      //                                           рамка border и фон bg-body;
      //   <img src="${person.photo}" ...>       — фото: путь берётся из поля photo;
      //                                           style задаёт высоту 300px и ширину по содержимому
      //                                           (width: fit-content), класс card-img — стиль Bootstrap;
      //                                           alt="${person.alt}" — описание картинки для
      //                                           экранных чтецов и на случай, если фото не загрузится;
      //   <div class="card-body">               — блок с текстом карточки;
      //   <p class="card-subtitle ...">          — роль (студент, руководитель, менеджер) серым цветом
      //                                           (text-secondary);
      //   <h5 class="card-title h5">             — ФИО; тег h5 для структуры документа,
      //                                           а класс h5 уменьшает его до размера заголовка 5 уровня;
      //   <p class="card-text small text-muted"> — примечание мелким приглушённым шрифтом;
      //   <a href="mailto:...">                  — ссылка-почта: схема mailto: открывает
      //                                           почтовую программу, а текст ссылки — сам адрес.
      .map(person => `
        <div class="col">
          <div class="d-flex flex-column m-1 p-1 border bg-body" style="width: min-content;">
            <img src="${person.photo}" class="card-img people" alt="${person.alt}">
            <div class="card-body">
              <p class="card-subtitle text-secondary">${person.role}</p>
              <h5 class="card-title h5">${person.name}</h5>
              <p class="card-text small text-muted">${person.note}</p>
              <a href="mailto:${person.email}">${person.email}</a>
              <a href="${person.siteUrl}" target="_blank"><br>Ссылка на страницу, сайт или репозиторий</a>
            </div>
          </div>
        </div>
      `)
      // Метод join("") склеивает массив строк-карточек в одну строку без разделителя.
      // Без join() элементы массива при присвоении в innerHTML были бы разделены запятыми.
      .join("");
      
  });
// Конец цепочки. Обратите внимание: блока .catch() здесь нет, поэтому при ошибке загрузки
// (например, файл не найден или страница открыта через file:// без сервера)
// страница останется с пустыми полями, а ошибка появится только в консоли браузера.
// Для сравнения: в shop.js обработчик ошибки .catch() есть.
