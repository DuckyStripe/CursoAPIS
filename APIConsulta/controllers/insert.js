const { response, request } = require('express');
const DB = require('../config/db');

const insertar = async (req = request, res = response) => {
    const { LastName, FirstName, MiddleInitial, SSN, Address, City, State, Zip, Phone, Status, Description } = req.query;
    let resultado;
    let code;

    try {
        const Countdatos = await DB.query(`SELECT COUNT(*) Result FROM Employee whith(nolock) WHERE SSN='${SSN}'`);
        console.log(Countdatos[0][0]['Result'])
        if (Countdatos[0][0]['Result'] == 0) {
            resultado = 'Se ha insertado el empleado'
            code = 200;
            const Insert = await DB.query(`INSERT INTO Employee 
            (LastName,FirstName,MiddleInitial,SSN,Address,City,State,Zip,Phone,Status,Description)
        VALUES('${LastName}','${FirstName}','${MiddleInitial}','${SSN}','${Address}','${City}','${State}','${Zip}','${Phone}',${Status},'${Description}')`);
            console.log('-------------------------------------------------')
            console.log(Insert[1])
            console.log('-------------------------------------------------')
            return res.status(code).json(
                {
                    code: code,
                    resultado: resultado,
                    Insert: `Se han insertado ${Insert[1]} registros`
                }
            );
        }else{
            resultado = 'El SSN ya existe'
            code = 404;
            return res.status(code).json(
                {
                    code: code,
                    resultado: resultado,
                    Insert: `No se han insertado registros`
                }
            );
        }
    }
    catch (error) {
            console.log(error);
            code = 500;
            resultado = "Error el SSN debe de ser unico"
        }


    }
module.exports = { insertar };