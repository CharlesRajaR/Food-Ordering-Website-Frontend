import { Divider, Drawer, useMediaQuery } from '@mui/material'
import React from 'react'
import  ShoppingBagIcon  from '@mui/icons-material/ShoppingBag'
import  FavoriteIcon  from '@mui/icons-material/Favorite'
import { HomeIcon } from '@mui/icons-material/Home'
import  AccountBalanceWalletIcon  from '@mui/icons-material/AccountBalanceWallet'
import  NotificationsActiveIcon  from '@mui/icons-material/NotificationsActive'
import AddLocationAltSharpIcon from '@mui/icons-material/AddLocationAltSharp'
import EventIcon  from '@mui/icons-material/Event'
import  LogoutIcon  from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../State/Authentication/Action'
   const menu = [
 {
   title:'Orders', icon:<ShoppingBagIcon/>
 },
 {
   title:'Favourites', icon:<FavoriteIcon/>
 },
 {
   title:'Notificaions', icon:<NotificationsActiveIcon/>
 },
 {
   title:'Payment', icon:<AccountBalanceWalletIcon/>
 },
 {
   title:'Address', icon:<AddLocationAltSharpIcon/>
 },
 {
   title:'Events', icon:<EventIcon/>
 },
 {
   title:'Logout', icon:<LogoutIcon/>
 }
]

const ProfileNavigation = ({open, handleClose}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleNavigateItem =(item) =>{
       if(item.title === "Logout"){
        dispatch(logout());
        navigate('/');
       }else{
 navigate(`/my-profile/${item.title.toLowerCase()}`)
       }
       
    }
    const isSmallScreen = useMediaQuery("(max-width:900px)")
  return (
    <div>
      <Drawer onClose={handleClose} variant={isSmallScreen?'temporary':'permanent'} anchor='left'
      sx={{zIndex:-1, position:'sticky'}}>
       <div className="w-[50vw] md:w-[20vw] h-[100vh] flex-col justify-center text-xl gap-8 pt-16">
         {menu.map((item, i) => <>
         <div  onClick={()=>{handleNavigateItem(item)}} className='px-5 flex items-center space-x-5 h-[11vh] cursor-pointer'>
            {item.icon}
            <span>
                {item.title}
            </span>
         </div>
         {i !== menu.length-1 && <Divider/>}
         </>)}
       </div>
      </Drawer>
    </div>
  )
}
export default ProfileNavigation
