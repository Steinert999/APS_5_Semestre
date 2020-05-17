const api = require('./src/services/connections')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = {
    async getData() {
        api.get('https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi').then( (res) => {
            if ( res ) { 
                this.formatData(res.confimados)
            }
        })
    },
    async formatData(data) {
        let dados_mock = [
            {
                "confirmados": { 
                    "total":"233142",
                    "titulo":"Casos",
                    "novos":14919,
                    "incidencia":"110,9",
                    "recuperados":"89672",
                    "acompanhamento":"127837",
                    "percent":""
                },
                "obitos": {
                    "total":"15633",
                    "titulo":"Óbitos",
                    "novos":816,
                    "incidencia":"",
                    "letalidade":"6,7",
                    "mortalidade":"7,4",
                    "percent":""
                },
                "dt_updated":"2020-05-16T23:26:24.937Z",
            },
        ],
    },
    async saveData(data) {
        
    },
}