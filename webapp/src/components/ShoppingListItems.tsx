import {SharedProduct} from '../shared/shareddtypes';
import React, {  } from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

type Props = {
    item: SharedProduct;
};


const ShoppingListItem: React.FC<Props> = ({item}) => (
    <Card className="ShoppingList" id="item" sx={{width: 600}} >
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
            <p>Cantidad:  {item.amount} </p>
            </Grid>
        </div>
        </Grid>
        </Card>
        );

export default ShoppingListItem;
