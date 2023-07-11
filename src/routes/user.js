const express = require('express');
const userSchema = require('../models/user.js');

const router = express.Router();

//Creación de usuario
router.post('/users',(req, res) => {
    const user = userSchema(req.body);
    user.save()
    .then((data)=> res.json(data))
    .catch((error)=> {
        console.log(error);
        res.json({ message:`Failed: check the info`})
    })
});

//Obtener todos los usuarios
router.get('/users',(req, res) => {
    userSchema.find()
    .then((data)=> res.json(data))
    .catch((error)=> {
        console.log(error);
        res.json({ message:`Failed to find the registers: check the info`})
    })
});

//Obtener un solo usuario
router.get('/users/:id',(req, res) => {
    const {id} = req.params;
    userSchema.findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> {
        console.log(error);
        res.json({ message:`Failed to find the register: check the info`})
    })
});

//Obtener un solo usuario por email
router.get('/users/e/:email',(req, res) => {
    const {email} = req.params;
    userSchema.find({email:email}).exec()
    .then((data)=> res.json(data))
    .catch((error)=> {
        console.log(error);
        res.json({ message:`Failed to find the register: check the info`})
    })
});

//Actualizar un usuario
router.put('/users/:id',(req, res) => {
    const {id} = req.params;
    const {celular,nombre,email,ubi_actual,pref_comida} = req.body;
    userSchema
    .updateOne({_id:id},{$set:{celular,nombre,email,ubi_actual,pref_comida}})
    .then((data)=> res.json(data))
    .catch((error)=> {
        console.log(error);
        res.json({ message:`Failed to update the registers: check the info`})
    })
});


//Eliminar un usuario
router.delete('/users/:id',(req, res) => {
    const {id} = req.params;
    userSchema.findByIdAndRemove(id)
    .then((data)=> res.json(data))
    .catch((error)=> {
        console.log(error);
        res.json({ message:`Failed to update the registers: check the info`})
    })
});






module.exports = router;


