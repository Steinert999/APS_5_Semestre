const api = require('../services/connections')
const DataSul = require('../models/DataSul')

module.exports = {
    async getData(req,res, next) {
        api.get('https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalSintese').then( (r) => {
            if ( r ) { 
                let obj_formated = {}
                r.data.forEach( (v) => {
                    if (v._id == 'Sul') {
                        obj_formated.state = v._id
                        obj_formated.casosAcumulados = v.casosAcumulado
                        obj_formated.obitosAcumulados = v.obitosAcumulado
                        obj_formated.listaCasos = v.listaConfirmados
                    }
                })
                let dados = new DataSul(obj_formated)
                dados.save()
                return res.json(obj_formated);
            }
        })
    },
}