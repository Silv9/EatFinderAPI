const express = require('express');
const evaluatSchema = require('../models/evaluation.js');

const router = express.Router();

//Creación de usuario
router.post('/evaluat',(req, res) => {
    const eval = evaluatSchema(req.body);
    eval.save()
    .then((data)=> res.json(data))
    .catch((error)=> {
        console.log(error);
        res.json({ message:`Failed: check the info`})
    })
});

//Obtener todos los usuarios
router.get('/evaluat',(req, res) => {
    evaluatSchema.find()
    .then((data)=> res.json(data))
    .catch((error)=> {
        console.log(error);
        res.json({ message:`Failed to find the registers: check the info`})
    })
});

//Obtener un solo usuario
router.get('/evaluat/:id',(req, res) => {
    const {id} = req.params;
    evaluatSchema.findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> {
        console.log(error);
        res.json({ message:`Failed to find the register: check the info`})
    })
});

//Actualizar un usuario
router.put('/evaluat/:id',(req, res) => {
    const {id} = req.params;
    const {id_restaurante,cant_estrellas,comentario,id_usuario} = req.body;
    evaluatSchema
    .updateOne({_id:id},{$set:{id_restaurante,cant_estrellas,comentario,id_usuario}})
    .then((data)=> res.json(data))
    .catch((error)=> {
        console.log(error);
        res.json({ message:`Failed to update the registers: check the info`})
    })
});


//Eliminar un usuario
router.delete('/evaluat/:id',(req, res) => {
    const {id} = req.params;
    evaluatSchema.findByIdAndRemove(id)
    .then((data)=> res.json(data))
    .catch((error)=> {
        console.log(error);
        res.json({ message:`Failed to update the registers: check the info`})
    })
});






module.exports = router;


