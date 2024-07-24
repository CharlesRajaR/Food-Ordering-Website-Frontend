import { Avatar, Badge, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { Person } from '@mui/icons-material';
import { useSelector } from 'react-redux';




const Navbar = () => {
  const { auth, cart } = useSelector(store => store);
 
  console.log("navbar cart",cart);
  const navigate = useNavigate();
  const handleAvatarClick = () =>{
    if(auth.user?.role === "ROLE_CUSTOMER"){
      navigate('/my-profile');
    }
    else{
      navigate('/admin/restaurant');
    }
  }

  return (
    <div className='px-5 sticky top-0 z-50 py-[0.8rem] bg-[#f714ce] lg:px-20 flex justify-between'>
    <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
    <li onClick={() => navigate('/')} className='logo font-semibold text-gray-300 text-2xl'>
        RCR Food
    </li>    
    </div>    
    <div className='flex items-center space-x-2 lg:space-x-10'>
        <div>
         <IconButton onClick={console.log("cart",cart)}>
          <SearchIcon sx={{fontSize:'1.5rem'}}/>
         </IconButton>
        </div>
        <div>
          {auth.user?<Avatar onClick={handleAvatarClick} sx={{bgcolor:"white", color:"pink.A400"}}>{auth.user?.email.charAt(0).toUpperCase()}</Avatar>:
          <IconButton onClick={() => navigate('/account/login')}>
            <Person/>
            </IconButton>
            }
        </div>
        <div>
          <IconButton onClick={() => {
           navigate('/cart');
          //dispatch(findCart(auth.jwt || jwt));
           console.log("find cart dispatch in navbar")
          }}>
            <Badge color='primary' badgeContent={cart.cart?.items.length}>
             <ShoppingCartIcon sx={{fontSize:'1.5rem'}}/>
            </Badge>
          </IconButton>
        </div>
    </div>
    </div>
  )
}

export default Navbar

