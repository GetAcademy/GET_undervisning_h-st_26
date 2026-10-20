function adminHeaderButton(textContent, pageName) {
  let className = "";
  if (model.app.currentPage !== pageName) className = "defaultButton";
  console.log(pageName);
  return /*HTML*/ `
    <button onclick="changePage('${pageName}')" class="adminButton ${className}">${textContent}</button>
`;
}
//la til fnutter rundt parameteret i changePage for å få det til å fungere
