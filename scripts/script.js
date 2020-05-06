import { generateFile } from './filegeneration.js';
import { cellHeaders } from './tableScript.js';

const generateBtn = document.getElementById('generate-button');
const rowCountEl = document.getElementById('row-count');
const dataInputContainer = document.querySelector('.data-input-container');

let rowCount;
let rows = [];
let columnHeaders = [];
let DOMrows = [];

function fetchDOMValues() {
  columnHeaders = [];
  rowCount = +rowCountEl.value;
  const columnHeaderEl = document.querySelectorAll('.columnName');
  console.log(columnHeaderEl);
  columnHeaderEl.forEach((col) => {
    columnHeaders.push(col.value);
  });
}

function generateRandomData() {
  rows = [];
  let columnCountArray = Array.from(Array(rowCount), (x, i) => i);
  columnCountArray.forEach((x, i) => {
    rows.push([`${i + 1}`, 'omg']);
  });
}

function generateRows() {
  let rows = [
    ['asd', 'city1', 'some other info'],
    ['name2', 'city2', 'more info'],
  ];
  return rows;
}

function setRowData() {
  rows = [];
  rows.push([columnHeaders]);
}

function addToDOMRows(index = 0) {
  const existingMaxIndex = DOMrows.length;

  let newRowHTML = `<div class="row">
  <div class="column">
  <input type="text" class="columnName" value="test1">
</div>
<div class="column">
  <select class="select-css">
      <option value="random">Random Data</option>
      <option value="data">data</option>
  </select>
</div>
<div class="column">
  <input type="text" class="columnName" value="test1">
</div>
<div class="column actions">
  <i class="far fa-plus-square fa-2x add"></i>
  <i class="fas fa-trash-alt fa-2x delete"></i>
  </div></div>`;
  dataInputContainer.insertAdjacentHTML('beforeend', newRowHTML);
}

function documentClick(e) {
  if (e.target.classList.contains('add')) {
    addToDOMRows();
  }
  if (e.target.classList.contains('delete')) {
    deleteRowFromDOM(e.target);
  }
}

function deleteRowFromDOM(e) {
  const parentRow = e.closest('.row');
  dataInputContainer.removeChild(parentRow);
}

//event listeners
generateBtn.addEventListener('click', () => {
  fetchDOMValues();
  //generateRandomData();
  setRowData();
  //   console.log(rows);
  generateFile(rows);
});
// cellHeaders('respTable');

document.addEventListener('click', documentClick);
