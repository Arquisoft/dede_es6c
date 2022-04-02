import mongoose from 'mongoose';

const { Schema } = mongoose;

const historySchema  = new Schema({
  _id: {
      type: String,
      required: true
  },
  username:{
    type: String,
    required: true
  },
  product_name:{
    type: String,
    required: true
  },
  product_type:{
    type:String,
    required :false
  },
  product_price: {
      type: Number,
      required: true
  }
});

const historiales = mongoose.model('historiales', historySchema)
export default historiales; 