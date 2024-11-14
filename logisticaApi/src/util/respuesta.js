const { default: nodemon } = require("nodemon")

exports.success = function(req, res, status = 200, mensaje = 'ok'){
    res.status(status).send({
        error:false,
        status: status,
        msg: mensaje,
        body: req.body
    })
}

exports.error = function(req, res, status = 500, mensaje = 'error interno'){
    res.status(status).send({
        error:true,
        status: status,
        msg: mensaje,
        body: req.body
        
    })
}
