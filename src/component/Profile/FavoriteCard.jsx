import { Card, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavouriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { addToFavorites } from '../State/Authentication/Action';
// import { isPresentInFavorite } from '../config/logic';

const FavoriteCard = ({item}) => {
  // const { auth } = useSelector(store => store)
  // console.log("user",auth.user);
  // console.log("favorites",auth.favorites);
  // const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const jwt = localStorage.getItem("jwt");
//   const handleAddToFavorite = () => {
//      dispatch(addToFavorites(jwt, item.id))
//      console.log("item id",item.id);
//   }

  return (
    <div className='pb-1'>
      <Card className='w-[18rem]'>
        <div className={`${true?'cursor-pointer':'cursor-not-allowed'}relative`}>
            {/* <Chip size='small' className='absolute' color={true?"success":"error"}
           label={item.open?"open":"close"}/> */}
          <img src={item.images[0]} alt="" className='w-full h-[10rem] rounded-t-md object-cover '>
          
          </img>
          
        </div>
        <div className="p-4 text-part lg:flex w-full justify-between">
          <p className='text-gray-500 text-sm'>
          {item.description}
          </p>
          <p>
            {item.title}
          </p>
        </div>
        <div>
          <IconButton>
        {/* {isPresentInFavorite(auth.favorites, item)? */}
            <FavoriteIcon/> 
            {/* : <FavouriteBorderIcon/>} */}
          </IconButton>
        </div>
      </Card>
    </div>
  )
}

export default FavoriteCard