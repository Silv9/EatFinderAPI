const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    celular:{
        type:String,
        required: true
    },
    nombre:{
        type:String,
        required: true
    },
    contrasenia:{
        type:String,
        required: true
    },
    username:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    ubi_actual:{
        type:String,
        required: true
    },
    pref_comida:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('UserEatFinder', userSchema);