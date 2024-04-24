
import crypto from 'crypto';
import bcrypt from "bcrypt";
import nodemailer from 'nodemailer';

class OtpServices{

    generateOtp(){
        return crypto.randomInt(100000, 999999);
    }

    async sendOtp(email, otp){


        const transporter = nodemailer.createTransport({
            host: 'smtp-relay.brevo.com',
            port: 587,
            // secure: true,
            auth: {
                user: process.env.BREVO_USER,
                pass: process.env.BREVO_PASS,
            }
        });
        
        
        async function main() {
            // send mail with defined transport object
            const info = await transporter.sendMail({
              from: process.env.BUSINESS_EMAIL, // sender address
              to: email, // list of receivers
              subject: "Spokupai OTP", // Subject line
              text: `Hello,\n\nYour OTP for authentication is: ${otp}\n\nThis OTP is valid for a short duration and should be used for authentication purposes only.\n\nThank you,\nThe Spokupai Team`, // plain text body
              html: `<p>Hello,</p><p>Your OTP for authentication is: <strong>${otp}</strong></p><p>This OTP is valid for a short duration and should be used for authentication purposes only.</p><p>Thank you,<br/>The Spokupai Team</p>`, // html body
            });
          }
        //   console.log("Message sent: %s", info.messageId);        
        main().catch(console.error);
        
    }

    verifyOtp(otp, hashed){
        const hash = hashed.substr(0, hashed.lastIndexOf('.'));
        return bcrypt.compareSync(otp, hash); // true
    }

}

export default new OtpServices();