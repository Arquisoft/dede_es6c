import mongoose, {Schema, model} from "mongoose";

interface User extends mongoose.Document {
    name: string;
    email: string;
    password: string;
}

const UserSchema = new Schema({
    name: String, 
    email: String,
    password: String,
})

export default model<User>('User', UserSchema);