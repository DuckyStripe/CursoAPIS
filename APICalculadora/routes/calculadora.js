const { Router }=require('express');
const { check }= require('express-validator');
const { suma } = require('../controllers/suma');
const { resta } = require('../controllers/resta');
const { multiplicacion } = require('../controllers/multiplicacion');
const { validateCamps } = require('../middlewares/validate_camps');
//Controladores

const router = Router();

router.get('/suma',
    [
        check('num1', 'El primer número es obligatorio y debe de ser un numero.').exists().isNumeric(),
        check('num2', 'El segundo número es obligatorio y debe de ser un numero').exists().isNumeric(),
        validateCamps
    ],
    suma
);
router.get('/resta',
    [
        check('num1', 'El primer número es obligatorio y debe de ser un numero.').exists().isNumeric(),
        check('num2', 'El segundo número es obligatorio y debe de ser un numero').exists().isNumeric(),
        validateCamps
    ],
    resta
);
router.get('/multiplicacion',
    [
        check('num1', 'El primer número es obligatorio y debe de ser un numero.').exists().isNumeric(),
        check('num2', 'El segundo número es obligatorio y debe de ser un numero').exists().isNumeric(),
        validateCamps
    ],
    multiplicacion
);

module.exports = router;
