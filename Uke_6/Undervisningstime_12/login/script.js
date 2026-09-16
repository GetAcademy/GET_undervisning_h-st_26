//Model
const model = {
  app: document.getElementById("app"),
  viewState: {},
  data: {},
};

//View
updateView();
function updateView() {
  app.innerHTML = /*HTML*/ `
        <h1>Login</h1>

    `;
}

//Controller
