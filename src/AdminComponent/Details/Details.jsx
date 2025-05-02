import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Avatar, Button, Card, CardContent, CardHeader,  Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantByUserId, updateRestaurantStatus } from '../../component/State/Restaurant/Action'
import Grid2 from '@mui/material/Unstable_Grid2'

const Details = () => {
  
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  useEffect(() =>{
    console.log("useeffect details.jsx")
    dispatch(getRestaurantByUserId(jwt))
  },[jwt])
  const { restaurant } = useSelector(store => store);
  console.log("Details.jsx => restaurant",restaurant)
  const handleRestaurantStatus =() =>{

    dispatch(updateRestaurantStatus({restaurantId:restaurant.userRestaurants?.id,jwt}))
    console.log("details => restaurant status updated")
  }
  return (
    <div className='lg:px-20 px-5'>
      <div className="py-5 flex justify-center items-center gap-3">
        <h1 className='text-2xl lg:text-7xl text-center font-bold p-5'>
          {restaurant.userRestaurants?.name}
        </h1>
        <Button size='large' variant='contained' onClick={handleRestaurantStatus}
        className='py-[1rem] px-[2rem]'
         color={restaurant.userRestaurants?.open?"primary":"error"}>
          {restaurant.userRestaurants?.open?"click to close":"click to open"}</Button>
      </div>
      <Grid2 container spacing={2}>
        <Grid2 item xs={12}>
            <div className="w-full h-auto flex justify-center items-center">
                <Avatar sx={{width:"50%", aspectRatio:"1/1", borderRadius:"100%" ,height:"50%"}} 
                src={restaurant.userRestaurants?.images[0]}/>
            </div>
        </Grid2>

        <Grid2 item xs={12}>
                <div className="flex flex-col gap-5 font-bold text-2xl text-gray-200 px-10 py-5">
                  <div className="flex gap-10">
                    <p className=''>Owner</p>
                    <p className='text-gray-400'>{restaurant.userRestaurants?.owner?.email}</p>
                  </div>
                  <div className="flex gap-10">
                    <p className=''>Restaurant Name</p>
                    <p className='text-gray-400'>{restaurant.userRestaurants?.name}</p>
                  </div>
                  <div className="flex gap-10">
                    <p className=''>Cuisine Type</p>
                    <p className='text-gray-400'>{restaurant.userRestaurants?.cuisineType}</p>
                  </div>
                  <div className="flex gap-10">
                    <p className=''>Opening Hours</p>
                    <p className='text-gray-400'>opening hours</p>
                  </div>
                  <div className="flex gap-10">
                    <p className=''>Status</p>
                    {restaurant.userRestaurants?.open?
                    <button className='px-5 py-2 rounded-full text-green-700 font-bold'>opened</button>:
                    <button className='px-5 py-2 rounded-full text-red-700 font-bold'>closed</button>}
                  </div>
                </div>
              
        </Grid2>
        <div className="w-full h-[1px] border-white border-y-2"></div>
        <Grid2 item xs={12}>
                <div className="flex flex-col text-2xl font-bold px-10 py-5 gap-5 text-gray-200">
                  <div className="flex gap-10">
                    <p className=''>Email</p>
                    <p className='text-gray-400'>{restaurant.userRestaurants?.contactInformation?.email}</p>
                  </div>
                  <div className="flex gap-10">
                    <p className=''>Mobile</p>
                    <p className='text-gray-400'>{restaurant.userRestaurants?.contactInformation?.mobile}</p>
                  </div>
                  <div className="flex gap-10">
                    <p className=''>Social</p>
                    <div className='flex text-gray-400 items-center pb-3 pl-3'>
                      <a href={restaurant.userRestaurants.contactInformation.instagram}><InstagramIcon sx={{fontSize:"3rem"}}/></a>
                      <a href={restaurant.userRestaurants.contactInformation.twitter}><TwitterIcon sx={{fontSize:"3rem"}}/></a>
                      <a href='www.facebook.com'><FacebookIcon sx={{fontSize:"3rem"}}/></a>
                      <a href='www.linkedin.com'><LinkedInIcon sx={{fontSize:"3rem"}}/></a>
                    </div>
                  </div>
                </div>
        </Grid2>
      </Grid2>
    </div>
  )
}

export default Details
