import { generateFile } from './filegeneration.js';
import { cellHeaders } from './tableScript.js';

const generateBtn = document.getElementById('generate-button');
const rowCountEl = document.getElementById('row-count');

let rowCount;
let rows = [];
let columnHeaders = [];

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

//event listeners
generateBtn.addEventListener('click', () => {
  fetchDOMValues();
  //generateRandomData();
  setRowData();
  //   console.log(rows);
  generateFile(rows);
});
// cellHeaders('respTable');
