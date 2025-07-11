import React from 'react'
import './Home.css'
import MultiItemCarousel from './MultiItemCarousel'
import RestaurantCard from '../Restaurant/RestaurantCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRestaurantsAction } from '../State/Restaurant/Action'
import { useEffect } from 'react'
import { findCart } from '../State/Cart/Action'

const Home = () => {
  const dispatch = useDispatch();
  const  jwt = localStorage.getItem("jwt");
  useEffect(() =>{
    dispatch(getAllRestaurantsAction(jwt));
  },[])
  const { restaurant } = useSelector(store => store)
  console.log("restaurant",restaurant)
  return (
    <div>
      <section className='banner -z-50 relative flex flex-col justify-center items-center'>
     <div className="w-[50vw] z-10 text-center ">
        <p className='text-2xl lg:text-6xl font-bold z-10 py-5'> 
            RCR Foods
        </p>
        <p className='z-10 text-gray-300 text-xl lg:text-4xl'>
            Satisfy your cravings with just a few clicks! Order from your favorite restaurants and enjoy 
            delicious food delivered right to your door
        </p>
     </div>
     <div className='cover absolute top-0 left-0 right-0'>

     </div>
     <div className='fadeout'>

     </div>
      </section>

      <section className='p-10 lg:py-10 lg:px-20'>
        <p className='md:text-xl font-semibold text-gray-400 py-3 pb-10'>Top Meals</p>
        <MultiItemCarousel/>
      </section>

      <section className='px-5 lg:px-20'>
        <h1 className='md:text-2xl font-semibold text-gray-400 py-3'>
         Order From Our Handpicked Favourites
        </h1>
        <div className='flex flex-wrap items-center justify-around'>
          {restaurant.restaurants?.map((item) => <RestaurantCard item={item}/>)}
        </div>
      </section>
    </div>
  )
}

export default Home
