const router  = require ('express').Router();
const conexion = require('../config/dbConfig');

//Agregamos las Rutas

//Obtenemos la tabla Clientes
router.get('/', (req, res) => {
    let sql = 'select * from cliente'
    //console.log(sql);
    conexion.query(sql, (err, rows, field) => {
        if(err) throw err;
        else{
            res.json(rows)
        }
    });
});

//Obtener un Cliente segun su Id
router.get('/:id', (req, res) => {
    const {id} = req.params
    let sql = 'select * from cliente where _idCliente = ?'
    conexion.query(sql, [id], (err, rows, field) => {
        if(err) throw err;
        else{
            res.json(rows)
        }
    });
});

//Agregar Cliente
router.post('/', (req, res) => {
    const { nombre, appMaterno, appPaterno, telefono, direccion, comuna } = req.body    
     
    let sql = `insert into cliente( nombre, appMaterno, appPaterno, telefono, direccion, comuna ) 
    values( '${nombre}','${appMaterno}', '${appPaterno}', '${telefono}', '${direccion}', '${comuna}' )`
    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else{
            res.json({status: 'Cliente Agregado'})
        }
    });
});


//Eliminar Cliente
router.delete('/:id', (req, res) => {

    const {id} = req.params;
    //console.log("llego node2" + id);

    let sql = `delete from cliente where _idCliente = '${id}'`
    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else{
            res.json({status: 'Cliente Eliminado'});
        }
    });
});


//Editar Cliente
router.put('/:id', (req, res) => {
    const {id} = req.params
    const { nombre, appMaterno, appPaterno, telefono, direccion, comuna } = req.body
    
    let sql = ` update cliente set
                nombre = '${nombre}', 
                appMaterno = '${appMaterno}', 
                appPaterno = '${appPaterno}',
                telefono = '${telefono}', 
                direccion = '${direccion}',
                comuna = '${comuna}'
                where _idCliente = '${id}' `

    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else{
            res.json({status: 'Cliente Actualizado'})
        }
    });
    
});

module.exports = router;