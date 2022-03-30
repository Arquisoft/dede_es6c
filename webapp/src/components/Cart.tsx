import Cartitem  from "./Cartitem";
import {SharedProduct} from '../shared/shareddtypes';
import Grid from "@mui/material/Grid";

type Props = {
    cartItems: SharedProduct[];
    addToCart: (clickedItem: SharedProduct) => void;
    removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) =>{
    return(
        
        <Grid  sx={{width: 600}} container direction="column" justifyContent="flex-end" alignItems="center">
        <h2>Grua</h2>
        {cartItems.length === 0 ? <p>No hay coches pa remolcar.</p>: <p>Productos</p>}
        
        {cartItems.map(item=> (
            <Cartitem 
                
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
            />
        ))}   
        </Grid>
    )
}

export default Cart;
