import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const CreateIngredientCategoryForm = () => {
    const initialValues = {
        name:""
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
