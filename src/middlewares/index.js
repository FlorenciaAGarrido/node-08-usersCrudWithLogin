const { check, validationResult } = require('express-validator');
 
const _nameRequired = check('name', 'Name required').not().isEmpty();

const _validationResult = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        throw new Error(`Validation Errors: ${errors}`);
    }
    next();
}

const postRequestValidations = [
    _nameRequired,
    _validationResult
]

module.exports = {
    postRequestValidations
}