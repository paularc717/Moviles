const mysql = require('mysql2')
const config = require('../config')

const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conn;
let reintentos = 0;
const maxreintentos = 3;

function conDB(){
    conn = mysql.createConnection(dbConfig);

    conn.connect((error) => {
        if(error){
            reintentos ++;
            console.log(`Error de conexion a la DB: ${error}`);
            if(reintentos >= maxreintentos)            
                process.exit(1);
            setTimeout(conDB, 200);
        }
        else{
            console.log('Conexion a la DB exitosa');
        }
    });
}

conDB();

function getAll(entidad){
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${entidad}`, (error, result) => {
            if(error)
                return reject(error);
            
            return resolve(result);
        })
    } );
}

function getById(entidad, id){
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM ${entidad} WHERE Id = ?`;
        conn.query(query, [id], (error, result) => {
            if (error) {
                return reject(error);
            }
            if (result.length === 0) {
                return reject(new Error('No se encontró el registro'));
            }
            return resolve(result);
        });
    });
}

function login(user, pass) {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM usuario WHERE usuario = ? AND clave = ?';

        conn.query(query, [user, pass], (error, result) => {
            if (error) {
                return reject(error);
            }

            if (result.length === 0) {
                return reject(new Error('Credenciales incorrectas'));
            }
            return resolve(result[0]);
        });
    });
}

module.exports = {
    getAll,
    getById,
    login
}