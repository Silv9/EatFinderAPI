const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const evaluationSchema = mongoose.Schema({
    id_restaurante:{
        type:String,
        required: true
    },
    cant_estrellas:{
        type:Number,
        required: true
    },
    comentario:{
        type:String,
        required: true
    },
    id_usuario:{
        type:String,
        required: true
    }
 
})

module.exports = mongoose.model('EvaluationEatFinder', evaluationSchema);