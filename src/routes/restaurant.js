const express = require('express');
const restaurantSchema = require('../models/restaurant.js');

const router = express.Router();

//Creación de usuario
router.post('/restaurant',(req, res) => {
    const rest = restaurantSchema(req.body);
    rest.save()
    .then((data)=> res.json(data))
    .catch((error)=> {
        console.log(error);
        res.json({ message:`Failed: check the info`})
    })
});

//Obtener todos los usuarios
router.get('/restaurant',(req,res) => {
    restaurantSchema.find()
    .then((data)=> res.json(data))
    .catch((error)=> {
        console.log(error);
        res.json({ message:`Failed to find the registers: check the info`})
    })
});

//Obtener un solo usuario
router.get('/restaurant/:id',(req, res) => {
    const {id} = req.params;
    restaurantSchema.findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> {
        console.log(error);
        res.json({ message:`Failed to find the register: check the info`})
    })
});

//Obtener un solo usuario por nombre
router.get('/restaurant/e/:name',(req, res) => {
    const {name} = req.params;
    restaurantSchema.find({name:name}).exec()
    .then((data)=> res.json(data))
    .catch((error)=> {
        console.log(error);
        res.json({ message:`Failed to find the register: check the info`})
    })
});

//Actualizar un usuario
router.put('/restaurant/:id',(req, res) => {
    const {id} = req.params;
    const {nombre,tipo_comida,calificacion,direccion,coordenadas,telefono,menu,comentarios,plato_destacable,prom_valor} = req.body;
    restaurantSchema
    .updateOne({_id:id},{$set:{nombre,tipo_comida,calificacion,direccion,coordenadas,telefono,menu,comentarios,plato_destacable,prom_valor}})
    .then((data)=> res.json(data))
    .catch((error)=> {
        console.log(error);
        res.json({ message:`Failed to update the registers: check the info`})
    })
});


//Eliminar un usuario
router.delete('/restaurant/:id',(req, res) => {
    const {id} = req.params;
    restaurantSchema.findByIdAndRemove(id)
    .then((data)=> res.json(data))
    .catch((error)=> {
        console.log(error);
        res.json({ message:`Failed to update the registers: check the info`})
    })
});






module.exports = router;


