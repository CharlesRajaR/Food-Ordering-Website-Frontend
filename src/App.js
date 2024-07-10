import './App.css';
// import Navbar from './component/Navbar/Navbar';
// import Home from './component/Home/Home';
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme } from './Theme/DarkTheme'
// import RestaurantDetails from './component/Restaurant/RestaurantDetails';
// import Cart from './component/Cart/Cart';
import CustomerRouter from './CustomerRouter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentication/Action';
import { findCart } from './component/State/Cart/Action';

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector(store => store);
  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(auth.jwt || jwt));
    console.log("user and find cart success",auth.user)
  }, [auth.jwt]);
  
  
  
  return (
    <ThemeProvider theme={darkTheme}>
     <CssBaseline/>
     <CustomerRouter/>
    </ThemeProvider>
  );
}

export default App;
