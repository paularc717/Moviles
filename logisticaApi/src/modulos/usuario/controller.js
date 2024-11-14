const db = require('../../DB/db');
const Entidad = 'usuario';

function getAll(){
    return db.getAll(Entidad);
}

function getById(id){
    return db.getById(Entidad,id)
}

function login(user, pass) {
    return db.login(user, pass)
}

module.exports = {
    getAll,
    getById,
    login
}