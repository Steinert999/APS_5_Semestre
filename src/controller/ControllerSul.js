const service = require('../services/DataService');

const getSouthData = async (req,res,next) => service.getSouthData();

module.exports = {
    getSouthData
}