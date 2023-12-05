const {Schema, model } = require('mongoose')

const DevolucionSchema = ({
    nombreCliente: {
        type: String,
        unique: true,
        required: [true, 'El nombre de usuario es requirido']
    },

    venta: {
        type: String,
        required: [true, 'La venta es requeridod'],
    },


    cantidad: {
        type: String,
        required: [true, 'la cantidad es requeridod'],
    },

    producto: {
        type: String,
        required: [true, 'El producto es requerido'],
        enum: ['cuerdas', 'proteina', 'mancuernas'],
    },

    motivo: {
        type: String,
        required: [true, 'El motivo es requeridod'],
    },

    estado: {
        type: Boolean,
        default: true
    }
})

module.exports = model('devoluciones', DevolucionSchema )



