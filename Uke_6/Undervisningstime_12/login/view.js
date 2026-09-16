//View
updateView();
function updateView() {
  let page = "";
  if (model.app.currentPage == "homepage") page = homePage();
  if (model.app.currentPage == "login") page = logInPage();

  model.app.display.innerHTML = /*HTML*/ `
    <h1>Fjesboka</h1>
    <main>${page}</main>
  `;
}

function homePage() {
  return /*HTML*/ `
    <button>Log out</button>
    <h2>Welcome user</h2>
    <p></p>
    `;
}

function logInPage() {
  return /*HTML*/ `
    <h2>Log In</h2>
      <form>
        <input type="text" placeholder="username" >
        <input type="text" placeholder="password" >
    </form>
    <button>Log in</button>

    `;
}
