import { UnauthorizedError } from "../../lib/error-definitions";


asyncHandler(fn); {
    return async (req, res, next) => {
        try {
            await this.authorize(req);
            return Promise.resolve(fn(req,res,next));
        }
        catch (error) {
            next(error);
        }
    }
};


export class validator {
    errors = {};
    validate(request) 
    {
        const {error, value} = models.validate(request, {abortEarly: false});
        if (error) {
            error.details.forEach((detail) =>
            {
                this.errors[detail.path] = string(detail.message).replace(/"/g)
            });
            return {errors: this.errors};
        }
        return {value};
    };
} 