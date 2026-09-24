function showDetails(id) {
  model.viewState.selectedPlaceId = id;
  model.viewState.currentPage = "details";
  updateView();
}

function goBack() {
  model.viewState.currentPage = "home";
  model.viewState.selectedPlaceId = null;
  updateView();
}

function getSelectedPlace() {
  for (let i = 0; i < model.data.places.length; i++) {
    if (model.data.places[i].id === model.viewState.selectedPlaceId) {
      return model.data.places[i];
    }
  }
}
