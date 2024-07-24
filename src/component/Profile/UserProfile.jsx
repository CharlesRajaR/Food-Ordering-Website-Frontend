// import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Avatar, Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../State/Authentication/Action'
import { useNavigate } from 'react-router-dom'

const UserProfile = () => {
    const { auth } = useSelector(store => store)
    console.log("auth",auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () =>{
        dispatch(logout())
        navigate('/')
        console.log("user logout success")
    }
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
        <div className="flex flex-col items-center justify-center">
            <Avatar>{auth.user?.email.charAt(0).toUpperCase()}</Avatar>
            {/* <h1 className='py-5 text-2xl font-semibold'>{auth.user?.fullName}</h1> */}
            <p className='py-5 text-2xl font-semibold'>{auth.user?.email}</p>
            <Button onClick={handleLogout} variant='contained'>
                Logout
            </Button>
        </div>
    </div>
  )
}

export default UserProfile
