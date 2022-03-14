import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import EmailForm from './components/EmailForm';
import UserList from './components/UserList';
import  {getUsers} from './api/api';
import {User} from './shared/shareddtypes';
import ProductList from './ProductList';
import './App.css';
import Header from './components/NavBar';
import {ProductType} from './shared/shareddtypes';
import  {getProducts} from './api/api';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SolidConection from "./SolidConection";


function App(): JSX.Element {

  const [products,setProducts] = useState<ProductType[]>([]);

  const refreshUserList = async () => {
    setProducts(await getProducts());
  }

  useEffect(()=>{
    refreshUserList();
  },[]);

  return (
    <>


      <Header />
        <Container style={{alignContent: "center", marginTop: "5%", minHeight: "50vh"}} maxWidth="lg">
        <Router>
          <Routes>
              <Route path="/products" element={<ProductList />} />
              <Route path='/login' element={<SolidConection/>} />
              <Route path='/register' element={<SolidConection/>} />
          </Routes>
          </Router>
        </Container>
      </>
  );
}

export default App;
