function generateDataArrayForColumn(totalRowCount, columnConfig) {
  let result = [];
  let columnCountArray = Array.from(Array(totalRowCount), (x, i) => i);
  columnCountArray.forEach((x, i) => {
    result.push(columnConfig.getData());
  });
  return result;
}

function createHeaders(dataConfig) {
  let headers = dataConfig.map((a) => a.columnName);
  return headers;
}

export function createExcelRowData(totalRowCount, dataConfig) {
  const rows = [];
  rows.push(createHeaders(dataConfig));
  let createDataSet = [];
  dataConfig.forEach((columnConfig) => {
    createDataSet.push(generateDataArrayForColumn(totalRowCount, columnConfig));
  });

  for (let i = 0; i < totalRowCount; i++) {
    let rowData = [];
    createDataSet.forEach((columnData) => {
      rowData.push(columnData[i]);
    });
    rows.push(rowData);
  }

  return rows;
}
