import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import accounting from "accounting";

import coche from '../images/coche.jpg'; // Prueba de visualización del diseño


type product = {
  id : Number;
  name: String;
  price: number;
  type : String;
}

export default function Product(producto:product) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography variant='h5' color='textSecondary'>
            {accounting.formatMoney(producto.price, "€")}
              
          </Typography>
        }
      />
      <CardMedia
        component="img"
        alt="product image"
        height="140"
        image={coche}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {producto.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {producto.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
}
