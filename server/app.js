import dotenv from 'dotenv';
dotenv.config({path : "./config/config.env"});
import express from 'express';
import session from 'express-session';
const app = express();
import Router from './routes/router.js';
import AuthRouter from './routes/authRouter.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import './db/conn.js';
import passport from 'passport';
import './passport.js';

const clientBaseUrl = process.env.NODE_ENV !== 'dev' ? process.env.CLIENT_BASE_URL : process.env.CLIENT_BASE_URL_DEV;

// console.log(process.env.NODE_ENV);
const corsOptions = {
    origin: clientBaseUrl, 
    credentials:true,            //access-control-allow-credentials:true
    methods : ['GET', 'POST'],
    optionSuccessStatus:200,
    allowedHeaders: ['Content-Type', 'Authorization'],
}

// Use sessions to track login status
app.use(session({
    secret: process.env.GOOGLE_AUTH_CLIENT_SECRET, // Replace with a secure key
    resave: true,
    saveUninitialized: true,
  }));
  
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());


app.use('/api', Router);
app.use('/auth', AuthRouter);

app.listen(process.env.PORT, (err) => {
    if(err) console.log('server connection error', err);
    else console.log('listening to port', process.env.PORT);
})