import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from "passport";
import User from './models/userSchema.js';
import TokenServices from './services/tokenServices.js';

const server_url = process.env.NODE_ENV === 'dev' ? process.env.SERVER_BASE_URL_DEV : process.env.SERVER_BASE_URL;

passport.use(new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
			clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
			callbackURL: `${server_url}/auth/google/callback`, // add same uri in the google cloud console - auth redirect uri
			scope: ["profile", "email"],
		},
		async function (accessToken, refreshToken, profile, callback) {
      		// console.log(profile);

			  User.findOne({ email: profile._json.email }).then(async (user) => {

				if (user) {
					const jwtToken = await TokenServices.generateToken(user._id, user.firstName, user.country);
					const userId = user._id.toString();
					return callback(null, {jwtToken, userId});
				} else{			
					const createNewUser = new User({
						firstName: profile._json.given_name,
						lastName: profile._json.family_name,
						email: profile._json.email,
						dob: 'none',
						country: 'none',
						'oAuth' : true
					});
		
					try {
		
						const result = await createNewUser.save();
						if(result){
                            const jwtToken = await TokenServices.generateToken(result._id, profile._json.given_name, 'none');
							const userId = result._id.toString();
							return callback(null, {jwtToken, userId});
						}
						
					} catch (error) {
						return callback(error, null);
					}
					
				}
	
			});
		
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});