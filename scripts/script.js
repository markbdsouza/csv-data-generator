import { generateFile } from './filegeneration.js';
import { createExcelRowData } from './datageneration.js';

const generateBtn = document.getElementById('generate-button');
const rowCountEl = document.getElementById('row-count');
const dataInputContainer = document.querySelector('.data-input-container');
const introduction = document.querySelector('.introduction');
const getStarted = document.getElementById('getStarted');
const mainContent = document.getElementById('main-content');
const closeBtnForInputSelector = document.getElementById('closeInputSelector');
const inputSelectorBkg = document.querySelector('.select-input-background');

const ROWS_TO_START_WITH = 3;

const selectInputContainer = document.querySelector('.select-input-container');

let DOMrows = [];
let i = 1;
let selectedRow;

function addValuesToOptions() {
  ALL_OPTIONS.forEach((option) => {
    let optionEl = document.createElement('button');
    optionEl.classList.add('btn');
    optionEl.classList.add('selectOption');
    optionEl.dataset.value = option.value;
    optionEl.innerText = option.name;
    optionEl.addEventListener('click', (e) => {
      //add value to current row
      selectedRow.querySelector(
        '.inputSelection'
      ).innerHTML = `${e.target.textContent} <i class="fa fa-angle-down"></i>`;
      selectedRow.querySelector('.inputSelection').dataset.value =
        e.target.dataset.value;
      inputSelectorBkg.classList.remove('show');
    });
    selectInputContainer.appendChild(optionEl);
  });
}

function fetchDOMValues() {
  let dataConfig = [];
  const rows = document.querySelectorAll('.row');
  rows.forEach((row, index) => {
    // to exclude the header which is the first row
    console.log(row);
    if (index >= 1) {
      dataConfig.push({
        columnName: row.querySelector('.columnName').value,
        type: row.querySelector('.inputSelection').dataset.value,
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

const ALL_OPTIONS = [
  {
    name: 'Random String',
    value: 'randomString',
    // createData() {
    //   let characters =
    //     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //   return characters[Math.floor(Math.random() * characters.length)];
    // },
  },
  {
    name: 'Sequence Generated Integer',
    value: 'index',
  },
  {
    name: 'Random Integer',
    value: 'randomInteger',
  },
  {
    name: 'Full Name',
    value: 'fullName',
  },
  {
    name: 'Address',
    value: 'address',
  },
  {
    name: 'Phone',
    value: 'phone',
  },
  {
    name: 'e-mail',
    value: 'email',
  },
];

addValuesToOptions();
