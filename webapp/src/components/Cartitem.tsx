import {SharedProduct} from '../shared/shareddtypes';
import React, {  } from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';

type Props = {
    item: SharedProduct;
    addToCart: (clickedItem: SharedProduct) => void;
    removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({item,addToCart,removeFromCart}) => (
    <Card sx={{width: 600}} >
          <Grid container direction="column" justifyContent="flex-end" alignItems="center" >
        <div>
            <h3> {item.type}</h3>
            <h4> {item.name}</h4>
           
            <div className="information">
                <p>Price: ${item.price} </p>
                
                <p>Total: ${(item.amount * item.price).toFixed(2)} </p>
               
            </div>
        </div>
       
        <div className="buttons">
        <Grid container direction="row" justifyContent="flex-end" alignItems="center" >
            <Button
            size='small'
             disableElevation
             variant='contained'
             onClick={() => removeFromCart(item._id)} >
                 -   
            </Button>
            <p> {item.amount} </p>
            <Button
             size='small'
             disableElevation
             variant='contained'
             onClick={() => addToCart(item)} >
                 +   
            </Button>
            </Grid>
        </div>
        </Grid>
        </Card>
        );

export default CartItem;
