const {response,request} = require('express');
const DB = require('../config/db');

const deleteID = async(req = request, res = response) => {
    const {ID}=req.query;
    let resultado;
    let code;

    try {
        const Countdatos=await DB.query(`SELECT COUNT(*) Result FROM Employee whith(nolock) WHERE EmployeeID=${ID}`);
        if(Countdatos[0][0]['Result']!=0 && Countdatos[0][0]['Result']==1){
            resultado='Se elimino el empleado'
            code=200;   
            const Delete=await DB.query(`delete from Employee WHERE EmployeeID=${ID}`);
            return res.status(code).json(
                {
                    code:code,
                    resultado:resultado,
                    Delete:`Se han eliminado ${Delete[1]} registros`
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
module.exports = {deleteID};