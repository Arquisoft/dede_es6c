import React, { useState, useEffect } from 'react';
import  { useQuery} from 'react-query';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';

//styles
import {Wrapper,StyledButton} from './App.styles';


import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import EmailForm from './components/EmailForm';
import UserList from './components/UserList';
import  {getUsers,getProducts} from './api/api';
import {User,SharedProduct} from './shared/shareddtypes';
import Products from './components/Products';
import Header from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SolidConection from "./SolidConection";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";
import History from "./components/History";
import Profile from "./profile";
import SolidDisconection from "./SolidDisconection"
import {product} from './components/ProductCard';


function App(): JSX.Element {
  const [products,setProductos] = useState<SharedProduct[]>([]);

  const refreshProductList = async () => {
    setProductos(await getProducts());
  }

  useEffect(()=>{
    refreshProductList();
  },[]);

  
  
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
  } ;

  const handleAddToCart = (clikedItem: SharedProduct) => {
    setCartItems(prev => {
      //1.is the item in cart?
      const isItemInCart = prev.find(item => item._id === clikedItem._id)
      if(isItemInCart){
        console.log("+1");
        return prev.map(item => (
          item._id === clikedItem._id
          ?{...item, amount : item.amount + 1}
          : item
        ))
      }
      //first apereance
      console.log("Entra aqui");
      return[...prev, {...clikedItem, amount:1}];
      
      
    })
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
          </Routes>
          </Router>
          <Footer />
        </Container>
        
      
     
    </>
  );


 

  
}



export default App;
