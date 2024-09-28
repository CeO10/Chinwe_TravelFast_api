import appConfig from "../../config/app.config.js";
import {asyncHandler} from "../controllers/base.controller.js";
import argon from 'argon2';


export const registerUser = async (payload) => {
    await userService.createuser (payload)
};

export const authenticateUser = async (payload) => {
    const user = await userService.getuser (payload)
    if (!user) throw new NotFoundError("A user with this email doesw not exist");
};
// create a token and set it a cookie
return generateAuthenticationToken({
    id: user.id,
    email: user.email,
    role: user.role
});