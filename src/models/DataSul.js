const moongose = require('mongoose');

const DataSulSchema = new moongose.Schema({
    state: String,
    casosAcumulados: Number,
    obitosAcumulados: Number,
    listaCasos: Array,
}, {
    timestamps: true,
});

module.exports = moongose.model('DataSulSchema',DataSulSchema);