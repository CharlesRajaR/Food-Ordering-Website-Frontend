import React, { useEffect } from 'react'
import { Routes, Route } from  'react-router-dom'
import CreateRestaurantForm from '../AdminComponent/CreateRestaurantForm/CreateRestaurantForm'
import Admin from '../AdminComponent/Admin/Admin'
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantByUserId } from '../component/State/Restaurant/Action';
export default function AdminRoute() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")

    useEffect(() => {
        dispatch(getRestaurantByUserId(jwt))
        console.log("AdminRoute.jsx=> get restaurant by userid success")
    },[])

    const { restaurant } = useSelector(store => store)
  return (
    <Routes>
        <Route path='/*' element={!restaurant?.userRestaurants?
        <CreateRestaurantForm/> :
        <Admin/>}/>
    </Routes>
  )
}
