import { Box, Button, Chip, CircularProgress, FormControl, Grid, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Close from '@mui/icons-material/Close';
import { uploadImageToCloudinary } from '../util/uploadImageToCloudinary';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsOfRestaurant } from '../../component/State/Ingredients/Action';
import { createMenuItem } from '../../component/State/Menu/Action';
import { getRestaurantCategory } from '../../component/State/Restaurant/Action';

const CreateMenuForm = () => {
  const { restaurant, menu } = useSelector(store => store)
  const id = restaurant.userRestaurants?.id
  const jwt = localStorage.getItem("jwt")
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getIngredientsOfRestaurant({id:id, jwt:jwt}))
    dispatch(getRestaurantCategory({jwt,restaurantId:id}))
    console.log("createmenuform",restaurant)
  },[])
  const { ingredients } = useSelector(store => store)
  const [uploadImage, setUploadImage] = useState();
  const initialValues = {
    name:"",
    description:"",
    price:"",
    category:"",
    restaurantId:id,
    vegetarian:true,
    seasonal:false,
    ingredients:[],
    images:[]
  }
  const formik = useFormik({
    initialValues,
    onSubmit:(values)=>{
      // values.restaurantId=3;
      console.log("values",values)
      dispatch(createMenuItem({menu:values, jwt:jwt}))
      console.log("created menu form =>",menu)    
    }
  });

  
// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
//   const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };
  const handleImageChange = async(e) =>{
      console.log("e.target.files[0]",e.target.files[0])
    const file = e.target.files[0];
    setUploadImage(true);
    const image = await uploadImageToCloudinary(file)
    formik.setFieldValue("images",[...formik.values.images, image])
    setUploadImage(false)
  }
  const handleRemoveImage =(index) =>{
    const updatedImages = [...formik.values.images]
      updatedImages.splice(index, 1)
      formik.setFieldValue("images",updatedImages)
  }
  return (
    <div className='py-10 lg:flex items-center justify-center min-h-screen'>
    <div className='lg:max-w-4xl py-3'>
       <h1 className='font-bold text-2xl text-center py-2'>Add New Menu</h1>
      <form onSubmit={formik.handleSubmit}>
         <Grid container spacing={2}>
          <Grid item xs={12} className='flex flex-wrap gap-5'>
           <input type='file' accept='image/*' id='fileInput' style={{display:"none"}} 
           onChange={handleImageChange} />
           <label htmlFor='fileInput' className='relative'>
            <span className='w-24 h-24 cursor-pointer flex justify-center p-3 border rounded-md border-gray-600'>
              <AddPhotoAlternateIcon className='text-white'/>
            </span>
            {
              uploadImage && <div className='absolute top-0 left-0 bottom-0 right-0 w-24 h-24 flex justify-center items-center'>
              <CircularProgress/>     
              </div>
            }
           </label>
           <div className='flex flex-wrap gap-2'>
            { 
            formik.values.images.map((image, index) => <div className='relative'>
              <img src={image} className='w-24 h-24 object-cover' key={index} alt=""/>
              <IconButton size='small' sx={{position:'absolute', top:0, right:0, outline:"none"}}
               onClick={() => handleRemoveImage(index)}>
                <Close sx={{fontSize:"1rem"}}/>
              </IconButton>
            </div>)
            }
           </div>
          </Grid>
          <Grid item xs={12}>
           <TextField fullWidth id='name' name='name' label='Name' variant='outlined' onChange={formik.handleChange}
           value={formik.values.name}>
            
           </TextField>
          </Grid>
          <Grid item xs={12}>
          <TextField fullWidth id='description' name='description' label='Description' 
          variant='outlined' onChange={formik.handleChange}
           value={formik.values.description}>
            
           </TextField>
          </Grid>
          <Grid item xs={12} >
          {/* <TextField fullWidth id='ingredients' name='ingredients' label='Ingredients' 
          variant='outlined' onChange={formik.handleChange}
           value={formik.values.ingredients}>
            
           </TextField> */}
        <FormControl  fullWidth>
        <InputLabel id="ingredients" >
        Ingredients
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          name='ingredients'
          value={formik.values.ingredients}
          onChange={formik.handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Ingredients" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value.name} label={value.name} />
              ))}
            </Box>
          )}
          // MenuProps={MenuProps}
        >
          {ingredients.ingredients?.map((item,index) => (
            <MenuItem
              key={index}
              value={item}
           
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
          </Grid>
          <Grid item xs={12} lg={4}>
          <TextField fullWidth id='price' name='price' label='Price' 
          variant='outlined' onChange={formik.handleChange}
           value={formik.values.price}>
            
           </TextField>
          </Grid>
          <Grid item xs={12} lg={4}>
          {/* <TextField fullWidth id='category' name='category' label='Category' 
          variant='outlined' onChange={formik.handleChange}
           value={formik.values.category}>
            
           </TextField> */}
           <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select-label"
    value={formik.values.category}
    label="Category"
    onChange={formik.handleChange}
    name='category'
  >
    {
      restaurant.category?.map((item) =>{
        return(
              <MenuItem value={item}>{item.name}</MenuItem>
        )
      })
    }

  </Select>
</FormControl>
          </Grid>
          <Grid item xs={12} lg={4}>
          <TextField fullWidth id='restaurantId' name='restaurantId' label='RestaurantId' 
          variant='outlined' onChange={formik.handleChange}
           value={formik.values.restaurantId}>
            
           </TextField>
          </Grid>
         
          <Grid item xs={12} lg={6}>
          {/* <TextField fullWidth id='vegetarian' name='vegetarian' label='Vegetarian' 
          variant='outlined' onChange={formik.handleChange}
           value={formik.values.vegetarian}>
            
           </TextField> */}
           <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Is Vegetarian</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={formik.values.vegetarian}
    label="Is Vegetarian"
    name='vegetarian'
    onChange={formik.handleChange}
  >
    <MenuItem value={true}>yes</MenuItem>
    <MenuItem value={false}>No</MenuItem>
 
  </Select>
</FormControl>
          </Grid>
         <Grid item xs={12} lg={6}>
          {/*  <TextField fullWidth id='seasonal' name='seasonal' label='Seasonal' 
          variant='outlined' onChange={formik.handleChange}
           value={formik.values.seasonal}>
            
           </TextField> */}
           <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Is Seasonal </InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={formik.values.seasonal}
    label="Is Seasonal"
    name='seasonal'
    onChange={formik.handleChange}
  >
    <MenuItem value={true}>Yes</MenuItem>
    <MenuItem value={false}>No</MenuItem>
   
  </Select>
</FormControl>
          </Grid>
          
         </Grid>
         <Button variant='contained' color='primary' type='submit'>Create Menu</Button>
      </form>
    </div>
    </div>
  )
}

export default CreateMenuForm
