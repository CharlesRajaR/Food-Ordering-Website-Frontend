import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import Order from './Order';
import { Favorite } from '@mui/icons-material';
import ProfileNavigation from './ProfileNavigation';
import Favourites from './Favourites';
import Event from './Event';
import Address from './Address';

const Profile = () => {
    const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className='md:flex justify-between'>
        <div className="sticky h-[100vh] md:w-[20%]">
         <ProfileNavigation  open={openSideBar}/>
        </div>
        <div className="md:w-[80%]">
            <Routes>
                <Route path='/' element={<UserProfile/>}/>
                <Route path='/orders' element={<Order/>}/>
                <Route path='/favourites' element={<Favourites/>}/>
                <Route path='/events' element={<Event/>}/>
                <Route path='/address' element={<Address/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Profile
