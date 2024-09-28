import joi from 'joi';

export const authUserRequest = Joi.object(
    {
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
    }
);