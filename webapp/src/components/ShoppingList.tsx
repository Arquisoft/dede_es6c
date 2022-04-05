import {SharedProduct} from "../shared/shareddtypes";
import Item from "./ShoppingListItems";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"
import Button from '@mui/material/Button';



const memoryCart = localStorage.getItem("cart");
if (memoryCart) {
  let cart: SharedProduct[] = JSON.parse(memoryCart);

}

type Props = {
  
  cart : SharedProduct[];
}

const ShoppingList : React.FC<Props> = ({cart}) => {
    return(
     

        <Box sx={{ flexGrow: 1 }}>
      <h1>Checkout</h1>
      <Grid  sx={{width: 600}} container direction="column" justifyContent="center" alignItems="center">
        {cart.map((product) => (
            <Item item={product}/>
        ))}
      </Grid>

      <Button onClick={() =>  window.location.href = "http://localhost:3000/products" } 
      color="inherit"> Finalizar Compra
      </Button>
    </Box>







    );

   
}



export default ShoppingList;
