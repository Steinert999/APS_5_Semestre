const service = require('../services/DataService');

const getSouthData = async (req,res,next) => service.getSouthData(req, res, next);

module.exports = {
    getSouthData
}
