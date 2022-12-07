const {response, request} = require('express');

const suma=(req=request, res=response)=>{
    const { num1, num2 } = req.query;
    try{
        console.log(num1, num2)
        if(num1 === undefined || num2 === undefined){
            res.status(400).json({
                code:200,
                status:1,
                msg:'Datos incorrectos',
                result:error
            })
        }
        const result=parseInt(num1)+parseInt(num2);
        res.status(200).json({
            code:200,
            status:1,
            msg:'Suma exitosa',
            result:result
        })
    }
    catch(error){
        res.status(400).json({
            code:200,
            status:1,
            msg:'Error en la suma',
            data:error
        })
    }
}

module.exports={suma};