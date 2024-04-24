

class Contant{
    constructor(){
        this.JWT_COOKIE_EXPIRE = 24 * 60 * 60 * 1000 * 30; // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds * 30 days
        this.JWT_TOKEN_EXPIRE = '30d';
    }
}

export default new Contant();