import  DashboardIcon  from '@mui/icons-material/Dashboard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CategoryIcon from '@mui/icons-material/Category';
import EventIcon from '@mui/icons-material/Event';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react'
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../component/State/Authentication/Action';

export default function AdminSideBar({handleClose}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleNavigate = (item) =>{
       if(item.title === 'Logout'){
        dispatch(logout())
        handleClose()
       }
       else{
       navigate(`/admin/restaurant${item.path}`)
       }
    }
    const menu = [
        {title:"Dashboard", icon:<DashboardIcon/>, path:'/'},
        {title:'Orders', icon:<ShoppingBagIcon/>, path:'/orders'},
        {title:'Menu', icon:<ShopTwoIcon/>, path:'/menu'},
        {title:'Ingredients', icon:<FastfoodIcon/>, path:'/ingredients'},
        {title:'Category', icon:<CategoryIcon/>, path:'/category'},
        {title:'Event', icon:<EventIcon/>, path:'/event'},
        {title:'Details', icon:<AdminPanelSettingsIcon/>, path:'/details'},
        {title:'Logout', icon:<LogoutIcon/>, path:'/'}
    ]
    const isSmallScreen = useMediaQuery("(max-width:1080px)")
  return (
    <div>
      <>
      <Drawer sx={{zIndex:1}} anchor='left' open={true} 
      onClose={handleClose} variant={isSmallScreen?'temporary':'permanent'}>
       <div className='w-[70vw] md:w-[20vw] h-screen flex flex-col justify-center
        text-xl space-y-[1.65rem] mt-3' >
        {menu.map((item, i) => {
            return(
            <>
            <div className="px-5 flex items-center gap-5 cursor-pointer" onClick={() => handleNavigate(item)}>
                {item.icon}
                <span>{item.title}</span>
            </div>
             {i !== menu.length-1 && <Divider/>}
            </>)
        })}

       </div>
      </Drawer>
      </>
    </div>
  )
}
