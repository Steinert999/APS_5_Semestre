const moongose = require('mongoose');

const DataLogin = new moongose.Schema({
    email: String,
    password: String,
});

module.exports = moongose.model('DataLogin', DataLogin);