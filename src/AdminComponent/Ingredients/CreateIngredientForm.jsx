import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createIngredient } from '../../component/State/Ingredients/Action'

const CreateIngredientForm = () => {
  const { restaurant, ingredients } = useSelector(store => store)
    const initialValues = {
        name:"",
        categoryId:"",
        restaurantId:restaurant.userRestaurants?.id
    }
    const [formData, setFormData] = useState(initialValues)
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const handleSubmit =(e) =>{
       e.preventDefault();
       dispatch(createIngredient({data:formData, jwt:jwt}))
       console.log("create ingredient form.jsx=> ingredient created",ingredients)
        setFormData(initialValues)
    }
    const handleInputChange =(e) =>{
        const {name, value} = e.target
        setFormData({...formData,[name]:value})
        console.log("formdata",formData)
        console.log("create ing form ingredients",ingredients)
    }
  return (
    <div>
      <div className="p-5">
        <h1 className='text-gray-400 text-center text-xl pb-10'>
            Create New Ingredient
        </h1>
        <form onSubmit={handleSubmit} className='py-3 gap-3' action="">
         <Grid container spacing={2}>   
        <Grid item xs={12}>
        <TextField fullWidth id='name' name='name' label='Name' 
          variant='outlined' onChange={handleInputChange}
           value={formData.name}>
            
           </TextField>
           </Grid>
           <Grid item xs={12}>
           {/* <TextField fullWidth id='categoryId' name='categoryId' label='CategoryId' 
          variant='outlined' onChange={handleInputChange}
           value={formData.categoryId}>
            
           </TextField> */}
           <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select-label"
    value={formData.categoryId}
    label="Category"
    onChange={handleInputChange}
    name='categoryId'
  >{
    ingredients.category.map((item) =>{
      return(
    <MenuItem value={item.id}>{item.name}</MenuItem>)
    })
  }
  </Select>
</FormControl>
           </Grid>
           </Grid>
          <Button sx={{marginTop:"1rem"}} fullWidth variant='contained' type='submit'> Create New Ingredient</Button>
        </form>
      </div>
    </div>
  )
}

export default CreateIngredientForm
