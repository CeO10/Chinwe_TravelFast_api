import {BadRequestError, NotFoundError, ValiadtionError } from "../../lib/error-definitions.js";

const errorMiddleware = function (err, req, res, next) {
    if (
        err instanceof NotFoundError ||
        err instanceof BadRequestError ||
        err instanceof ValidationError ||
        err instanceof UnauthenticatedError ||
        err instanceof InternalServerError 
    ) {
        return res.status(err.statusCode).json({
            success: false, message: err.message,
        });
    }
}


export default errorMiddleware