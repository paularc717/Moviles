const express = require ('express')
const router = express.Router()
const respuesta = require('../util/respuesta')
const controller =  require('../modulos/usuario/controller')

router.get('/usuario/lista', (req, res) => { 
    const getAllUser = controller.getAll().then((items) => {
        respuesta.success(req, res, 200, items);
    })
    
})

router.get('/usuario/lista/:id', (req, res) => {
    const id = req.params.id;
    controller.getById(id)
        .then((items) => {
            respuesta.success(req, res, 200, items);
        })
        .catch((error) => {
            respuesta.error(req, res, 500, 'Error al obtener el usuario');
        });
});


router.post('/usuario/login', (req, res) => {
    const { user, pass } = req.body;

    if (!user || !pass) {
        return res.status(400).json({ error: 'Usuario y clave son requeridos' });
    }
    controller.login(user, pass)
        .then(user => {
            if (user) {
                return res.status(200).json({
                    success: true,
                    msg: 'Login exitoso',
                    user: user
                });
            } else {
                return res.status(401).json({
                    error: true,
                    msg: 'Credenciales incorrectas'
                });
            }
        })
        .catch(error => {
            console.error('Error en login:', error);
            return res.status(500).json({
                error: true,
                msg: 'Error en el servidor'
            });
        });
});

// router.get('/evento/lista', (req, res) => {      
//     const eventos = [
//         {
//             Id: 1,
//             Nombre: 'Kickoff',
//         },
//         {
//             Id: 2,
//             Nombre: 'Planeacion',
//         }
//     ]

//     res.send(eventos);
// })

// router.get('/persona/lista', (req, res) => {      
//     const personas = [
//         {
//             Id: 1,
//             Documento: 80128317,
//             Nombres: 'Fredy Ignacio',
//             Apellidos: 'Medina Lopez'
//         },
//         {
//             Id: 1,
//             Documento: 1013663973,
//             Nombres: 'Danna',
//             Apellidos: 'Medina'
//         }
//     ]

//     res.send(personas);
// })



module.exports = router