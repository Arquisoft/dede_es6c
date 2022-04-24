import Cartitem  from "./Cartitem";
import {SharedProduct} from '../shared/shareddtypes';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';

type Props = {
    cartItems: SharedProduct[];
    addToCart: (clickedItem: SharedProduct) => void;
    removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) =>{

    return(
        
        <Grid id="Cart" sx={{width: 600}} container direction="column" justifyContent="flex-end" alignItems="center">
        <h2>Tow truck</h2>
        {cartItems.length === 0 ? <p>No cars to show.</p>: <p>Products</p>}
        
        {cartItems.map(item=> (
            <Cartitem 
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
            />
        ))}   
        <Button id="Pagar" onClick={() => {
            if (localStorage.getItem("sessionID")==null)
                window.location.href = "/login"
            else if (cartItems.length === 0)
                window.location.href = "/products"
            else
                window.location.href = "/checkout" }}
        color="inherit">Pay
        </Button>

        </Grid>
    )
}

export default Cart;
