import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Button, Card, CardContent, CardHeader, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantByUserId, updateRestaurantStatus } from '../../component/State/Restaurant/Action'
import { RestaurantSharp } from '@mui/icons-material'

const Details = () => {
  
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  useEffect(() =>{
    console.log("useeffect details.jsx")
    dispatch(getRestaurantByUserId(jwt))
  },[])
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
        className='py-[1rem] px-[2rem]' color={restaurant.userRestaurants?.open?"primary":"error"}>{restaurant.userRestaurants?.open?"close":"open"}</Button>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>
              <CardContent>
                <div className="space-y-4 text-gray-200">
                  <div className="flex">
                    <p className='w-48'>Owner</p>
                    <p className='text-gray-400'><span>- </span>{restaurant.userRestaurants?.owner?.email}</p>
                  </div>
                  <div className="flex">
                    <p className='w-48'>Restaurant Name</p>
                    <p className='text-gray-400'><span>- </span>{restaurant.userRestaurants?.name}</p>
                  </div>
                  <div className="flex">
                    <p className='w-48'>Cuisine Type</p>
                    <p className='text-gray-400'><span>- </span>{restaurant.userRestaurants?.cuisineType}</p>
                  </div>
                  <div className="flex">
                    <p className='w-48'>Opening Hours</p>
                    <p className='text-gray-400'><span>- </span>opening hours</p>
                  </div>
                  <div className="flex">
                    <p className='w-48'>Status</p>
                    {restaurant.userRestaurants?.open?<button className='px-5 py-2 rounded-full md-green-400 text-gray-300'><span> - </span>open</button>:
                    <button className='px-5 py-2 rounded-full md-red-400 text-gray-950'><span> - </span>close</button>}
                  </div>
                </div>
              </CardContent>
            </span>}>

            </CardHeader>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>
              <CardContent>
                <div className="space-y-4 text-gray-200">
                  <div className="flex">
                    <p className='w-48'>Contact</p>
                    <p className='text-gray-400'><span>- </span> RCR Food</p>
                  </div>
                  <div className="flex">
                    <p className='w-48'>Address</p>
                    <p className='text-gray-400'><span>- </span> RajaCR Restaurant</p>
                  </div>
                  <div className="flex">
                    <p className='w-48'>Country</p>
                    <p className='text-gray-400'><span>- </span>Vegetarian, Non-veg, Seasonal</p>
                  </div>
                  <div className="flex">
                    <p className='w-48'>City</p>
                    <p className='text-gray-400'><span>- </span>9Am</p>
                  </div>
                  <div className="flex">
                    <p className='w-48'>Postal code</p>
                    <p className='text-gray-400'><span>- </span> RajaCR Restaurant</p>
                  </div>
                  <div className="flex">
                    <p className='w-48'>Street Address</p>
                    <p className='text-gray-400'><span>- </span> RajaCR Restaurant</p>
                  </div>
                </div>
              </CardContent>
            </span>}>

            </CardHeader>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>
              <CardContent>
                <div className="space-y-4 text-gray-200">
                  <div className="flex">
                    <p className='w-48'>Email</p>
                    <p className='text-gray-400'><span>- </span>{restaurant.userRestaurants?.contactInformation?.email}</p>
                  </div>
                  <div className="flex">
                    <p className='w-48'>Mobile</p>
                    <p className='text-gray-400'><span>- </span>{restaurant.userRestaurants?.contactInformation?.mobile}</p>
                  </div>
                  <div className="flex">
                    <p className='w-48'>Social</p>
                    <div className='flex text-gray-400 items-center pb-3 pl-3'>
                      <span className='pr-5'>- </span>
                      <a href={restaurant.userRestaurants.contactInformation.instagram}><InstagramIcon sx={{fontSize:"3rem"}}/></a>
                      <a href={restaurant.userRestaurants.contactInformation.twitter}><TwitterIcon sx={{fontSize:"3rem"}}/></a>
                      <a href=""><FacebookIcon sx={{fontSize:"3rem"}}/></a>
                      <a href=""><LinkedInIcon sx={{fontSize:"3rem"}}/></a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </span>}>
             
            </CardHeader>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Details
