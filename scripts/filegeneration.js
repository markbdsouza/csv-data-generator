function downloadFile(csvFile, filename) {
  var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
  if (navigator.msSaveBlob) {
    //for IE
    navigator.msSaveBlob(blob, filename);
  } else {
    //Chrome and Firefox
    var link = document.createElement('a');
    if (link.download !== undefined) {
      var url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}

export function generateFile(rows) {
  let csvFile = '';
  var d = new Date();

  let filename = `CSV_Data_${d.getFullYear()}_${
    d.getMonth() + 1
  }_${d.getDate()} ${d.getHours()}:${d.getMinutes()}.csv`;

  rows.forEach(function (rowArray) {
    let row = rowArray.join(',');
    csvFile += row + '\r\n';
  });
  downloadFile(csvFile, filename);
}
