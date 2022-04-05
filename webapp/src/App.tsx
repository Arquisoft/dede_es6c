import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import  {getProducts} from './api/api';
import {SharedProduct} from './shared/shareddtypes';
import Products from './components/Products';
import Header from './components/NavBar';
import Footer from './components/Footer';
import ShoppingList from "./components/ShoppingList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SolidConection from "./SolidConection";
import Home from "./components/Home";
import History from "./components/History";
import Profile from "./profile";
import SolidDisconection from "./SolidDisconection";



function App(): JSX.Element {
  const [products,setProductos] = useState<SharedProduct[]>([]);
  
  const refreshProductList = async () => {
    setProductos(await getProducts());
  }

  useEffect(()=>{
    refreshProductList();
  });

  useEffect(() => {
    const memoryCart = localStorage.getItem("cart");
    if (memoryCart) {
      let cart: SharedProduct[] = JSON.parse(memoryCart);
      setCartItems(cart);
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []); 


  const [cartItems, setCartItems] = useState([] as SharedProduct[])

  const handleRemoveFromCart = (id: number) => {
    
    setCartItems(prev => (
        prev.reduce((ack,item) => {
          if(item._id ===id){
            if(item.amount===1) return ack;
            return [...ack, {...item,amount: item.amount -1}];
          }else{
            return [...ack,item];
          }
        },[] as SharedProduct[])
      ));
      localStorage.setItem("cart", JSON.stringify(cartItems));
  } ;

  const handleAddToCart = (clikedItem: SharedProduct) => {
   
    setCartItems(prev => {
      //1.is the item in cart?
      const isItemInCart = prev.find(item => item._id === clikedItem._id)
      if(isItemInCart){
        return prev.map(item => (
          item._id === clikedItem._id
          ?{...item, amount : item.amount + 1}
          : item
        ))
      } else {
        return[...prev, {...clikedItem, amount:1}];
      }
      
    })
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  return (
    <>     
        <Container style={{alignContent: "center", marginTop: "5%", minHeight: "50vh"}} maxWidth="lg">
        <Header cartItems = {cartItems} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />
        <Router>
          <Routes>
              <Route path="/products" element={<Products productos2={products} handleAddToCart={handleAddToCart}></Products>} />
              <Route path={"/"} element={<Home />} />
              <Route path='/history' element={<History/>} />
              <Route path='/login' element={<SolidConection/>} />
              <Route path='/logout' element={<SolidDisconection/>} />
              <Route path='/register' element={<SolidConection/>} />
              <Route path='/profile' element={<Profile/>} />
              <Route path='/checkout' element={<ShoppingList cart = {cartItems}/>}/>
          </Routes>
          </Router>
          <Footer />
        </Container>
    </>
  );  
}

export default App;
