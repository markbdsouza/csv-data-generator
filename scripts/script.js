import { generateFile } from './filegeneration.js';
import { cellHeaders } from './tableScript.js';

const generateBtn = document.getElementById('generate-button');
const rowCountEl = document.getElementById('row-count');
const dataInputContainer = document.querySelector('.data-input-container');
const header = document.querySelector('.header-section');
const introduction = document.querySelector('.introduction');

let rowCount;
let rows = [];
let columnHeaders = [];
let DOMrows = [];
let i = 1;

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

function addToDOMRows(rowClicked) {
  const existingMaxIndex = DOMrows.length;

  const newRow = document.createElement('div');
  newRow.classList.add('row');
  newRow.classList.add('hide');
  newRow.innerHTML = `  <div class="column">
  <input type="text" class="columnName" value="test${i + 1}">
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
  </div>`;

  DOMrows.push(newRow);

  if (rowClicked) {
    rowClicked.insertAdjacentElement('afterend', newRow);
  } else {
    dataInputContainer.insertAdjacentElement('beforeend', newRow);
  }

  setTimeout(() => {
    newRow.classList.remove('hide');
  }, 100);

  i++;
}

function documentClick(e) {
  const parentRow = e.target.closest('.row');
  if (e.target.classList.contains('add')) {
    addToDOMRows(parentRow);
  }
  if (e.target.classList.contains('delete')) {
    deleteRowFromDOM(parentRow);
  }
}

function deleteRowFromDOM(parentRow) {
  parentRow.classList.add('hide');
  setTimeout(() => {
    dataInputContainer.removeChild(parentRow);
    console.log(DOMrows);
    DOMrows = DOMrows.filter((row) => {
      console.log(row);
      console.log(parentRow.outerHTML);

      return row !== parentRow;
    });
    if (DOMrows.length === 0) {
      addToDOMRows();
    }
    console.log(DOMrows);
  }, 600);
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
document.addEventListener('click', (e) => {
  introduction.style.display = 'none';
});

addToDOMRows();
