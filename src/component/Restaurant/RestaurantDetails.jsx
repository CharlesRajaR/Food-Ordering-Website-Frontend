import { Divider, FormControlLabel, FormControl, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { LocationOn,CalendarToday} from '@mui/icons-material'
import MenuCard from './MenuCard'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantById, getRestaurantCategory } from '../State/Restaurant/Action'
import { getMenuItemByRestaurantId } from '../State/Menu/Action'

//const categories = ["pizza", "burger", "biryani", "chicken", "rice"]

const RestaurantDetails = () => {
    const foodTypes = [
    {label:"All" , value:"All"},
    {label:"Vegetarian" , value:"Vegetarian"},
    {label:"Non-Vegetarian" , value:"Non-Vegetarian"},
    {label:"Seasonal" , value:"Seasonal"}
]
    const [selectedCategory, setSelectedCategory] = useState(""); 
    const { auth, restaurant, menu } = useSelector(store => store)
    const[foodType, setFoodType] = useState("All");
    const {id} = useParams();
    const jwt = localStorage.getItem("jwt"); 
    const dispatch = useDispatch();
        const reqData = {
        jwt,
        restaurantId:id,
        vegetarian:foodType==="Vegetarian",
        nonVegetarian:foodType==="Non-Vegetarian",
        seasonal:foodType==="Seasonal",
        foodCategory:selectedCategory  
      }
    useEffect(() =>{
       dispatch(getRestaurantById({jwt, restaurantId:id}))
       dispatch(getRestaurantCategory({jwt, restaurantId:id}))
      dispatch(getMenuItemByRestaurantId(reqData))
    },[selectedCategory,foodType])

    // useEffect(() =>{
    //     //  dispatch(getRestaurantCategory({jwt, restaurantId:id}))
    //      dispatch(getMenuItemByRestaurantId(reqData))
    // },[selectedCategory,foodType])

    // const test = () => {
    //   console.log("getMenuItemByRestaurantId")
    //   

    //     console.log("menu",menu)
    // }
    console.log("auth",auth);
    console.log("restaurant",restaurant)
    console.log("menu",menu)
    console.log("restaurant category",restaurant.category)
  
    const handleFilterCategory = (e, value) => {
      setSelectedCategory(value)
      console.log(e.target.value, e.target.name, value)
    }
    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name)
        setFoodType(e.target.value)
    }
  return (
    <div className='px-5 lg:px-20'>
      <section >/
        <h3>
          {/* <button onClick={() => test()} className='primary'>click to test</button> */}
          restaurant
        </h3>
        <div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <img src="http://localhost:3000/images/banner.jpg" className='w-full h-[40vh] object-cover' alt="" />
              </Grid>
              <Grid item xs={6} >
                <img src="http://localhost:3000/images/banner.jpg" className='w-full h-[40vh] object-cover' alt="" />
              </Grid>
              <Grid item xs={6}>
                <img src="http://localhost:3000/images/banner.jpg" className='w-full h-[40vh] object-cover' alt="" />
              </Grid>
            </Grid>
        </div>
        <div className='pt-3 pb-5'>
          <h1 className='text-xl font-semibold'>
          {restaurant.restaurant?.name}
          </h1>
          <p className='text-gray-500 flex-items-center gap-3'>
            <span>
          {restaurant.restaurant?.description}
           </span>
            
           </p>
           <LocationOn/>
           <span>Mumbai</span>
           <p className='text-gray-500 flex-items-center gap-3'>
            <CalendarToday/>
           <span>Monday 9.00AM to 6.00PM</span>
           </p>
        </div>
     </section>  
     <Divider/>
     <section className='pt-[2rem] lg:flex relative'>
        <div className='space-y-10 md:w-[20%] filter'>
        <div className='box space-y-5 lg:sticky top-28 bp-5 shadowword'>
         <div>
            <Typography variant='h5' sx={{paddingbottom:"1rem"}}>
                Food Type
            </Typography>
            <FormControl className='py-10 space-y-5' component={"fieldSet"}>
                <RadioGroup name = "food-type" value={foodType} onChange={handleFilter}>
                    {foodTypes.map((item) => <FormControlLabel key={item.value} value={item.name} control={<Radio/>} label={item.name}/>)}
                </RadioGroup>
            </FormControl>
         </div>
         <Divider/>
          <div>
            <Typography variant='h5' sx={{paddingbottom:"1rem"}}>
                Food Category
            </Typography>
            <FormControl className='py-10 space-y-5' component={"fieldSet"}>
                <RadioGroup name="foodCategory" onChange={handleFilterCategory} value={selectedCategory}>
                    {restaurant.category?.map((item) => <FormControlLabel key={item.id} value={item.name} control={<Radio/>} label={item.name}/>)}
                </RadioGroup>
            </FormControl>
         </div>
        </div>
        </div>
        <div className='space-y-10 md:w-[80%] lg:pl-10'>
           {menu.menuItem?.map((item) => <MenuCard item = {item}/>)}
        </div>
     </section>
    </div>
  )
}

export default RestaurantDetails
