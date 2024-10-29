const express = require('express');
const router = express.Router();
const respuesta = require('../util/respuesta');
const controller = require('../modulos/usuario/controller');

// Ruta para obtener la lista de usuarios
router.get('/usuario/lista', (req, res) => {
    controller.getAll()
        .then((items) => {
            respuesta.success(req, res, 200, items);
        })
        .catch((error) => {
            respuesta.error(req, res, 500, 'Error al obtener la lista de usuarios', error);
        });
});

// Ruta para login de usuario
router.post('/user/login', (req, res) => {
    const { user, pass } = req.body;

    if (user === 'jhon' && pass === '123') {
        // Si el usuario y la contraseña son correctos
        respuesta.success(req, res, 200, { msg: 'Login exitoso' });
    } else {
        // Si el usuario o la contraseña son incorrectos
        respuesta.error(req, res, 405, 'Usuario o clave incorrecta...');
    }
});

module.exports = router;

// Ruta para obtener la lista de eventos
router.get('/evento/lista', (req, res) => {
    const eventos = [
        {
            Id: 1,
            Nombre: 'Marco'
        },
        {
            Id: 2,
            Nombre: 'Ventino'
        }
    ];
    res.send(eventos);
});

module.exports = router;
