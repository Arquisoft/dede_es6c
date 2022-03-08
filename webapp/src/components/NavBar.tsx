import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Logo from '../images/logo_opt.jpg';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar id="navBar" position="fixed">
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DeDe
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">Shopping Cart</Button>
          <Button color="inherit">History</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}