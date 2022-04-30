import request, {Response} from 'supertest';
import express, { Application, RequestHandler } from 'express';
import * as http from 'http';
import bp from 'body-parser';
import cors from 'cors';
import api from '../api';
import apiUser from '../routes/userRoutes';
import apiProduct from '../routes/productRoutes';
import mongoose from 'mongoose';
import { Historial } from '../schemas/historySchema';
import History from '../models/History';

let app:Application;
let server:http.Server;

beforeAll(async () => {
    app = express();
    const port: number = 5000;
    const options: cors.CorsOptions = {
        origin: ['http://localhost:3000']
    };
    app.use(cors(options));
    app.use(bp.json());
    app.use("/", api);
    app.use("/apiUser", apiUser);
    app.use('/apiProduct', apiProduct);

    server = app.listen(port, ():void => {
        console.log('Restapi server for testing listening on '+ port);
    }).on("error",(error:Error)=>{
        console.error('Error occured: ' + error.message);
    });
});

afterAll(async () => {
    server.close() //close the server
    mongoose.connection.close(); //close database
})

describe('user ', () => {

    jest.setTimeout(15000);

    /**
     * Test that we can list users without any error.
     */
    it('can be listed',async () => {
        const response:Response = await request(app).get("/users/list");
        expect(response.statusCode).toBe(200);
    });

    /**
     * Tests that a user can be created through the productService without throwing any errors.
     */
    it('can be created correctly', async () => {
        let username:string = 'Luis Manuel'
        let email:string = 'uo269502@prueba.es'
        const response:Response = await request(app).post('/users/add').send({name: username,email: email}).set('Accept', 'application/json')
        expect(response.statusCode).toBe(200);
    });

    it('cant be created correctly due to empty email', async () => {
      let username:string = 'prueba';
      const response:Response = await request(app).post('/users/add').send({name: username,email: ''}).set('Accept', 'application/json');
      expect(response.statusCode).toBe(500);
    });

    it('cant be created correctly due to empty name', async () => {
    let email:string = 'prueba@gmail.com';
    const response:Response = await request(app).post('/users/add').send({name: '',email: email}).set('Accept', 'application/json');
    expect(response.statusCode).toBe(500);
    });

    it('login with an unregistered user', async () => {
        const response:Response = await request(app).post('/apiUser/login').send({
            username:"prueba1@gmail.es",
            password: process.env.passwordTest!
        }).set('Accept', 'application/json');
        expect(response.statusCode).toBe(404);
    });
});

describe('product ', () => {

    it('list products',async () => {
        const response:Response = await request(app).get("/apiProduct/products");
        expect(response.statusCode).toBe(200);
    });

    it('list products v2',async () => {
        const response:Response = await request(app).get("/productos");
        expect(response.statusCode).toBe(200);
    });

    it('can be created correctly', async () => {
        let name:string = 'Sandero';
        let price:number = 5500;
        let type:string = 'Dacia';
        const response:Response = await request(app).post('/productos/add').send({   
                name:name, 
                type: type, 
                price: price
            }).set('Accept', 'application/json');
        expect(response.statusCode).toBe(200);
    });

});

describe('history ', () => {

     it('user history', async () => {
         let username:string = 'Luis Manuel';
         const response:Response = await request(app).post('/historiales').send({   
                 username:username
             }).set('Accept', 'application/json');
         expect(response.statusCode).toBe(200);
     });

    //  it('error user history', async () => {
    //     const response:Response = await request(app).post('/historiales').send({   
    //         }).set('Accept', 'application/json');
    //     expect(response.statusCode).toBe(500);
    // });

});

describe('cart ', () => {

    let product_name = "5008";
    let product_type = "Peugeot";
    let product_price = 10250;
    let username = "Luis Manuel";
    let amount = 1;
    let order_id = "123";

    it('cart add one item', async () => {
        const response:Response = await request(app).post('/carrito/add').send({   
            name:product_name,
            type:product_type,
            price:product_price,
            username:username,
            amount:amount,
            order_id:order_id
        }).set('Accept', 'application/json');
        expect(response.statusCode).toBe(200);
    });

});
