import React, {Fragment, useState} from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Product from "./ProductCard";
import products from "../testProducts";

export default function Products() {
  products.forEach((product) => console.log(product));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Product key={product.id} product />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
