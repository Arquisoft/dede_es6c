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
        
        <Grid  sx={{width: 600}} container direction="column" justifyContent="flex-end" alignItems="center">
        <h2>Tow truck</h2>
        {cartItems.length === 0 ? <p>No cars to tow.</p>: <p>Products</p>}
        
        {cartItems.map(item=> (
            <Cartitem 
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
            />
        ))}   

        <Button onClick={() => {localStorage.getItem("sessionID")!=null ? 
        window.location.href = "http://localhost:3000/checkout" : 
        window.location.href = "http://localhost:3000/login" }} 
        color="inherit">Pay
        </Button>

        </Grid>
    )
}

export default Cart;
