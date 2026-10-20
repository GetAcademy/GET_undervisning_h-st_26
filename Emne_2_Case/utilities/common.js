function changePage(newPage) {
  console.log(newPage);
  model.app.currentPage = newPage;
  updateView();
}
