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
    } else if (columnConfig.type === 'randomString') {
      let characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      result.push(characters[Math.floor(Math.random() * characters.length)]);
    } else if (columnConfig.type === 'fullName') {
      result.push(faker.name.findName());
    } else if (columnConfig.type === 'email') {
      result.push(faker.internet.email());
    } else if (columnConfig.type === 'phone') {
      result.push(faker.phone.phoneNumber());
    } else if (columnConfig.type === 'address') {
      result.push(faker.address.streetAddress());
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
