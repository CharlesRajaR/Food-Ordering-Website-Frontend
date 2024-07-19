import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

const CreateIngredientForm = () => {
    const initialValues = {
        name:"",
        categoryId:""
    }
    const [formData, setFormData] = useState(initialValues)
    const handleSubmit =() =>{
       
    }
    const handleInputChange =(e) =>{
        const {name, value} = e.target
        setFormData({...formData,[name]:value})
        console.log("formdata",formData)
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
           <TextField fullWidth id='categoryId' name='categoryId' label='CategoryId' 
          variant='outlined' onChange={handleInputChange}
           value={formData.categoryId}>
            
           </TextField>
           </Grid>
           </Grid>
          <Button sx={{marginTop:"1rem"}} fullWidth variant='contained' type='submit'> Create New Ingredient</Button>
        </form>
      </div>
    </div>
  )
}

export default CreateIngredientForm
