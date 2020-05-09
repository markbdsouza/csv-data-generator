export function generateDataArrayForColumn(totalRowCount, columnConfig) {
  console.log(columnConfig);
  console.log(columnConfig.type);
  let result = [];
  let columnCountArray = Array.from(Array(totalRowCount), (x, i) => i);
  columnCountArray.forEach((x, i) => {
    if (columnConfig.type === 'index') {
      result.push(`${i + 1}`);
    } else if (columnConfig.type === 'randomInteger') {
      result.push(Math.floor(Math.random() * 100));
    } else if (columnConfig.type === 'randomCharacter') {
      let characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      result.push(characters[Math.floor(Math.random() * characters.length)]);
    } else result.push(`NOT SPECIFIED`);
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
