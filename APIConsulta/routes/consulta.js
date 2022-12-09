const { Router } = require('express');
const { check } = require('express-validator');
const { validateCamps } = require('../middlewares/validate_camps');
const { getConsulta } = require('../controllers/consulta');
const { updateConsulta   } = require('../controllers/updateConsulta');
const { deleteID   } = require('../controllers/deleteId');
const { insertar   } = require('../controllers/insert');
const router = Router();


router.get('/obtenerid',
    [
        check('ID', 'El id es obligatorio y debe de ser numerico').not().isEmpty().isNumeric(),
        validateCamps
    ],
    getConsulta

)
router.get('/UpdateID',
    [
        check('ID', 'El id es obligatorio y debe de ser numerico').not().isEmpty().isNumeric(),
        check('Address',"La direccion no debe de pasar de 39 caracteres.").not().isEmpty().isLength({min:1, max:40}),
        check('City',"La ciudad no debe de pasar de 16 caracteres.").not().isEmpty().isLength({min:1, max:16}),
        check('Zip',"El codigo postal no debe de pasar de 5 caracteres.").not().isEmpty().isLength({max:5}),
        check('State',"El codigo postal no debe de pasar de 2 caracteres.").not().isEmpty().isLength({ max:2}),
        validateCamps
    ],
    updateConsulta

)
router.get('/EliminarID',
    [
        check('ID', 'El id es obligatorio y debe de ser numerico').not().isEmpty().isNumeric(),
        validateCamps
    ],
    deleteID

)
router.get('/Insertar',
    [
        check('LastName', 'El apellido es obligatorio, debe de ser alfanumerico y menor a 30 caracteres').not().isEmpty().isLength({ max:30}),
        check('MiddleInitial', 'El MiddleInitial es obligatorio, debe de ser alfanumerico y debe de ser de un caracter').not().isEmpty().isLength({ min:1, max:1}),
        check('SSN', 'El SSN es obligatorio, debe de ser numerico y menor a 11 caracteres').not().isEmpty().isLength({ max:11}),
        check('Description', 'La Descripcion debe de ser obligatoria y no mayor a 179 caracteres').not().isEmpty().isLength({max:179}),
        check('FirstName', 'El nombre es obligatorio, debe de ser alfanumerico y no mayor a 29 caracteres').not().isEmpty().isLength({  max:29}),
        check('Phone', 'El telefono es obligatorio y no pasar de 14 caracteres').not().isEmpty().isLength({ max:14}),
        check('Status', 'El estatus es obligatorio y debe de ser numerico').not().isEmpty().isNumeric().isLength({ max:2}),
        check('Address',"La direccion no debe de pasar de 39 caracteres.").not().isEmpty().isLength({min:1, max:40}),
        check('City',"La ciudad no debe de pasar de 16 caracteres.").not().isEmpty().isLength({min:1, max:16}),
        check('Zip',"El codigo postal no debe de pasar de 5 caracteres.").not().isEmpty().isLength({max:5}),
        check('State',"El codigo postal no debe de pasar de 2 caracteres.").not().isEmpty().isLength({ max:2}),
        validateCamps
    ],
    insertar

)





module.exports = router;