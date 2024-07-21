import React, { useEffect } from 'react'
import AdminSideBar from '../AdminSideBAr/AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../DashBoard/DashBoard'
import Order from '../Order/Order'
import Menu from '../Menu/Menu'
import Events from '../Events/Events'
import FoodCategory from '../FoodCategory/FoodCategory'
import Ingredients from '../Ingredients/Ingredients'
import Details from '../Details/Details'
import CreateMenuForm from '../Menu/CreateMenuForm'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantByUserId } from '../../component/State/Restaurant/Action'

const Admin = () => {

    const jwt = localStorage.getItem("jwt");
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRestaurantByUserId(jwt))
        console.log("Admin.jsx=> get restaurant by userid success")
    },[])
    const handleClose = () =>{

    }
  return (
    <div>
      <div className="md:flex justify-between">
        <div className="">
            <AdminSideBar handleClose={handleClose}/>
        </div>
        <div className="md:w-[80%]">
            <Routes>
                <Route path='/' element={<DashBoard/>} />
                <Route path='/orders' element={<Order/>} />
                <Route path='/menu' element={<Menu/>} />
                <Route path='/event' element={<Events/>} />
                <Route path='/category' element={<FoodCategory/>} />
                <Route path='/ingredients' element={<Ingredients/>} />
                <Route path='/details' element={<Details/>} />
                <Route path='/add-menu' element={<CreateMenuForm/>}/>
            </Routes>
        </div>
      </div>
    </div>
  )
}

export default Admin
