import { UnauthenticatedError } from "../../lib/error-definitions";

export const authMiddleware = (req, res, next) => 
{
    const token = req.headers.authorization;
    if (!token) throw new UnauthenticatedError("invalid or missing token");
    try {
        const user = verifytoken(token)
        return next();
    }
    catch (error) {
        throw new UnauthenticatedError("Invalid or missing token")
    }
};

export default authMiddleware