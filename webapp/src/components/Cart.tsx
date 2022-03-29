import Cartitem  from "./Cartitem";
import React, { useState, useEffect } from 'react';
import { Drawer } from "@mui/material";
import {SharedProduct} from '../shared/shareddtypes';
import Grid from "@mui/material/Grid";


type Props = {
    cartItems: SharedProduct[];
    addToCart: (clickedItem: SharedProduct) => void;
    removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) =>{
    return(
        
        <Grid container direction="column" justifyContent="flex-end" alignItems="center">
        <h2>Your shopping cart</h2>
        {cartItems.length === 0 ? <p>No items in cart.</p>: null}
        {cartItems.map(item=> (
            <Cartitem 
                key={item._id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
            />
        ))}
       
        </Grid>
       
    )
}

export default Cart;
