const express = require('express')
const routes = require('./src/routes/index')
const config = require('./src/config')
const cors = require('cors');
const app = express()

app.use(express.json())
app.use(cors());

app.use('/', routes) //endpoint

app.listen(config.port,() => {
    console.log(`Servicio escuchando por el puerto ${config.port}`)
})