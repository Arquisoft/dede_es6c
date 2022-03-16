import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Logo from '../images/logo.png';
import SolidConection from "../SolidConection";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from '../ProductList';

export default function NavBar(): JSX.Element{
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar id="navBar">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={Logo} alt="logo" id="logo"/>
          </IconButton>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            DeDe
          </Typography>
          
          <Button href="http://localhost:3000/" color="inherit">Home</Button>
          <Button href="http://localhost:3000/products" color="inherit">Products</Button>
          <Button href="http://localhost:3000/shoppingCart" color="inherit">Shopping Cart</Button>
          <Button href="http://localhost:3000/history" color="inherit">History</Button>
          <Button href="http://localhost:3000/login" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
