const DATA_URL = 'https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com';

const api = require('../config/connections');
const DataConfirmed = require('../models/DataConfirmed');
const DataSul = require('../models/DataSul');
const DataStates = require('../models/DataStates');

const getData = async (req, res, next) => { 
    const r = await api.get(`${DATA_URL}/prod/PortalGeralApi`)
    if ( r ) {
        let obj_formated = {}
        obj_formated.confirmados = r.data.confirmados
        obj_formated.obitos = r.data.obitos
        obj_formated.dt_updated = r.data.dt_updated
        let dados = new DataConfirmed(obj_formated)
        await dados.save()
        return res.json(obj_formated);
    }
}

const getSouthData = async (req, res, next) => { 
    const r = await api.get(`${DATA_URL}/prod/PortalSintese`)
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
        await dados.save()
        return res.json(obj_formated);
    }
}

const getStatesData = async (req, res, next) =>  {
    const r = await api.get(`${DATA_URL}/prod/PortalEstado`)
    if ( r ) { 
        let obj_formated = {}
        r.data.forEach( (v,i) => {
            if ( v._id == req.headers.estados ) {
                obj_formated.state = v.nome
                obj_formated.casosAcumulados = v.casosAcumulado
                obj_formated.obitosAcumulado = v.obitosAcumulado
                obj_formated.incidencia = v.incidencia
                obj_formated.incidenciaObito = v.incidenciaObito
            } 
        })
        let dados = new DataStates(obj_formated)
        await dados.save()
        return res.json(obj_formated);
    }
}

module.exports = {
    getData,
    getSouthData,
    getStatesData
}
