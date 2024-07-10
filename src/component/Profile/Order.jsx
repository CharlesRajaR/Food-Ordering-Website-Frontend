import React, { useEffect } from 'react'
import OrderCard from './OrderCard'
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrder } from '../State/Order/Action';

const Order = () => {
  const { auth, order } = useSelector(store => store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  useEffect(() =>{
     dispatch(getUserOrder(jwt))
  },[auth.jwt])
  return (
    <div classNane='flex flex-col items-center'>
      <h1 className='text-xl text-center font-semibold py-7'>
        My Orders
      </h1>
      <div className="space-y-5 w-full md:w-1/2">
       {
        order.orders?.map((order) => order.items.map((item) => <OrderCard order = {order} item = {item}/>))
       }
      </div>
    </div>
  )
}

export default Order