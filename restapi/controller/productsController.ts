import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Product from '../schemas/productSchema';


class ProductController {

    public async getProducts(req: Request, res: Response) {
        var products = await Product.find({});
        res.send(products);
    }

}

const productController = new ProductController();
export  default productController;  