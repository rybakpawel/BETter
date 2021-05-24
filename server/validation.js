const Joi = require('joi');

const registerValidation = data => {
    const schema = Joi.object({
        login: Joi.string()
            .required()
            .min(3)
            .messages({
                'string.base': `Login powinien być tekstem`,
                'string.empty': `Wprowadź login`,
                'string.min': `Login powinien zawierać co najmniej 3 znaki`,
                'any.required': `Pole Login jest wymagane`
            }),
        email: Joi.string()
            .required()
            .min(6)
            .email()
            .messages({
                'string.base': `E-mail powinien być adresem`,
                'string.empty': `Wprowadź e-mail`,
                'string.min': `E-mail powinien zawierać co najmniej 6 znaków`,
                'any.required': `Pole e-mail jest wymagane`
            }),
        password: Joi.string()
            .required()
            .min(6)
            .alphanum()
            .messages({
                'string.base': `Hasło powinno zawierać wielki litery, małe litery oraz cyfry`,
                'string.empty': `Wprowadź hasło`,
                'string.min': `Hasło powinno zawierać co najmniej 6 znaków`,
                'any.required': `Pole hasło jest wymagane`
            }),
        confirmPassword: Joi.any()
            .required()
            .valid(Joi.ref('password'))
            .messages({
                'string.empty': `Potwierdź hasło`,
                'any.only': `Nieprawidłowe hasło`,
                'any.required': `Potwierdzenie hasła jest wymagane`
            }),
    });

    return schema.validate(data)
}

const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string()
            .required()
            .min(6)
            .email()
            .messages({
                'string.email': `Nieprawidłowy adres e-mail`,
                'string.empty': `Wprowadź e-mail`,
            }),
        password: Joi.string()
            .required()
            .min(6)
            .messages({
                'string.empty': `Wprowadź hasło`,
            }),
    });

    return schema.validate(data)
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;