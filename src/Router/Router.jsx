import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminRoute from './AdminRoute'
import CustomerRouter from './CustomerRouter'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/admin/restaurant/*' element={<AdminRoute/>}/>
        <Route path='/*' element={<CustomerRouter/>}/>
      </Routes>
    </div>
  )
}

export default Router
