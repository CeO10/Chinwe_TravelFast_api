export class NotFoundError extends Error
{
    constructor(message)
    {
        super(message)
        this.StatusCode = 404;
    }
}

export class BadRequestError extends Error
{
    constructor(message)
    {
        super(message)
        this.StatusCode = 400;
    }
}

export class UnauthorizedError extends Error
{
    constructor(message)
    {
        super(message)
        this.StatusCode = 403;
    }
}

export class UnauthenticatedError extends Error
{
    constructor(message)
    {
        super(message)
        this.StatusCode = 401;
    }
}

export class ConflictError extends Error 
{
    constructor(message)
    {
        super(message)
        this.StatusCode = 409;
    }
}

export class ValidationError extends Error
{
    constructor(message)
    {
        super(message)
        this.StatusCode = 422;
    }
}

export class InternalServerError extends Error
{
    constructor(message)
    {
        super(message)
        this.StatusCode = 500;
    }
}

export class TooManyRequestError extends Error
{
    constructor(message)
    {
        super(message)
        this.StatusCode = 429;
    }
}