import mongoose from 'mongoose';
import {ProductType} from './../types';

const { Schema } = mongoose;

const productoSchema  = new Schema({
    _id: {
        type: String,
        required: true
    },
    name:{
      type: String,
      required: false
    },
    type:{
      type:String,
      required :false
    },    
    price: {
        type: Number,
        required: true
    }
});

const Product:mongoose.Model<ProductType> = mongoose.model('product', productoSchema);
export default Product; 