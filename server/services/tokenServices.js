import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config({path : '../config.env'})
import Constants from '../utils/constants.js';

class TokenServices{

    async generateToken(userId, firstName, country){
        let token = jwt.sign({ userId, firstName, country }, process.env.JWT_SECRET_TOKEN, { expiresIn: Constants.JWT_TOKEN_EXPIRE });
        return token;
    }

    
    
    async verifyToken(token, cb){
        jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, decodedToken) => {
            if (err) {
                cb(err, null);
            }else{
                cb(null, decodedToken);
            }
        });
    }

}

export default new TokenServices();