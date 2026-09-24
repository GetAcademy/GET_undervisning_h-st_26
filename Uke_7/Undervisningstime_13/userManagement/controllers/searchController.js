function search() {
  model.app.searchQuery = model.viewState.search.query;
  setPage("users");
}

function clearSearch() {
  model.app.searchQuery = "";
  model.viewState.search.query = "";
  updateView();
}
