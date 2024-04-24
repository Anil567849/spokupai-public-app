import bcrypt from "bcrypt";
import crypto from 'crypto';

class HashServices{

    async hashOtp(otp, cb){
        try {
            const hash = await bcrypt.hash(otp.toString(), 10);
            const expiresOtp = Date.now() + 1000 * 60 * 10; // 10 minutes more than current time
            const hashedOtp = hash + '.' + expiresOtp.toString();
            cb(hashedOtp);
          } catch (error) {
            console.error('Error hashing OTP:', error);
          }
    }

}

export default new HashServices();