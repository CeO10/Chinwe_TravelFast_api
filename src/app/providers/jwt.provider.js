import {sign, verify} from 'jsonwebtoken';
import appConfig from "../../config/app.config.js";


class jwtProvider {
    generateAuthenticationToken = (payload) => {
        return sign(payload, appConfig.jwt.secret, appConfig.jwt.expires_in)
    };

    validateAuthenticationToken = (token) => {
        return verify(token, appConfig.jwt.secret)
    };
}

export default jwtProvider