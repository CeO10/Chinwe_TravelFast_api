import Joi from "joi";

export const createUserRequest = Joi.object(
     {
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    role: Joi.string().valid('user', 'admin', 'superadmin').required(),
    }
 );