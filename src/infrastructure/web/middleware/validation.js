const { body, validationResult } = require('express-validator');

const validateCliente = [
    body('nombre').isString().withMessage('El nombre debe ser un string'),
    body('apellido').isString().withMessage('El apellido debe ser un string'),
    body('email').isEmail().withMessage('Debe ser un email válido'),
    body('teléfono').isString().withMessage('El teléfono debe ser un string'),
    body('dirección').isString().withMessage('La dirección debe ser un string'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

module.exports = { validateCliente };
