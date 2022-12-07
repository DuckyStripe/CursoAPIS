const {response, request} = require('express');

const resta=(req=request, res=response)=>{
    const { num1, num2 } = req.query;
    try{
        const result=parseInt(num1)-parseInt(num2);
        res.status(200).json({
            code:200,
            status:1,
            msg:'Resta exitosa',
            result:result
        })
    }
    catch(error){
        res.status(400).json({
            code:200,
            status:1,
            msg:'Error en la resta',
            data:error
        })
    }
}

module.exports={resta};