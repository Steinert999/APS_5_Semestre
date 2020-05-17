const api = require('./src/services/connections')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = {
    async getData(req, res) {
        api.get('https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalEstado').then( (res) => {
            if ( res ) { 
                this.formatData(res, req.params.estado)
            }
        })

    },
    async formatData(data, state) {
        let data = data.map( (v,i) => {
            return v._id == state
        })
        let dados_mock = {
            casosAcumulado:61183,
            incidencia:"133,2",
            incidenciaObito:"10,2",  
            nome:"SP",
            obitosAcumulado:4688,
            populacaoTCU2019:"45919049",
            _id:"SP",
        }
    },
    async saveData(data) {
        
    },
}