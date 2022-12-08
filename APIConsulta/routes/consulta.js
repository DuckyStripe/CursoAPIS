const { Router } = require('express');
const { check } = require('express-validator');
const { validateCamps } = require('../middlewares/validate_camps');
const { getConsulta } = require('../controllers/consulta');

const router = Router();


router.get('/obtenerid',
    [
        check('ID', 'El id es obligatorio y debe de ser numerico').not().isEmpty().isNumeric(),
        validateCamps
    ],
    getConsulta

)




module.exports = router;