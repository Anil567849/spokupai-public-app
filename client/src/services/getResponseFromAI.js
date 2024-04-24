

import Axios from '../https/https.js';

async function getResponseFromAI(query, language, prevConversation, callback){

    try {

        const {data} = await Axios.getResponseFromAI({query, language, prevConversation});

        // console.log(data);
        callback(false, data.response);

    } catch (error) {
        // console.log(error);
        callback(true, error);
    }


}

export default getResponseFromAI;