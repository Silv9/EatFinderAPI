//Creación de instancias para iniciar API
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user')
const evaluationRoutes = require('./routes/evaluation')
const restRoutes = require('./routes/restaurant')


//Inicializacr app
const app = express();
const port = process.env.PORT | 9000;
require('dotenv').config();


//Middlewares:Un Middleware tiene como propósito tomar dos piezas de la aplicación y conectarlas, como un puente en el que fluye la información. 
app.use(express.json());
app.use('/api',userRoutes);
app.use('/api',evaluationRoutes);
app.use('/api',restRoutes);



//Rutas
app.get('/', (req, res)=>{
    res.send('APIs connection succesfully')
})

//Conexión a MongooDB
mongoose.connect(process.env.MONGODB_URI)
    .then( () => console.log("Connected to database"))
    .catch((error) => console.log(`Failed connection to database: ${error}`));


//Creación de escucha de puerto, permite la conexión de un puerto para peticiones
app.listen(port,() => console.log('server listening on port',port));

