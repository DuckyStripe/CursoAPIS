const {response,request} = require('express');
const DB = require('../config/db');

const updateConsulta = async(req = request, res = response) => {
    const {ID,Address,Zip,City,State}=req.query;
    let resultado;
    let code;

    try {
        const Countdatos=await DB.query(`SELECT COUNT(*) Result FROM Employee whith(nolock) WHERE EmployeeID=${ID}`);
        if(Countdatos[0][0]['Result']!=0){
            resultado='Se actualizo correctamente el registro.'
            code=200;   
            const Update=await DB.query(`update Employee set Address='${Address}',City='${City}',State='${State}',Zip='${Zip}'
            WHERE EmployeeID=${ID}`);
            const datos=await DB.query(`SELECT * FROM Employee whith(nolock) where EmployeeID=${ID}`);
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
                    Data:Data,
                    Update:`Se han actualizado ${Update[1]} registros`
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
module.exports = {updateConsulta};