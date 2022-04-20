require('./config/dbConfig');
const express = require('express')

const port = (process.env.port || 3000)

// express
const app = express()

//admitir
app.use(express.json())

//configurar
app.set('port',port);

const cors = require('cors');

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions)) // Use this after the variable declaration

//Directorio Publico
app.use(express.static('public'));

//rutas
app.use('/client', require('./routes/cliente'));


//inicializar express
app.listen(app.get('port'),(error)=>{
    if(error)
    {console.log('error al iniciar el servidor: '+ error)}
    else{
        console.log('servidor iniciado en el puerto: '+ port)
    }
})