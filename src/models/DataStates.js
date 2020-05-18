const moongose = require('mongoose');

const DataStatesSchema = new moongose.Schema({
    state: String,
    casosAcumulados: Number,
    obitosAcumulado: Number,
    incidencia: String,
    incidenciaObito: String,
}, {
    timestamps: true,
});

module.exports = moongose.model('DataStatesSchema',DataStatesSchema);