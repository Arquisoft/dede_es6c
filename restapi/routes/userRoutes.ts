import {Router}  from 'express';
const router:Router = Router();

import authController from './../controller/authenticationController';


router.post('/register', authController.register);
router.post('/login', authController.login);  
router.post('/logout', authController.logout);  


export default router;