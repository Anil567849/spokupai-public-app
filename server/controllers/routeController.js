
import DbController from './dbController.js';

class RouteController{

    async home(req, res){
        res.status(200).json({auth : true});
    }

}

export default new RouteController();