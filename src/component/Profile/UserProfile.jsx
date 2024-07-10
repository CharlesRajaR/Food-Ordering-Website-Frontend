import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const UserProfile = () => {
    const { auth } = useSelector(store => store)
    console.log("auth",auth)
    const handleLogout = () =>{
        
    }
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
        <div className="flex flex-col items-center justify-center">
            <AccountCircleIcon/>
            <h1 className='py-5 text-2xl font-semibold'>{auth.user?.fullName}</h1>
            <p>{auth.user?.email}</p>
            <Button onClick={handleLogout} variant='contained'>
                Logout
            </Button>
        </div>
    </div>
  )
}

export default UserProfile
