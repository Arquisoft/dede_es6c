import request, {Response} from 'supertest';
import express, { Application } from 'express';
import * as http from 'http';
import bp from 'body-parser';
import cors from 'cors';
import api from '../api';
import apiUser from '../routes/userRoutes';
import mongoose from 'mongoose';

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
    app.use("/api", api);
    app.use("/apiUser", apiUser);

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

    /**
     * Test that we can list users without any error.
     */
    it('can be listed',async () => {
        const response:Response = await request(app).get("/api/users/list");
        expect(response.statusCode).toBe(200);
    });

    /**
     * Tests that a user can be created through the productService without throwing any errors.
     */
    it('can be created correctly', async () => {
        let username:string = 'Luis Manuel'
        let email:string = 'uo269502@prueba.es'
        const response:Response = await request(app).post('/api/users/add').send({name: username,email: email}).set('Accept', 'application/json')
        expect(response.statusCode).toBe(200);
    });

    it('cant be created correctly due to empty email', async () => {
      let username:string = 'prueba';
      const response:Response = await request(app).post('/api/users/add').send({name: username,email: ''}).set('Accept', 'application/json');
      expect(response.statusCode).toBe(500);
    });

    it('cant be created correctly due to empty name', async () => {
    let email:string = 'prueba@gmail.com';
    const response:Response = await request(app).post('/api/users/add').send({name: '',email: email}).set('Accept', 'application/json');
    expect(response.statusCode).toBe(500);
    });

    it('correct login', async () => {
        const response:Response = await request(app).post('/apiUser/login').send({
            username:"uo269502@uniovi.es",
            password: "Luisma@186"
        }).set('Accept', 'application/json');
        expect(response.statusCode).toBe(205);
    });

    /*it('logout', async () => {
        const response:Response = await request(app).get("/logout");
        expect(response.statusCode).toBe(200);
    });*/

});

function beforeAll(arg0: () => Promise<void>) {
    throw new Error('Function not implemented.');
}


function afterAll(arg0: () => Promise<void>) {
    throw new Error('Function not implemented.');
}


function expect(statusCode: number) {
    throw new Error('Function not implemented.');
}
