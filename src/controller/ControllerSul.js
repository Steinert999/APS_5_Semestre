const api = require('./src/services/connections')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = {
    async getData() {
        api.get('https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalSintese').then( (res) => {
            if ( res ) { 
                this.formatData(res)
            }
        })
    },
    async formatData(data) {
        let data = data.map( (v,i) => {
            return v._id == 'Sul'
        })
        let dados_mock = {
            _id: 'Sul',
            casosAcumulado: 10615,
            obitosAcumulado: 336,
            listaConfirmados: [
                {
                    casosAcumulado: 3695,
                    obitosAcumulado: 132,
                    _id: "RS",
                },
                {
                    casosAcumulado: 4678,
                    obitosAcumulado: 81,
                    _id: "SC",
                },
                {
                    casosAcumulado: 2242,
                    obitosAcumulado: 123,
                    _id: "PR",
                },
            ]
        },
        this.saveData(data)
    },
    async saveData(data) {
        
    },
}