updateView();
function updateView() {
  let page = "";
  if (model.viewState.currentPage === "home") {
    page = homeView();
  }
  if (model.viewState.currentPage === "details") {
    page = detailsView();
  }

  model.app.innerHTML = /*HTML*/ `
  <header>
            <h1>Utforsk Norge</h1>
            <p>
                Oppdag noen spennende steder å besøke.
            </p>
        </header>
      <main>${page}</main>
      <footer>
        <p>Utforsk Norge</p>
      </footer>
  `;
}

function homeView() {
  return /*HTML*/ `
            <section>
                <h2>Reisemål</h2>
                <div>${displayCards()}</div>
            </section>
    `;
}

function displayCards() {
  let html = "";
  for (let i = 0; i < model.data.places.length; i++) {
    const place = model.data.places[i];
    html += /*HTML*/ `
            <article>
                <h2>${place.title}</h2>
                <span>${place.category}</span>
                <p>${place.shortDescription}</p>
                <button onclick="showDetails(${place.id})">Les mer</button>
            </article>
        `;
  }
  return html;
}

function detailsView() {
  const place = getSelectedPlace();
  return /*HTML*/ `
      <section>
        <button onclick="goBack()">← Tilbake</button>
            <article>
                <h1>${place.title}</h1>
                <span>${place.category}</span>
                <p>${place.description}</p>
                <section>
                    <h2>Informasjon</h2>
                    <p><strong>Region:</strong>${place.region}</p>
                    <p><strong>Innbyggere:</strong>${place.population}</p>
                </section>
                <section>
                    <h2>Ting å gjøre</h2>
                    <ul>${displayActivities(place.activities)}</ul>
                </section>
            </article>
        </section>
    `;
}

function displayActivities(activities) {
  let html = "";
  for (let i = 0; i < activities.length; i++) {
    html += /*HTML*/ `
            <li>${activities[i]}</li>
        `;
  }
  return html;
}
