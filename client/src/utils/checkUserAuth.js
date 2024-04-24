import {pageLoaded} from './pageLoaded.js';
import Axios from '../https/https.js';

export async function checkUserAuth(path, setLoading, navigate) {
    try {
        const {data} = await Axios.home();
        if(!data.auth){
            navigate(path);
        }else{
            pageLoaded(() => {
                setLoading(false);
            });
        }
    } catch (error) {
        navigate(path);
        // console.log(error);
    }
}

export async function checkUserNotAuth(path, setLoading, navigate) {
    try {
        const {data} = await Axios.home();
        if(data.auth){
            navigate(path);
        }else{
            pageLoaded(() => {
                setLoading(false);
            });
        }
    } catch (error) {
        pageLoaded(() => {
            setLoading(false);
        });
    }
}