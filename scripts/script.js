import { generateFile } from './filegeneration.js';
import { createExcelRowData } from './datageneration.js';

// var randomName = faker.name.findName(); // Caitlyn Kerluke
// console.log(randomName);
var randomName = faker.name.findName(); // Caitlyn Kerluke
console.log(randomName);

const generateBtn = document.getElementById('generate-button');
const rowCountEl = document.getElementById('row-count');
const dataInputContainer = document.querySelector('.data-input-container');
const introduction = document.querySelector('.introduction');
const getStarted = document.getElementById('getStarted');
const mainContent = document.getElementById('main-content');
const closeBtnForInputSelector = document.getElementById('closeInputSelector');
const inputSelectorBkg = document.querySelector('.select-input-background');
const selectOptions = document.querySelectorAll('.selectOption');
const ROWS_TO_START_WITH = 3;

let DOMrows = [];
let i = 1;
let selectedRow;

function fetchDOMValues() {
  let dataConfig = [];
  const rows = document.querySelectorAll('.row');
  rows.forEach((row, index) => {
    // to exclude the header which is the first row
    if (index >= 1) {
      dataConfig.push({
        columnName: row.querySelector('.columnName').value,
        type: row.querySelector('.inputSelection').innerText,
        maxLength: 100,
        minLength: 0,
        nullable: false,
      });
    }
  });

  return dataConfig;
}

function addToDOMRows(rowClicked) {
  const newRow = document.createElement('div');
  newRow.classList.add('row');
  newRow.classList.add('hide');
  newRow.innerHTML = `  
    <div class="column">
      <input type="text" class="columnName" value="test${i + 1}">
    </div>
    <div class="column">
        <button class="inputSelection">Select <i class="fa fa-angle-down"></i> </button>
    </div>
    
    <div class="column actions">
      <button class="add"> <i class="far fa-plus-square fa-2x add"></i><span class="tooltiptext">Add a New Row</span></button>
      <button class="delete"> <i class="fas fa-trash-alt fa-2x delete"></i><span class="tooltiptext">Delete Existing Row</span></button>
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
  if (e.target.classList.contains('inputSelection')) {
    displayInputSelection(parentRow);
  }
}

function displayInputSelection(row) {
  inputSelectorBkg.classList.add('show');
  selectedRow = row;
}

function deleteRowFromDOM(parentRow) {
  parentRow.classList.add('hide');
  setTimeout(() => {
    dataInputContainer.removeChild(parentRow);
    DOMrows = DOMrows.filter((row) => {
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

function fetchDataAndGenerateFile() {
  let rowCount = +rowCountEl.value;
  let dataConfig = fetchDOMValues();
  let rows = createExcelRowData(rowCount, dataConfig);
  generateFile(rows);
}

//event listeners
generateBtn.addEventListener('click', fetchDataAndGenerateFile);
document.addEventListener('click', documentClick);
getStarted.addEventListener('click', loadMainContainer);
closeBtnForInputSelector.addEventListener('click', () => {
  inputSelectorBkg.classList.remove('show');
});

for (let i = 0; i < ROWS_TO_START_WITH; i++) {
  addToDOMRows();
}
loadMainContainer();

selectOptions.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    //add value to current row
    selectedRow.querySelector('.inputSelection').textContent =
      e.target.textContent;
    inputSelectorBkg.classList.remove('show');
  })
);
