import mongoose from 'mongoose';


const UserSchema = mongoose.Schema({
    firstName : {
        type : String,
        require: true,
    },
    lastName : {
        type : String,
        require: true,
    },
    email : {
        type : String,
        unique : true,
        require: true,
    },
    dob : {
        type : Object,
        require: true,
    },
    country : {
        type : String,
        require: true,
    },
    oAuth:{
        type: Boolean,
        require: false,
        default: false,
    },
    join : {
        type : Date,
        default : Date.now(),
    }

});


const User = new mongoose.model('users', UserSchema);
export default User;