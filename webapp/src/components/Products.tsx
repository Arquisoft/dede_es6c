import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard';
import products from '../testProducts';

export default function Products() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        { products.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProductCard key={product.id}/>
          </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}