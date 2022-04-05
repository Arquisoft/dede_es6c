import express, { Request, Response, Router } from 'express';
import {check} from 'express-validator';
import {​​​​​​Document}​​​​​​ from 'mongoose';
import Product from './models/Product';
import User from './models/users';
import {ProductType, UserType} from './types';

const api:Router = express.Router()

//interface User extends Document{
//    name: string;
//    email: string;
//}

  interface Producto extends Document{
    name: string;
    price: number;
    type: string;
  }

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://uo269502:mpRh919kQXYXT98r@cluster0.fp7y3.mongodb.net/Tienda?retryWrites=true&w=majority')
    .then(() => {
        console.log("Database connected")
    }).catch(()=>{
        console.error("error")
    });

   api.get("/productos", async (req: Request, res: Response): Promise<Response> => {
     try {
         var result = await Product.find().exec();
         return res.status(200).json(result);
     } catch (error) {
       return res.status(500).send(error);
     }
   });

   api.post(
    "/productos/add",
    async (req: Request, res: Response): Promise<Response> => {
      let _id = "12";
      let name = req.body.name;
      let price = 45;
      let type = req.body.type;
      let producto: Producto = new Product({
      _id: _id,
      name: name,
      price: price,
      type: type
      })

      await producto.save();
      return res.sendStatus(200);
    }
  );

  api.get(
    "/users/list",
    async (req: Request, res: Response): Promise<Response> => {
        const users = await User.find({}).sort('-_id');
        return res.status(200).send(users);
    }
);

  /*api.post(
    "/users/add",[
      check('name').isLength({ min: 1 }).trim().escape(),
      check('email').isEmail().normalizeEmail(),
    ],
    async (req: Request, res: Response): Promise<Response> => {
      let name = req.body.name;
      let email = req.body.email;
      let user = new User({
        name:name,
        email:email
      });
  
      await user.save();
      
      return res.sendStatus(200);
    }
  );*/

  api.post("/users/add", async (req: Request, res: Response): Promise<Response> => {
    let name = req.body.name;
    let email = req.body.email;
    if(name == null || name.trim() == '' || email == null || email.trim() == '' ){
      return res.sendStatus(500);
    }
    const user = new User(
      {
        'name' : name,
        'email': email,
      }
    );
    
    await user.save();

    return res.sendStatus(200);
  }
);

export default api;