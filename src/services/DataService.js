const repository = require('../repositories/DataRepository');

const getData = () => repository.getData();
const getSouthData = () => repository.getSouthData();
const getStatesData = () => repository.getStatesData();

module.exports = {
    getData,
    getSouthData,
    getStatesData
}