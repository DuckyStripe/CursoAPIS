const {response,request} = require('express');
const DB = require('../config/db');

const getConsulta = async(req = request, res = response) => {
    const {ID}=req.query;
    let resultado;
    let code;

    try {
        const Countdatos=await DB.query(`SELECT COUNT(*) Result FROM Employee whith(nolock) WHERE EmployeeID=${ID}`);
        console.log(Countdatos[0][0]['Result'])
        if(Countdatos[0][0]['Result']!=0){
            resultado='Consula exitosa'
            code=200;   
            const datos=await DB.query(`SELECT * FROM Employee whith(nolock) WHERE EmployeeID=${ID}`);
            Data={
                IdEmpleado:datos[0][0]['EmployeeID'],
                Estatus:datos[0][0]['Status'],
                Nombre:datos[0][0]['FirstName'],
                Apellido:datos[0][0]['LastName'],
                Telefono:datos[0][0]['Phone'],
                Ciudad:datos[0][0]['City'],
                Direccion:datos[0][0]['Address'],
                CodigoPostal:datos[0][0]['Zip'],
            }
            return res.status(code).json(
                {
                    code:code,
                    resultado:resultado,
                    Data:Data
                }
            );
        }else{
            resultado='No se encontro el empleado'
            code=404;
            return res.status(code).json(
                {
                    code:code,
                    resultado:resultado,
                    Data:[]
                }
            );
        }
    }
    catch (error) {
        console.log(error);
        code=500;
        resultado="Error al consultar la base de datos"
    }


}
module.exports = {getConsulta};