import { Drawer } from "@mui/material";
import {Wrapper,StyledButton} from '../App.styles';
import React, { useState, useEffect } from 'react';
import {User,SharedProduct} from '../shared/shareddtypes';


export default function ShoppingCart() {

    const [cartOpen,setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([] as SharedProduct[])

    return (
       
        <body>

       
               <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
                   Cart goes here
                </Drawer>
          
        </body>
    );
}