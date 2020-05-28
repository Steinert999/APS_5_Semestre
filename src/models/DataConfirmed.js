const moongose = require('mongoose');

const DataConfirmed = new moongose.Schema({
    confirmados: new moongose.Schema.Types.Mixed,
    obitos: new moongose.Schema.Types.Mixed,
    dt_updated: String, // TO-DO maybe date?
}, {
    timestamps: true,
});

module.exports = moongose.model('DataConfirmed',DataConfirmed);