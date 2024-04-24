

import express from 'express';
const router = express.Router();
import RouteController from '../controllers/auth/controller.js';
import passport from "passport";
import checkSignupLimit from '../middleware/dailySignupLimit.js';

router.post('/signup', checkSignupLimit, RouteController.signup);
router.post('/verifyOtp', RouteController.verifyOtp);
router.post('/login', RouteController.login);
router.get('/logout', RouteController.logout);

// GGOOLE SIGNIN 
const base_url = process.env.NODE_ENV === "dev" ? process.env.CLIENT_BASE_URL_DEV : process.env.CLIENT_BASE_URL;
router.get('/google/callback', passport.authenticate('google', {failureRedirect: `${base_url}/auth/login` }), RouteController.googleSignin);
router.get('/google', passport.authenticate('google', ['profile', 'email']));

export default router;