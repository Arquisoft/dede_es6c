import React, { useState, useEffect } from 'react';
import  { useQuery} from 'react-query';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';

//styles
import {Wrapper} from './App.styles';


import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import EmailForm from './components/EmailForm';
import Welcome from './components/Welcome';
import UserList from './components/UserList';
import  {getUsers,getProducts} from './api/api';
import {User,SharedProduct} from './shared/shareddtypes';
import Products from './components/Products';
import './App.css';





function App(): JSX.Element {

  const [users,setUsers] = useState<User[]>([]);

  const refreshUserList = async () => {
    setUsers(await getUsers());
  }

  useEffect(()=>{
    refreshUserList();
  },[]);
//Listado de productos
  const [products,setProductos] = useState<SharedProduct[]>([]);

  const refreshProductList = async () => {
    setProductos(await getProducts());
  }

  useEffect(()=>{
    refreshProductList();
  },[]);
  

  return (
    <>
      <Container maxWidth="sm">
       
        
        <Products productos2={products}></Products>
        <Link href="https://github.com/Arquisoft/dede_es6c">Source code</Link>
      </Container>
    </>
  );



  const handleAddToCart = (clickedItem: SharedProduct) => null;
  const handleRemoveFromCart = () => null;
}



export default App;
