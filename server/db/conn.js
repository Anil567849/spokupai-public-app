import dotenv from 'dotenv';
dotenv.config({path : "./config/config.env"});
import mongoose from 'mongoose';


mongoose.set('strictQuery', false);

try {
    if(process.env.NODE_ENV === 'dev'){
        await mongoose.connect(process.env.DB_URL_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('db local connected');
    }else{
        await mongoose.connect(process.env.DB_URL);
        console.log('db server connected');
    }
} catch (error) {
      console.log('db failed', error);
}