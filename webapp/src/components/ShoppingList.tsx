import {SharedProduct} from "../shared/shareddtypes";
import Item from "./ShoppingListItems";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"
import Button from '@mui/material/Button';
import {addHistory} from '../api/api';

type Props = {
  cart : SharedProduct[];
  removeFromCart : (id : number, amount: number) => void;
}



const ShoppingList : React.FC<Props> = ({cart, removeFromCart}) => {
    
  const completeOrder = (cart: SharedProduct[]) => {
    cart.forEach(element => {
      addHistory(element);
      removeFromCart(element._id, element.amount);
    });
    
    window.location.href = "http://localhost:3000/history"
}
  return(
        <Box sx={{ flexGrow: 1 }}>
      <h1>Checkout</h1>
      <Grid  sx={{width: 600}} container direction="column" justifyContent="center" alignItems="center">
        {cart.map((product) => (
            <Item item={product}/>
        ))}
      </Grid>

      <Button onClick={() =>  completeOrder(cart) } 
      color="inherit"> Create order
      </Button>
    </Box>
    );
   
}

export default ShoppingList;
