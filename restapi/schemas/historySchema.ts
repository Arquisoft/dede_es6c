import moongose, { Schema,model } from 'mongoose';

const HistorySchema = new Schema({
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
    username: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }

},  {
    timestamps: true
});

export interface Historial extends moongose.Document {
    id: string;
    name: string;
    type: string;
    price: number;
    username: string;
}

export default model<History>('Product', HistorySchema);