

import Axios from '../https/https.js';

async function getTenseFromAI(tense, callback){

    try {

        const {data} = await Axios.getTenseFromAI({tense});

        // console.log(data);
        callback(false, {response: data.response, type: data.type});

    } catch (error) {
        // console.log(error);
        callback(true, error);
    }


}

export default getTenseFromAI;