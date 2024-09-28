import joi from 'joi';

export const TicketRequest = Joi.object(
    {
        userId: Joi.string().required(),
        journeyId: Joi.string().required(),
        seatNumber: Joi.interger().required(),
        price: Joi.integer().valid().required(),
    }
);