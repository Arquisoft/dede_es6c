export type User = {
    name:string;
    email:string;
  }

export type SharedProduct = {
    _id: number;
    name: String;
    price: number;
    type: String;
    //Pra ver cuando veeces esta en el carrito creo
    amount: number;
  }
