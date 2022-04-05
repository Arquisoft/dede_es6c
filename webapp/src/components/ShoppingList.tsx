import {SharedProduct} from "../shared/shareddtypes";
import Item from "./ShoppingListItems";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"

type Props = {
    cartItems : SharedProduct[];
}

const ShoppingList : React.FC<Props> = ({cartItems}) => {
    return(
        <Box sx={{ flexGrow: 1 }}>
      <h1>Checkout</h1>
      <Grid  sx={{width: 600}} container direction="column" justifyContent="flex-end" alignItems="center">
        {cartItems.map((product) => (
            <Item item={product}/>
        ))}
      </Grid>
    </Box>
    );
}

export default ShoppingList;
