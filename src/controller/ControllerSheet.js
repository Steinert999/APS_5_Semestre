const xl = require('excel4node');
const service = require('../services/DataService');
const getSheetData = (req,res, next) => {
  const data = service.getData();
  console.log(JSON.stringify(data));
  var wb = new xl.Workbook();
  var ws = wb.addWorksheet('SHEET_NAME');
  ws.cell(1, 1).string('ALL YOUR EXCEL SHEET FILE CONTENT');
  wb.write(`Relatorio.xlsx`, res);
  let binarybuffer = 
  res.attachment('.xlsx'); 
  return res.send(binarybuffer);
};

module.exports = {
  getSheetData,
}
