// Отправляем HTTP-запрос (GET) за файлом с данными о программе.
fetch("./data/program.json")
  // Когда сервер ответил, получаем объект response (заголовки, статус, тело).
  .then(response => response.json())
  // Когда JSON разобран, в data лежит готовый JavaScript-объект
  .then(data => {
    // Отладочный вывод в консоль браузера (F12): объект с данными о программе.
    console.log(data.program)
    // Отладочный вывод в консоль браузера: массив участников программы.
    console.log(data.people)
    // Меняем текст вкладки браузера (тег <title>) на название программы из JSON.
    document.title = data.program.title;
    // Находим на странице элемент с id="program-title" (заголовок <h5>)
    // и заменяем его текст названием программы.
    document.querySelector("#program-title").textContent = data.program.title;
    // Находим абзац с id="program-description" и записываем в него краткое описание программы.
    document.querySelector("#program-description").textContent = data.program.description;
    // Находим элемент с id="program-details" (раздел «О программе») и записываем подробности.
    document.querySelector("#program-details").textContent = data.program.details;
    // Находим элемент с id="programUrl" и вставляем в него ссылку на страницу программы.
    // <br> переносит ссылку на новую строку; текстом ссылки служит сам адрес.
    document.querySelector("#programUrl").innerHTML =
      `<a href="${data.program.programUrl}" target="_blank"><br>${data.program.programUrl}</a>`;
    // Находим контейнер с id="people-list" и целиком заменяем его внутреннее HTML-содержимое (innerHTML)
    // на строку, которая будет получена цепочкой методов ниже.
    document.querySelector("#people-list").innerHTML = data.people
      // Метод map() проходит по массиву people и для КАЖДОГО человека (person)
      // возвращает строку с HTML-разметкой его карточки.
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
      .join("");
  })
  // Если загрузить файл или обработать данные не удалось, выводим ошибку в консоль.
  .catch(error => console.error("Не удалось загрузить данные о программе:", error));
