//Model
const app = document.getElementById("app");
const list = [
  "Handle middag",
  "Gå tur med barna",
  "Hente svigermor fra mentalsykehuset",
];

let editIndex = -1;
let dragIndex = -1;

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
            <tr draggable="${editIndex === -1}"
                ondragstart="startDrag(event, ${i})"
                ondragover="allowDrop(event)"
                ondrop="dropItem(event, ${i})"
                ondragend="endDrag()">
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

//Drag and drop
function startDrag(event, index) {
  if (editIndex !== -1) {
    event.preventDefault();
    return;
  }
  dragIndex = index;
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", String(index));
}

function allowDrop(event) {
  if (dragIndex === -1 || editIndex !== -1) return;
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
}

function dropItem(event, targetIndex) {
  if (dragIndex === -1 || editIndex !== -1) return;
  event.preventDefault();

  const row = event.currentTarget.getBoundingClientRect();
  const dropAfter = event.clientY >= row.top + row.height / 2;
  let insertIndex = targetIndex + (dropAfter ? 1 : 0);

  if (dragIndex < insertIndex) insertIndex--;
  const item = list.splice(dragIndex, 1)[0];
  list.splice(insertIndex, 0, item);
  endDrag();
  updateView();
}

function endDrag() {
  dragIndex = -1;
}

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
