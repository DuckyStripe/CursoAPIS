const { response, request } = require('express');

const division = (req = request, res = response) => {
    const { num1, num2 } = req.query;
    try {
        if (num1 == 0 || num2 == 0) {
            res.status(400).json({
                code: 200,
                status: 1,
                msg: 'Error en la división al dividir entre 0',
                data: []
            })
        } else {
            const result = parseInt(num1) / parseInt(num2);
            res.status(200).json({
                code: 200,
                status: 1,
                msg: 'División exitosa',
                result: result
            })
        }
    }
    catch (error) {
        res.status(400).json({
            code: 200,
            status: 1,
            msg: 'Error en la división',
            data: error
        })
    }
}

module.exports = { division };