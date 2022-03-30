import { ObjectId } from "mongodb";

export type User = {
    name:string;
    email:string;
  }

export type SharedProduct = {
    _id: ObjectId;
    name: string;
    price: number;
    type: string;
    imgUrl: string;
    amount: number;
  }
