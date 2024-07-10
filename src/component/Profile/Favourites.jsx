import React from 'react'
import { useSelector } from 'react-redux';
import FavoriteCard from './FavoriteCard';


const Favourites = () => {

  const { auth } = useSelector(store => store)
  console.log("user",auth.user);
  console.log("favorites",auth.favorites);

  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center '>
        My Favorites
      </h1>
      <div className='flex flex-wrap gap-3 justify-center'>
       {
       auth.favorites.map((item) => <FavoriteCard item={item}/>)
       }
      </div>
    </div>
  )
}

export default Favourites