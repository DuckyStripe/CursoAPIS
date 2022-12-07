const {response, request} = require('express');

const multiplicacion=(req=request, res=response)=>{
    const { num1, num2 } = req.query;
    try{
        const result=parseInt(num1)*parseInt(num2);
        res.status(200).json({
            code:200,
            status:1,
            msg:'Multiplicacion exitosa',
            result:`El resultado de la Multiplicacion del numero ${num1} por ${num2} = ${result}`
        })
    }
    catch(error){
        res.status(400).json({
            code:200,
            status:1,
            msg:'Error en la multiplicacion',
            data:error
        })
    }
}

module.exports={multiplicacion};