
import User from '../models/userSchema.js';

class DbController{

    async addUser(firstName, lastName, email, country, dob){
        try {
            const newUser = new User({
                firstName,
                lastName, 
                email,
                country,
                dob
            });


            const saved = await newUser.save();
            return saved;
            
        } catch (error) {
            throw new Error(error);
        }
    } 
    
    async checkUserExist(email){
        try {
            const response = await User.findOne({email});
            if(response){
                return response;
            }else{
                return false;
            }
        } catch (error) {
            console.log('dbController', error);
            return false;
        }
    }
    
    async checkSignupLimit(todayDate){
        try {
            const count = await User.countDocuments({
                join: {
                  $gte: todayDate,
                },
              });
            return (count <= 100);
        } catch (error) {
            console.log('dbController', error);
            return false;
        }
    }

}

export default new DbController;