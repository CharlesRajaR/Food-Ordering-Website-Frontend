import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createIngredientCategory } from '../../component/State/Ingredients/Action';

const CreateIngredientCategoryForm = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")

  const { restaurant, ingredients } = useSelector(store => store)
    const initialValues = {
        name:"",
        restaurantId:restaurant.userRestaurants?.id
    }
    const [formData, setFormData] = useState(initialValues)
    const handleSubmit =(e) =>{
       e.preventDefault();
       dispatch(createIngredientCategory({data:formData,jwt:jwt}))
       console.log("Create ingredient category form => ingredient category created",ingredients)
       setFormData(initialValues)
    }
    const handleInputChange =(e) =>{
        const {name, value} = e.target
        setFormData({...formData,[name]:value})
    }
  return (
    <div>
      <div className="p-5">
        <h1 className='text-gray-400 text-center text-xl pb-10'>
            Create Ingredient Category
        </h1>
        <form onSubmit={handleSubmit} className='py-3' action="">
        <TextField fullWidth id='name' name='name' label='Name' 
          variant='outlined' onChange={handleInputChange}
           value={formData.name}>
            
           </TextField>
          <Button sx={{marginTop:"1rem"}} fullWidth variant='contained' type='submit'> Create Ingredient Category</Button>
        </form>
      </div>
    </div>
  )
}

export default CreateIngredientCategoryForm
