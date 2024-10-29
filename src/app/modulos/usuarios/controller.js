const DataBase = require('../../database/DataBase');
const Entidad = 'usuario';

function getAll(){
    return DataBase.getAll(Entidad);
}

module.exports = {
    getAll,
}