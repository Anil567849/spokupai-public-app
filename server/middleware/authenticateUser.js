
import TokenServices from '../services/tokenServices.js';

export default async function authenticateUser(req, res, next) {
    // Check if the JWT token cookie exists in the request
    const jwtToken = req.cookies.SpokAijwtAuthToken;
    // console.log(jwtToken);
    // console.log(process.env.JWT_SECRET_TOKEN);

  
    if (!jwtToken) {
      // Handle case when the token is missing
      return res.status(401).json({ message: 'Unauthorized' });
    }
    

    // Verify and decode the JWT token
    TokenServices.verifyToken(jwtToken, (err, decodeToken) => {
      // console.log('decode', decodeToken);
      if(err){
        // console.log(err); // may be jwt token expired
        return res.status(401).json({ message: 'Unauthorized' }); 

      }else if(decodeToken.userId){

        //ToDo: check whether user exist in DB or not

        // User is authenticated, attach the decoded token to the request
        req.userId = decodeToken.userId;
        req.firstName = decodeToken.firstName;
        req.country = decodeToken.country;
        next();
      }else{
        return res.status(401).json({ message: 'Unauthorized' });          
      }
    });
      
}