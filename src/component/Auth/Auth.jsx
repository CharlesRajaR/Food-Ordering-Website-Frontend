import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';


 const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  margintop:1,
  padding:1,
  // height:500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Auth = () => {
    const handleClose = () =>{
        navigate('/')
    }
    const navigate = useNavigate();
    const location = useLocation();
  return (
     <Modal open={location.pathname === '/account/login' || location.pathname === '/account/register'}
      onClose={handleClose}>
      <Box  sx={style}>
      {/* {location.pathname === '/account/register'?<RegisterForm/>:<LoginForm/>} */}
      {location.pathname === '/account/login'?<LoginForm/>:<RegisterForm/>}
      </Box>
    </Modal> 
)
}
export default Auth
