const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'mysql-proyectos-app.alwaysdata.net',
    user: '264187',
    password: 'Veterinaria_264187',
    port: '3306',
    database: 'proyectos-app_veterinaria'  
});

conexion.connect((err) => {
    if(err){
        console.log('Ha ocurrido un error: ' + err);
    }else{
        console.log('Conexion Exitosa!');
    }
});


module.exports = conexion;