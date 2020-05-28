const repository = require('../repositories/DataRepository');

const getData = (req, res, next) => repository.getData(req, res, next);
const getSouthData = (req, res, next) => repository.getSouthData(req, res, next);
const getStatesData = (req, res, next) => repository.getStatesData(req, res, next);

module.exports = {
    getData,
    getSouthData,
    getStatesData
}
