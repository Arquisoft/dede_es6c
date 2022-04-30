import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Product from "./ProductCard";
import { SharedProduct } from '../shared/shareddtypes';

type Productos = {
  productos2:SharedProduct[];
  handleAddToCart: (clikedItem: SharedProduct) => void;
}

const Products: React.FC<Productos> = ({ productos2,handleAddToCart})=> {

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <h1 id="titleProductos">Vista de productos</h1>
      <Grid container spacing={2}>
        {productos2.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} >
            <Product producto={product} handleAddToCart={handleAddToCart}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Products;
