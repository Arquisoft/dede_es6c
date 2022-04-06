import moongose, { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    PODUrl: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

export const User = model(
    "UserVerification",
    UserSchema
  );

/*export interface UserModel extends moongose.Document {
    email: string;
    name: string;
    lastName: string;
    password: string;
    PODUrl: string;
}

export default model<UserModel>('User', UserSchema);*/
