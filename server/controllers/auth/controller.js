import OtpServices from '../../services/otpServices.js';
import HashServices from '../../services/hashServices.js';
import TokenServices from '../../services/tokenServices.js';
import CaptchaServices from '../../services/captchaServices.js';
import DbController from '../dbController.js';
import Constants from '../../utils/constants.js';

class RouteController{

    async signup(req, res){
        const {email, captcha} = req.body;
        
        try {
            
            await CaptchaServices.verifyCaptcha(captcha);
            const yes = await DbController.checkUserExist(email);
            
            if(!yes){
                const otp = await OtpServices.generateOtp();

                try {
                    if(process.env.NODE_ENV === 'dev'){
                        console.log('dev otp is', otp)
                    }else{
                        await OtpServices.sendOtp(email, otp);
                    }
                    HashServices.hashOtp(otp, (hashedOtp) => {
                        return res.status(200).json({otp : hashedOtp});
                    });
                } catch (error) {
                    return res.status(400).json({error : error});      
                }
            }else{
                // console.log(error);
                return res.status(400).json({error : 'User Already Exist'});
            }
                
        } catch (error) {
            // console.log(error);
            return res.status(400).json({error : 'something went wrong'});
        }
    }

    async googleSignin(req, res){
        // console.log(req.user);
        const url = process.env.NODE_ENV === 'dev' ? process.env.CLIENT_BASE_URL_DEV : process.env.CLIENT_BASE_URL;
        if(!req.user){      
            res.redirect(`${url}/auth/login`);
        }else{
            const {userId, jwtToken} = req.user;

            res.cookie('SpokAijwtAuthToken', jwtToken, {
                maxAge: Constants.JWT_COOKIE_EXPIRE, // expiration time
                secure: true, // only send over https
                httpOnly: true, //  prevent client-side JavaScript from accessing and the cookiecross-site scripting (XSS) attacks,
                sameSite: 'strict' // the cookie is only sent in first-party contexts, reducing the risk of cross-site request forgery (CSRF) attacks.
            });
            res.redirect(url);
        }
    }

    async verifyOtp(req, res){
        const {firstName, lastName, email, country, dob, userOtp, hashedOtp, page, userId} = req.body;

        if(page === 'SIGNUP'){ // verify otp and save user in db

            const expires= hashedOtp.substr(hashedOtp.lastIndexOf('.')+1); 
            if(Date.now() > +expires){
                return res.status(200).json({verified : false, data : 'otp expired'});
            }

            try {
                const verified = await OtpServices.verifyOtp(userOtp, hashedOtp); // true or false
                // console.log(verified);
                if(verified){

                    try {                    
                        const userAdded = await DbController.addUser(firstName, lastName, email, country, dob);
                        
                        // console.log(userAdded);

                        if(userAdded){
                            const jwtToken = await TokenServices.generateToken(userAdded._id, firstName, country);



                            res.cookie('SpokAijwtAuthToken', jwtToken, {
                                maxAge: Constants.JWT_COOKIE_EXPIRE, // expiration time
                                secure: true, // only send over https
                                httpOnly: true, //  prevent client-side JavaScript from accessing and the cookiecross-site scripting (XSS) attacks,
                                sameSite: 'strict' // the cookie is only sent in first-party contexts, reducing the risk of cross-site request forgery (CSRF) attacks.
                            });
                        }

                    } catch (error) {
                        console.log(error);
                        return res.status(500).json({verified : false, data : "internal server error"});
                    }


                }
                return res.status(200).json({verified, data : null});
                
            } catch (error) {
                console.log(error);
                return res.status(400).json({verified: false, data : null});
            }
        }else{ // LOGIN - just verify otp and don't save user in db
            
            const expires= hashedOtp.substr(hashedOtp.lastIndexOf('.')+1); 
            if(Date.now() > +expires){
                return res.status(200).json({verified : false, data : 'otp expired'});
            }

            try {
                const verified = await OtpServices.verifyOtp(userOtp, hashedOtp); // true or false
                // console.log(verified);
                if(verified){

                    try {
                        const user = await DbController.checkUserExist(email);

                        const jwtToken = await TokenServices.generateToken(user._id, user.firstName, user.country);

                        res.cookie('SpokAijwtAuthToken', jwtToken, {
                            maxAge: Constants.JWT_COOKIE_EXPIRE, // expiration time
                            secure: true, // only send over https
                            httpOnly: true, //  prevent client-side JavaScript from accessing and the cookiecross-site scripting (XSS) attacks,
                            sameSite: 'strict' // the cookie is only sent in first-party contexts, reducing the risk of cross-site request forgery (CSRF) attacks.
                        });

                    } catch (error) {
                        console.log(error);
                        return res.status(500).json({verified : false, data : "internal server error"});
                    }


                }
                return res.status(200).json({verified, data : null});
                
            } catch (error) {
                console.log(error);
                return res.status(400).json({verified: false, data : null});
            }
        }
 
    } 

    async login(req, res){
        const {email, captcha} = req.body;
        
        try {
            await CaptchaServices.verifyCaptcha(captcha);
            const yes = await DbController.checkUserExist(email);
            
            if(yes){
                const otp = await OtpServices.generateOtp();
                try {

                    if(process.env.NODE_ENV === 'dev'){
                        console.log('otp is', otp)
                    }else{
                        await OtpServices.sendOtp(email, otp);
                    }

                    HashServices.hashOtp(otp, (hashedOtp) => {
                        return res.status(200).json({otp : hashedOtp, userId: yes._id});
                    });
                } catch (error) {
                    return res.status(400).json({error : error});
                }
            }else{
                // console.log(error);
                return res.status(400).json({error : 'user not exist'});                
            }
                
        } catch (error) {
            // console.log(error);
            return res.status(400).json({error : 'something went wrong'});                
            
        }
    }

    async logout(req, res){
        // console.log(req.cookies);

        // Remove the JWT token cookie
        res.clearCookie('SpokAijwtAuthToken');

        res.status(200).json({success: true});
    }
}

export default new RouteController();