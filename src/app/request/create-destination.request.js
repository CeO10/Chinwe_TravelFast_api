import joi from 'joi';

export const createDestinationRequest = Joi.object(
    {
        name: Joi.string().required(),
        distance: Joi.string().required(),
        basefare: Joi.integer().required(),
    }
);