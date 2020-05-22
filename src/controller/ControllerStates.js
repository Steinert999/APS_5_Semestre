const api = require('../services/connections')
const DataStates = require('../models/DataStates')

module.exports = {
    async getData(req, res, next) {
        api.get('https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalEstado').then( (r) => {
            if ( r ) { 
                let obj_formated = {}
                r.data.forEach( (v,i) => {
                    if ( v._id == req.params.estado ) {
                        obj_formated.state = v.nome
                        obj_formated.casosAcumulados = v.casosAcumulado
                        obj_formated.obitosAcumulado = v.obitosAcumulado
                        obj_formated.incidencia = v.incidencia
                        obj_formated.incidenciaObito = v.incidenciaObito
                    } 
                })
                let dados = new DataStates(obj_formated)
                dados.save()
                return res.json(obj_formated);
            }
        })

    },
}