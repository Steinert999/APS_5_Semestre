const repository = require('../repositories/DataRepository');

const getData = async (req, res, next) => repository.getData(req, res, next);
const getSouthData = async (req, res, next) => repository.getSouthData(req, res, next);
const getStatesData = async (req, res, next) => repository.getStatesData(req, res, next);

module.exports = {
    getData,
    getSouthData,
    getStatesData
}
