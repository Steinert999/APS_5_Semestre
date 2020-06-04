const excel = require('excel4node');
const DataConfirmed = require('../models/DataConfirmed');
const DataSul = require('../models/DataSul')
const DataLogin = require('../models/DataLogin')
const moment = require('moment')

const getSheetData = async (req,res, next) => {

  let confirmados = await DataConfirmed.find({}).lean()
  confirmados = confirmados[confirmados.length - 1]
  let dados_sul = await DataSul.find({}).lean()
  dados_sul = dados_sul.length > 1 ? dados_sul[dados_sul.length - 1] : dados_sul[0]
  let dados_login = await DataLogin.find({}).lean()

  let workbook = new excel.Workbook();

  let worksheet = workbook.addWorksheet('Data total')
  let worksheet2 = workbook.addWorksheet('Dados sul')
  let worksheet3 = workbook.addWorksheet('Dados usuários')

  let style = workbook.createStyle({
    defaultFont: {
      size: 12,
      name: 'Arial',
      color: 'FFFFFFFF',
    },
    dateFormat: 'd/m/yy hh:mm:ss',
    author: 'Vitor Lavarda e Guilherme Steinert',
  });
  
  worksheet.cell(1,1).string(`${confirmados.confirmados.titulo}`).style(style);
  worksheet.cell(2,1).string(parseInt(confirmados.confirmados.total).toLocaleString('pt-BR', { style: 'decimal' })).style(style);
  worksheet.cell(1,2).string(`Novos casos`).style(style);
  worksheet.cell(2,2).string(parseInt(confirmados.confirmados.novos).toLocaleString('pt-BR', { style: 'decimal' })).style(style);
  worksheet.cell(1,3).string(`Recuperados dos casos`).style(style);
  worksheet.cell(2,3).string(parseInt(confirmados.confirmados.recuperados).toLocaleString('pt-BR', { style: 'decimal' })).style(style);
  worksheet.cell(1,4).string(`Em acompanhamento`).style(style);
  worksheet.cell(2,4).string(parseInt(confirmados.confirmados.acompanhamento).toLocaleString('pt-BR', { style: 'decimal' })).style(style);
  worksheet.cell(1,5).string(`Data atualização`).style(style);
  worksheet.cell(2,5).string(`${moment(confirmados.dt_updated).format("DD/MM/YYYY")}`).style(style);
  worksheet.cell(4,1).string(`${confirmados.obitos.titulo}`).style(style);
  worksheet.cell(5,1).string(parseInt(confirmados.obitos.total).toLocaleString('pt-BR', { style: 'decimal' })).style(style);
  worksheet.cell(4,2).string(`Novos obitos`).style(style);
  worksheet.cell(5,2).string(parseInt(confirmados.obitos.novos).toLocaleString('pt-BR', { style: 'decimal' })).style(style);
  worksheet.cell(4,3).string(`Letalidade`).style(style);
  worksheet.cell(5,3).string(`${confirmados.obitos.letalidade.toLocaleString('pt-BR', { style: 'percent' })}%`).style(style);
  worksheet.cell(4,4).string(`Mortalidade`).style(style);
  worksheet.cell(5,4).string(`${confirmados.obitos.mortalidade.toLocaleString('pt-BR', { style: 'percent' })}%`).style(style);
  worksheet.cell(4,5).string(`Data atualização`).style(style);
  worksheet.cell(5,5).string(`${moment(confirmados.dt_updated).format("DD/MM/YYYY")}`).style(style);

  worksheet2.cell(1,1).string('Casos acumulados sul').style(style)
  worksheet2.cell(2,1).string(parseInt(dados_sul.casosAcumulados).toLocaleString('pt-BR', { style: 'decimal' })).style(style);
  worksheet2.cell(1,2).string('Obitos acumulados sul').style(style)
  worksheet2.cell(2,2).string(parseInt(dados_sul.obitosAcumulados).toLocaleString('pt-BR', { style: 'decimal' })).style(style);

  worksheet3.cell(1,1).string('Quantidade de usuários').style(style)
  worksheet3.cell(2,1).string(parseInt(dados_login.length).toLocaleString('pt-BR', { style: 'decimal' })).style(style);
  worksheet3.cell(1,2).string('Primeiro usúario cadastrado').style(style)
  worksheet3.cell(2,2).string(dados_login[0].email).style(style);
  worksheet3.cell(1,3).string('Último usúario cadastrado').style(style)
  worksheet3.cell(2,3).string(dados_login.length > 1 ? dados_login[dados_login.length - 1].email : dados_login[0].email).style(style);
  
  workbook.write(`Relatorio.xlsx`, res);
  let binarybuffer = workbook.attachment('.xlsx'); 
  
  res.status(200).send({
    message: "Ok",
  })
  return res.send(binarybuffer);
};

module.exports = {
  getSheetData,
}
