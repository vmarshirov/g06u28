fetch("./data/program.json")
  .then(response => response.json())
  .then(data => {
    document.title = data.program.title;
    document.querySelector("#program-title").textContent = data.program.title;
    document.querySelector("#program-description").textContent = data.program.description;
    document.querySelector("#program-details").textContent = data.program.details;

    document.querySelector("#program-tags").innerHTML = data.program.tags
      .map(tag => `<span class="badge text-bg-secondary me-1 mb-1">${tag}</span>`)
      .join("");

    document.querySelector("#student-site-link").href = data.people[0].siteUrl;

    document.querySelector("#people-list").innerHTML = data.people
      .map(person => `
        <div class="col">
          <div class="card h-100">
            <img src="${person.photo}" class="card-img-top" alt="${person.alt}">
            <div class="card-body">
              <p class="card-subtitle text-secondary">${person.role}</p>
              <h3 class="card-title h5">${person.name}</h3>
              <p class="card-text small text-muted">${person.note}</p>
              <a href="mailto:${person.email}">${person.email}</a>
            </div>
          </div>
        </div>
      `)
      .join("");
  });
