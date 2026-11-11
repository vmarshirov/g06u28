// Отправляем HTTP-запрос (GET) за файлом с данными о программе.
fetch("./data/program.json")
  .then(response => response.json())
  // Когда JSON разобран, в data лежит готовый JavaScript-объект
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
      .map(person => `
        <div class="col">
          <div class="d-flex flex-column m-1 p-1 border bg-body" style="width: min-content;">
            <img src="${person.photo}" class="card-img people" alt="${person.alt}">
            <div class="card-body">
              <p class="card-subtitle text-secondary">${person.role}</p>
              <h6 class="card-title">${person.name}</h6>
              <p class="card-text ">${person.note}</p>
              <a href="mailto:${person.email}">${person.email}</a>
              <a href="${person.siteUrl}" target="_blank"><br>Ссылка на страницу, сайт или репозиторий</a>
            </div>
          </div>
        </div>
      `)
      // Метод join("") склеивает массив строк-карточек в одну строку без разделителя.
     .join("");
      
  });
