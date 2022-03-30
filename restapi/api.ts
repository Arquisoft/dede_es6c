import express, { Request, Response, Router } from 'express';
import {check} from 'express-validator';
import {​​​​​​Document}​​​​​​ from 'mongoose';
import Product from './models/Product';

const api:Router = express.Router()

interface User extends Document{
    name: string;
    email: string;
}

  interface Producto extends Document{
    name: string;
    price: number;
    type: string;
  }

//This is not a restapi as it mantains state but it is here for
//simplicity. A database should be used instead.
//let users: Array<User> = [{name: "Luis Manuel", email: "luismanuel@gmail.com"}];
//let products: Array<Producto> = [];

//let productos2: Array<Producto> = [];

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://uo269502:mpRh919kQXYXT98r@cluster0.fp7y3.mongodb.net/Tienda?retryWrites=true&w=majority')
    .then(() => {
        console.log("Database connected")
    }).catch(()=>{
        console.error("error")
    });

//     const {Schema} = mongoose;

//    const productoSchema  = new Schema({
//      _id: {
//          type: String,
//          required: true
//      },
//      name:{
//        type: String,
//        required: false
//      },
//      type:{
//        type:String,
//        required :false
//      },
//      price: {
//          type: Number,
//          required: true
//      }
//  });

//    const productos = mongoose.model('productos', productoSchema)

// api.get("/productos", async (req: Request, res: Response): Promise<Response> => {
//       var result = await Product.find().exec();
//       console.log(result);
//       return res.status(200).send(result);
//    });

   api.get("/productos", async (req: Request, res: Response): Promise<Response> => {
     try {
         //var result = await productos.find().exec();
         var result = await Product.find().exec();
         //console.log(result);
         return res.status(200).json(result);
     } catch (error) {
       return res.status(500).send(error);
     }
   });

   api.post(
    "/productos/add",
    async (req: Request, res: Response): Promise<Response> => {
      // let name = req.params[0];
      // let price = Number(req.params[1]);
      // let type = req.params[2];
      // let producto: Producto = new Product({
      //   name: name,
      //   price: price,
      //   type: type
      // })

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

  // api.post(
  //   "/productos/add",
  //   async (req: Request, res: Response): Promise<Response> => {
  //     let name = "asas";
  //     let price = 45210;
  //     let type = "req.body.type";
  //     let producto:  Producto = {name:name, type:type, price:price};
  //     productos.push(producto);
  //     return res.sendStatus(200);
  //   }
  // );

// api.get(
//     "/users/list",
//     async (req: Request, res: Response): Promise<Response> => {
//         return res.status(200).send(users);
//     }
// );

 api.post(
   "/users/add",[
     check('name').isLength({ min: 1 }).trim().escape(),
     check('email').isEmail().normalizeEmail(),
   ],
   async (req: Request, res: Response): Promise<Response> => {
     let name = req.body.name;
     let email = req.body.email;
     //let user: User = {name:name,email:email}
     //await users.save();
     return res.sendStatus(200);
   }
 );

export default api;