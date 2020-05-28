const service = require('../services/DataService');
const getStatesData = async (req, res, next) => service.getStatesDatas(req,res,next);
module.exports = {
    getStatesData
}