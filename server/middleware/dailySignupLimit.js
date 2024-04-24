
import Db from '../controllers/dbController.js';

export default async function dailySignupLimit(req, res, next) {

    try {
        const currentDate = new Date();

        // Set the time to midnight (00:00:00) - Beginning of the day
        currentDate.setHours(0, 0, 0, 0);

        const allow = await Db.checkSignupLimit(currentDate);
        if(allow){
            next();
        }else{
            return res.status(403).json({ error: 'Only 100 new Registration are allowed every day! Try Tomorrow.' });
        }
    } catch (error) {
        return res.status(401).json({ error: error });      
    }
      
}