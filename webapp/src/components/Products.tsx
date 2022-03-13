import React, {Fragment, useState} from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Product from "./ProductCard";
import products from "../testProducts";
import { getProducts } from "../api/api";
import { SharedProduct } from '../shared/shareddtypes';

export default function Products() {

  let promise : Promise<SharedProduct[]>
  promise = getProducts();
  let productos2 : SharedProduct[] = [];
  promise.then(function(result)  {result.forEach(element => productos2.push(element)); });
  console.log(productos2);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {productos2.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Product key={product._id} id={product._id} name={product.name} type={product.type} price={product.price}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
