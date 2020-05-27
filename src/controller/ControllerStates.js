const service = require('../services/DataService');
const getStatesData = async (req, res, next) => service.getStatesData();
module.exports = {
    getStatesData
}