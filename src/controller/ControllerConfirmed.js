const api = require('../services/connections')
const DataConfirmed = require('../models/DataConfirmed')

exports.getData = async (req,res,next) => {
    api.get('https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi').then( (r) => {
        if ( r ) { 
            console.log("RES", r.data)
            let obj_formated = {}
            obj_formated.confirmados = r.data.confirmados
            obj_formated.obitos = r.data.obitos
            obj_formated.dt_updated = r.data.dt_updated
            let dados = new DataConfirmed(obj_formated)
            dados.save()
            return res.json(obj_formated);
        }
    })
}