import axios from 'axios';


const serverUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_SERVER_BASE_URL : process.env.REACT_APP_SERVER_BASE_URL_DEV;
// console.log('server', serverUrl);

const api = axios.create({
    baseURL: serverUrl,    
    withCredentials : true, // send coookies or save cookie use this [true] and cors package m bhi credential true kre server.js file m
    headers : {
        'Content-type' : 'application/json',
        Accept : "application/json",
    },
});

class Axios{

    // Main API - Currently using just to check user is auth or not
    async home(){
        return api.get('/api');
    }

    // Auth API 
    async signup(data){
        return api.post('/auth/signup', data);
    }
    async login(data){
        return api.post('/auth/login', data);
    }
    async logout(){
        return api.get('/auth/logout');
    }
    async verifyOtp(data){
        return api.post('/auth/verifyOtp', data);
    }

}
const temp = new Axios();
export default temp;