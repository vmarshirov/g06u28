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
    // Отладочный вывод в консоль браузера (F12): объект с данными о программе.
    console.log(data.program)
    // Отладочный вывод в консоль браузера: массив участников программы.
    console.log(data.people)
    // Меняем текст вкладки браузера (тег <title>) на название программы из JSON.
    // В program.html тег <title> уже есть, присваивание заменяет его текст.
    document.title = data.program.title;
    // Находим на странице элемент с id="program-title" (заголовок <h5>)
    // и заменяем его текст названием программы.
    // textContent вставляет именно текст, а не HTML — это безопасно.
    document.querySelector("#program-title").textContent = data.program.title;
    // Находим абзац с id="program-description" и записываем в него краткое описание программы.
    document.querySelector("#program-description").textContent = data.program.description;
    // Находим элемент с id="program-details" (раздел «О программе») и записываем подробности.
    document.querySelector("#program-details").textContent = data.program.details;
    // Закомментированный прежний вариант: ссылка с текстом «Ссылка на программу».
    // document.querySelector("#programUrl").innerHTML = `<a href="${data.program.programUrl}" target="_blank"><br>Ссылка на программу</a>`
    // Находим элемент с id="programUrl" и вставляем в него ссылку на страницу программы.
    // href берётся из поля programUrl в JSON; target="_blank" открывает ссылку в новой вкладке;
    // <br> переносит ссылку на новую строку; текстом ссылки служит сам адрес.
    document.querySelector("#programUrl").innerHTML =
      `<a href="${data.program.programUrl}" target="_blank"><br>${data.program.programUrl}</a>`;

    // Находим контейнер с id="people-list" и целиком заменяем его внутреннее HTML-содержимое (innerHTML)
    // на строку, которая будет получена цепочкой методов ниже.
    document.querySelector("#people-list").innerHTML = data.people
      // Метод map() проходит по массиву people и для КАЖДОГО человека (person)
      // возвращает строку с HTML-разметкой его карточки.
      // В результате получается новый массив строк, а не один текст.
      // Обратные кавычки ` ` задают шаблонную строку: она может быть многострочной,
      // а конструкция ${...} подставляет в неё значение выражения JavaScript.
      // Внутри шаблонной строки нельзя писать // комментарии, поэтому пояснение здесь.
      // Bootstrap-классы не используются: вид карточек задан в css/my.css
      // селекторами по id (#people-list > div, #people-list img) и классом .margin_01rem.
      //   <div>                 — карточка участника;
      //   <img>                 — фото: src из поля photo, alt — описание для экранных чтецов;
      //   <p class="margin_01rem"> — роль (первый абзац) и примечание (второй абзац);
      //                              класс margin_01rem задаёт отступ абзаца;
      //   <h6>                  — ФИО;
      //   <a href="mailto:...">  — почта: схема mailto: открывает почтовую программу;
      //   <a href="${person.siteUrl}" target="_blank"> — ссылка на страницу, сайт или репозиторий
      //                              из поля siteUrl; открывается в новой вкладке.
      .map(person => `
        <div>
          <img src="${person.photo}" alt="${person.alt}">
          <p class="margin_01rem">${person.role}</p>
          <h6>${person.name}</h6>
          <p class="margin_01rem">${person.note}</p>
          <a href="mailto:${person.email}">${person.email}</a>
          <a href="${person.siteUrl}" target="_blank">Ссылка на страницу, сайт или репозиторий</a>
        </div>
      `)
      // Метод join("") склеивает массив строк-карточек в одну строку без разделителя.
      // Без join() элементы массива при присвоении в innerHTML были бы разделены запятыми.
      .join("");
  })
  // Если загрузить файл или обработать данные не удалось, выводим ошибку в консоль.
  // .catch() ловит ошибки любого предыдущего шага цепочки:
  // сетевой сбой, отсутствие файла, некорректный JSON, отсутствие нужного элемента на странице.
  .catch(error => console.error("Не удалось загрузить данные о программе:", error));
