

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