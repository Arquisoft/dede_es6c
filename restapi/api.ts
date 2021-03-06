import express, { Request, Response, Router } from 'express';
import {​​​​​​Document}​​​​​​ from 'mongoose';
import Product from './models/Product';
import User from './models/users';
import History from './models/History';
import ProductPedido from './models/Product';
import moment from 'moment';

const api:Router = express.Router();
const crypto = require('crypto').webcrypto;

  interface Producto extends Document{
    name: string;
    price: number;
    type: string;
  }

  interface Historial extends Document {
    product_name: string;
    product_type: string;
    product_price: number;
  }

 const mongoose = require('mongoose');
 mongoose.connect('mongodb+srv://uo269502:mpRh919kQXYXT98r@cluster0.fp7y3.mongodb.net/Tienda?retryWrites=true&w=majority')
     .then(() => {
         console.log("Database connected")
     }).catch(()=>{
         console.error("error")
     });

   api.get("/productos", async (req: Request, res: Response): Promise<Response> => {
        var result = await Product.find().exec();
        return res.status(200).json(result);
   });

  api.post("/historiales", async (req: Request, res: Response): Promise<Response> => {
    //try {
        var currentDate = new Date();
        //var comparisonDate = (moment(new Date().setHours(currentDate.getHours() - 24))).format('DD/MM/YYYY HH:mm');
        var comparisonDate = (moment(new Date().setMinutes(currentDate.getMinutes() - 1))).format('DD/MM/YYYY HH:mm');
        let username = String(req.body.username);
        await History.updateMany(
          {'username': username, "state":'PENDING', 'date':{ $lt : comparisonDate }},
          {$set: { "state" : 'DELIVERED' }}
        );
        var result = await History.find({'username': username}).exec();
        return res.status(200).json(result);
    //} catch (error) {
    //  return res.status(500).send(error);
    //}
  });

   api.post("/productos/add",
    async (req: Request, res: Response): Promise<Response> => {
      let name = req.body.name;
      let price = req.body.price;
      let type = req.body.type;
      let producto: Producto = new ProductPedido({
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


 api.post("/carrito/add", async (req: Request, res: Response): Promise<Response> => {
    var UID = Math.floor(crypto.getRandomValues(new Uint32Array(1))[0]);

    let producto: Historial = new History({
      _id: UID,
      product_name: req.body.name,
      product_type: req.body.type,
      product_price: req.body.price,
      username: req.body.username,
      amount: req.body.amount,
      id: UID,
      order_id: req.body.order_id,
      state: 'PENDING',
      date: (moment(new Date())).format('DD/MM/YYYY HH:mm'),
      });

    await producto.save();
    return res.sendStatus(200);
  }
);

export default api;