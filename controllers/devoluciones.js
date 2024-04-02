const {response} = require('express')

const Devolucion = require('../models/devolucion')



const getDevolucion = async(req, res) => {

    const devoluciones = await Devolucion.find(); //Obtener todos los documentos de una colección
    res.json({
        msg: devoluciones
    })
}

const postDevolucion = async(req, res) => {
    const datos = req.body //Capturar datos de la url-postman
    let mensaje = 'Inserción exitosa'
    try {
        const devolucion = new Devolucion(datos) //Instanciar el objeto
        await devolucion.save() //Guardar en la base de dato
        console.log(devolucion)
    } catch (error) {
        mensaje = error
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}

const putDevolucion = async(req, res) => {
    const { nombreCliente, venta, cantidad,  producto, fecha, motivo, estado } = req.body //Desesctructurar
    let mensaje = ''
    try {
        const devolucion = await Devolucion.findOneAndUpdate({nombreCliente: nombreCliente},
        {venta:venta, cantidad:cantidad,  producto:producto,fecha:fecha, motivo:motivo, estado:estado})
        mensaje = 'Actualización exitosa'
    } catch (error) {
        mensaje = error
    }   
    res.json({
        msg:mensaje
    })
}

const deleteDevolucion = async(req, res) => {
    const { nombreCliente } = req.body //Desesctructurar
    let mensaje = ''
    try {
        const devolucion = await Devolucion.findOneAndDelete({nombreCliente: nombreCliente})
        mensaje = 'Eliminación exitosa'
    } catch (error) {
        mensaje = error
    }   
    res.json({
        msg:mensaje
    })
}


module.exports = {
    getDevolucion,
    postDevolucion,
    putDevolucion,
    deleteDevolucion
}

