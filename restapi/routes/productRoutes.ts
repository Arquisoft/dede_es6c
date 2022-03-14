import {Router}  from 'express';
const router:Router = Router();

import productController from './../controller/productsController';


router.get('/products', productController.getProducts);


export default router;