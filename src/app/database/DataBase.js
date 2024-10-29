const mysql = require('mysql') 
const config = require('../config');
const { resolve } = require('@angular/compiler-cli');

const DataBaseConfig = {

    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password, 
    database: config.mysql.database,
}

let DBconnect;
let reintentos = 0; 
const maxreintentos = 4;

function conDataBase() {
    DBconnect = mysql.createConnection(DataBaseConfig);

    DBconnect.connect((error) => {
        if (error) {
            reintentos++;
            console.log("Error de conexion a la DB: ${error}"); if (reintentos >= maxreintentos)
                process.exit(1);
            setTimeout(conDataBase, 200);
        }
        else {
        
        console.log('Conexion a la DB exitosa');
    }
  });
}

conDataBase();

function getAll(entidad){
    return new Promise((resolve, reject) => {
        conDataBase.query(`SELECT * FROM ${entidad}`, (error, result) => {
            if(error)
                return reject(result);

            return resolve(result);
        })
    });
}

function getById(entidad, id) {
    return new Promise((resolve, reject) => {
        conDataBase.query(`SELECT * FROM ${entidad} WHERE id = ?`, [id], (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result);
        });
    });
}

function add(entidad, data) {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO ${entidad} SET ?`;
        
        // Ejecuta la consulta con los datos proporcionados
        conDataBase.query(query, data, (error, result) => {
            if (error) {
                return reject(error);
            }
            return resolve(result);
        });
    });
}
