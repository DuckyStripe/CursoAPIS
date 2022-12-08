const { validationResult } = require('express-validator');

const validateCamps = (req, res, next) => {

    // Obtener arrays de errores
    const errors = validationResult(req);
    // Validar si el array tiene algo.
    let bad={}
    bad['Date:']=new Date();
    bad['IP:']=req.ip;
    bad['Method:']=req.method;
    bad['URL:']=req.url;
    bad['Body:']=req.body;
    bad['Error']=JSON.stringify(errors);
    console.log(JSON.stringify(bad));
    if (!errors.isEmpty()) return res.status(400).json({
        code: 400,
        resultado: "Hubo un error con los parametros",
        errors: errors.mapped()
    });
    
    // Si no hay errores llama al controller. 
    next();
}


//**...  EXPORTACION DE MIDDLEWARES   ....**//
module.exports = {
    validateCamps,
}
//Author:Luis Alejandro Canchola Pedraza



