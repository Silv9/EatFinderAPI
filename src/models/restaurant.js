const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const restSchema = mongoose.Schema({
    nombre:{
        type:String,
        required: true
    },
    tipo_comida:{
        type:String,
        required: true
    },
    calificacion:{
        type:Number,
        required: true
    },
    direccion:{
        type:String,
        required: true
    },
    coordenadas:{
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        required: true
    },
    menu:{
        type:String,
        required: true
    },
    comentarios:{
        type:String,
        required: true
    },
    plato_destacable:{
        type:String,
        required: true
    },
    prom_valor:{
        type:Number,
        required: true
    }
})

module.exports = mongoose.model('RestaurantEatFinder', restSchema);