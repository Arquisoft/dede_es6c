import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import EmailForm from './components/EmailForm';
import UserList from './components/UserList';
import  {getUsers,getProducts} from './api/api';
import {User,SharedProduct} from './shared/shareddtypes';
import Products from './components/Products';
import './App.css';
import Header from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SolidConection from "./SolidConection";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";
import History from "./components/History";


function App(): JSX.Element {

  const [products,setProductos] = useState<SharedProduct[]>([]);

  const refreshProductList = async () => {
    setProductos(await getProducts());
  }

  useEffect(()=>{
    refreshProductList();
  },[]);
  

  return (
    <>
      <Header />
        <Container style={{alignContent: "center", marginTop: "5%", minHeight: "50vh"}} maxWidth="lg">
        <Router>
          <Routes>
              <Route path="/products" element={<Products productos2={products}></Products>} />
              <Route path={"/"} element={<Home />} />
              <Route path='/shoppingCart' element={<ShoppingCart/>} />
              <Route path='/history' element={<History/>} />
              <Route path='/login' element={<SolidConection/>} />
              <Route path='/register' element={<SolidConection/>} />
          </Routes>
          </Router>
        </Container>
    </>
  );
}

export default App;
