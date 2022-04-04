
export type User = {
    name:string;
    email:string;
  }

export type SharedProduct = {
    _id: number;
    name: string;
    price: number;
    type: string;
    imgUrl: string;
    amount: number;
  }

  export type SharedHistory = {
    _id: number;
    username: string;
    product_name: string;
    product_type: string;
    product_price: number;
    id: number;
  }