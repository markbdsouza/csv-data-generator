import { generateFile } from './filegeneration.js';
import { cellHeaders } from './tableScript.js';
import {
  generateDataArrayForColumn,
  createExcelRowData,
} from './datageneration.js';

const generateBtn = document.getElementById('generate-button');
const rowCountEl = document.getElementById('row-count');
const dataInputContainer = document.querySelector('.data-input-container');
const header = document.querySelector('.header-section');
const introduction = document.querySelector('.introduction');
const getStarted = document.getElementById('getStarted');
const mainContent = document.getElementById('main-content');
const ROWS_TO_START_WITH = 6;
let rowCount;
let rows = [];
let columnHeaders = [];
let DOMrows = [];
let i = 1;

function fetchDOMValues() {
  columnHeaders = [];
  rowCount = +rowCountEl.value;
  const columnHeaderEl = document.querySelectorAll('.columnName');
  columnHeaderEl.forEach((col) => {
    columnHeaders.push(col.value);
  });
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

<div class="column actions">
<button class="add"> <i class="far fa-plus-square fa-2x add"></i><span class="tooltiptext">Add a New Row</span></button>
<button class="delete"> <i class="fas fa-trash-alt fa-2x delete"></i><span class="tooltiptext">Delete Existing Row</span></button>

</div>
`;

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
    DOMrows = DOMrows.filter((row) => {
      console.log(row);
      console.log(parentRow.outerHTML);

      return row !== parentRow;
    });
    if (DOMrows.length === 0) {
      addToDOMRows();
    }
  }, 600);
}

function loadMainContainer() {
  introduction.classList.add('hide');
  mainContent.style.display = 'inline';
  setTimeout(() => {
    introduction.style.display = 'none';
  }, 1000);
}

let dataConfig = [
  {
    columnName: 'col1',
    type: 'index',
    maxLength: 100,
    minLength: 0,
    nullable: false,
  },
  {
    columnName: 'col2',
    type: 'randomInteger',
    maxLength: 100,
    minLength: 0,
    nullable: false,
  },
  {
    columnName: 'col3',
    type: 'randomCharacter',
    maxLength: 100,
    minLength: 0,
    nullable: false,
  },
];

//event listeners
generateBtn.addEventListener('click', () => {
  fetchDOMValues();
  // generateRandomData();

  rows = createExcelRowData(rowCount, dataConfig);
  console.log(rows);

  // generateFile(rows);
});

document.addEventListener('click', documentClick);
getStarted.addEventListener('click', loadMainContainer);

for (let i = 0; i < ROWS_TO_START_WITH; i++) {
  addToDOMRows();
}

loadMainContainer();

// console.log(generateDataArrayForColumn(10, 'index'));
