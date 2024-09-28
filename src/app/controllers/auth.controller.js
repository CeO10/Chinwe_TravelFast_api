import {BadRequestError} from "../../lib/error-definitions.js";


export const createUserAccount = asyncHandler(async (req, res) => {
    return res.status.json({
        success: true, message: "User successfully created",
    })
});

export const registerUser = asyncHandler (async(req, res) => 
{
    const {id, email, password} = req.body;
    const {errors} = validator(registerRequest, req.body);
    if (errors) throw new ValidationError("The request failed", errors);

    const user = await authService.registerUser({
        id, email, password
    });
    return res.status.json({
        success: true, message: "User registered successfully"
    })
});

export const authenticateUser = asyncHandler(async(req, res) => 
{
    const {value, errors} = validator.validate(authUserRequest, req.body);
    if (errors) throw new ValidationError("The request failed", errors);

    await authService.authenticateUser(value);
    return res.status.json({
        success: true, message: "User successfully logged in"
    });
})