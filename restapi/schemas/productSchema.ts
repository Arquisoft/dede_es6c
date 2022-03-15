import moongose, { Schema,model } from 'mongoose';

const ProductSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },

},  {
    timestamps: true
});

export interface Product extends moongose.Document {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

export default model<Product>('Product', ProductSchema);