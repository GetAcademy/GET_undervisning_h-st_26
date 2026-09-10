//Model
const app = document.getElementById("app");
const list = [
  "Handle middag",
  "Gå tur med barna",
  "Hente svigermor fra mentalsykehuset",
];

let editIndex = -1;

//View
updateView();
function updateView() {
  app.innerHTML = /*HTML*/ `
        <h1>ToDo</h1>
        <input
            type="text"
            placeholder="Legg til"
            onchange="addItem(this.value)">

        <table>${displayList()}</table>
    `;
}

//Read
function displayList() {
  let html = "";
  for (let i = 0; i < list.length; i++) {
    if (i === editIndex) {
      html += /*HTML*/ `
            <tr>
                <td>
                    <input
                        value="${list[i]}"
                        onchange="editItem(${i}, this.value)">
                </td>
                <td>
                   
                </td>
                <td>
                    <button onclick="deleteItem(${i})">Slett</button>
                </td>
            </tr>
            `;
    } else {
      html += /*HTML*/ `
            <tr>
                <td>${list[i]}</td>
                <td>
                    <button onclick="startEdit(${i})">Endre</button>
                </td>
                <td>
                    <button onclick="deleteItem(${i})">Slett</button>
                </td>
            </tr>
            `;
    }
  }
  return html;
}

//Controller

//Create
function addItem(newItem) {
  list.push(newItem);
  updateView();
}

//Update
function startEdit(index) {
  editIndex = index;
  updateView();
}

function editItem(index, newValue) {
  list[index] = newValue;
  editIndex = -1;
  updateView();
}

//Delete
function deleteItem(index) {
  list.splice(index, 1);
  editIndex = -1;
  updateView();
}
