import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createCategoryAction } from '../../component/State/Restaurant/Action';

const CategoryForm = () => {
  const jwt = localStorage.getItem("jwt")
    const dispatch = useDispatch();
    const { restaurant } = useSelector(store => store)
    const initialValues = {
        name:"",
        restaurantId:restaurant.userRestaurants?.id
    }
    const [formData, setFormData] = useState(initialValues)
    const handleSubmit = (e) => {
        // const data = {
        //     name:formData.categoryName,
        // }
        e.preventDefault()
        dispatch(createCategoryAction({reqData:formData,jwt:jwt}))
        console.log("formdata",formData)
        console.log("category created",restaurant)
        setFormData(initialValues)


    }
    const handleInputChange = (e) => {
      console.log("e",e.target.value)
       e.preventDefault();
       const {name, value} = e.target;
       setFormData({...formData,[name]:value})
    }

  return (
    <div>
      <div className="p-5">
        <h1 className='text-gray-400 text-center text-xl pb-10'>
            Create Food Category
        </h1>
        <form onSubmit={handleSubmit} className='py-3' action="">
        <TextField fullWidth id='name' name='name' label='Category' 
          variant='outlined' onChange={handleInputChange}
           value={formData.name}>
            
           </TextField>
          <Button sx={{marginTop:"1rem"}} fullWidth variant='contained' type='submit'> Create FoodCategory</Button>
        </form>
      </div>
    </div>
  )
}

export default CategoryForm
