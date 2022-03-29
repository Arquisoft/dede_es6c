import Button from '@material-ui/core/Button';

import {SharedProduct} from '../shared/shareddtypes';
import React, { useState, useEffect } from 'react';

import {Wrapper} from './Cartitem.styles';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

type Props = {
    item: SharedProduct;
    addToCart: (clickedItem: SharedProduct) => void;
    removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({item,addToCart,removeFromCart}) => (
    <Card sx={{maxWidth: 600}}>
          <Grid container direction="column" justifyContent="flex-end" alignItems="center">
        <div>
            <h3> {item.name}</h3>
            <div className="information">
                <p>Price: ${item.price} </p>
                <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
            </div>
        </div>
        <div className="buttons">
            <Button
            size='small'
             disableElevation
             variant='contained'
             onClick={() => removeFromCart(item._id)} >
                 -
            </Button>
            <p>{item.amount}</p>
            <Button
             size='small'
             disableElevation
             variant='contained'
             onClick={() => addToCart(item)} >
                 +
            </Button>
        </div>
        </Grid>
        </Card>
        );

export default CartItem;
