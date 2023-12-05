const {Router} = require('express')

const route = Router()

//Listar todos los datos
const {getDevolucion, postDevolucion, putDevolucion, deleteDevolucion} = require('../controllers/devoluciones') //Importando el controlador

route.get('/', getDevolucion)

route.post('/', postDevolucion)

route.put('/', putDevolucion)

route.delete('/', deleteDevolucion)

module.exports = route