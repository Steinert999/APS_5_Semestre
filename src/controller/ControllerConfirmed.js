const service = require('../services/DataService');

const getData = async (req,res,next) => service.getData(req, res, next);

module.exports = {
    getData,
}
