

import express from 'express';
const router = express.Router();
import RouteController from '../controllers/routeController.js';
import AuthMiddleware from '../middleware/authenticateUser.js';

router.get('/', AuthMiddleware, RouteController.home);

export default router;