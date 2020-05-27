const service = require('../services/DataService');

const getData = async (req,res,next) => service.getData();

module.exports = {
    getData,
}