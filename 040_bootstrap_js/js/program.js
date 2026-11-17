// Загружаем данные о программе и её участниках.
fetch("./data/program.json")
  .then(response => response.json())
  .then(({ program, people }) => {
    // Название программы — в заголовок вкладки браузера и в заголовок страницы.
    document.title = program.title;
    document.querySelector("#program-title").textContent = program.title;
    // textContent вставляет именно текст, а не HTML — это безопасно.
    document.querySelector("#program-description").textContent = program.description;
    document.querySelector("#program-details").textContent = program.details;
    document.querySelector("#programUrl").href = program.programUrl;

    // Для каждого участника строим HTML-карточку, склеиваем и вставляем в контейнер.
    document.querySelector("#people-list").innerHTML = people
      .map(person => `
        <div class="col">
          <div class="d-flex flex-column m-1 p-1 border bg-body" style="width: min-content;">
            <img src="${person.photo}" class="card-img people" alt="${person.alt}">
            <div class="card-body">
              <p class="card-subtitle text-secondary">${person.role}</p>
              <h6 class="card-title">${person.name}</h6>
              <p class="card-text">${person.note}</p>
              <a href="mailto:${person.email}">${person.email}</a>
              <a href="${person.siteUrl}" target="_blank"><br>Ссылка на страницу, сайт или репозиторий</a>
            </div>
          </div>
        </div>
      `)
      .join("");
  })
  // Если загрузить файл или обработать данные не удалось, выводим ошибку в консоль.
  .catch(error => console.error("Не удалось загрузить данные программы:", error));
