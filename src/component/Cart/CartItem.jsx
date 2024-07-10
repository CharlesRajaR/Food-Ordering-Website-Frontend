import { Chip, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem, updateCartItem } from '../State/Cart/Action';

const CartItem = ({item}) => {

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector(store => store)
  const handleUpdateCartItem = (value) => {
    if(value === -1 && item.quantity === 1){
      handleRemoveCartItem();
    }
    else{
      const data = {
        cartItemId:item.id,
        quantity:item.quantity+value
      }
      dispatch(updateCartItem({data, jwt}))
      console.log("cart item updated")
    }
  } 

  const handleRemoveCartItem = () =>{
    dispatch(removeCartItem({cartItemId:item.id, jwt:auth.jwt || jwt}))
    console.log("cart ite removed")
  }
  return (
    <div className='px-5'>
      <div className="lg:flex items-center lg:space-x-5">
        <div>
            <img src="images/biryani.webp" alt=""className='w-[5rem] h-[5rem] object-cover' />
        </div>
        <div className="flex items-center justify-between md:w-[70%]">
            <div className="space-y-1 lg:space-y-3 w-full">
                <p className='items-center pt-3'>
                    {item.food?.name}
                </p>
                <div className='flex item-center space-x-1'>
                  <IconButton onClick={handleUpdateCartItem(-1)}>
                   <RemoveCircleOutlineIcon />
                  </IconButton>
                  <div className=' flex items-center justify-center'>
                    {item?.quantity}
                  </div>
                  <IconButton onClick={handleUpdateCartItem(1)}>
                   <AddCircleOutlineIcon/>
                  </IconButton>
                </div>
            </div>
            <p>{item?.price}</p>
        </div>
      </div>
      <div>
     { 
     item.ingredients?.map((ingredient) => <Chip label={ingredient}/>)
     }
     </div>
    </div>
  )
}

export default CartItem
