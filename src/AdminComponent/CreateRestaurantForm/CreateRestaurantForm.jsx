import CloseIcon from '@mui/icons-material/Close';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Button, CircularProgress, Grid, IconButton, TextField } from '@mui/material';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { uploadImageToCloudinary } from '../util/uploadImageToCloudinary';
import { useDispatch } from 'react-redux';
import { createRestaurant } from '../../component/State/Restaurant/Action';

const CreateRestaurantForm = () => {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt");
  const [uploadImage, setUploadImage] = useState(false);
  const initialValues = {
    name:"",
    description:"",
    cuisineType:"",
    streetAddress:"",
    city:"",
    stateProvince:"",
    postalCode:"",
    country:"",
    email:"",
    mobile:"",
    twitter:"",
    instragram:"",
    openingHours:"",
    images:[]
  }
  const formik = useFormik({
    initialValues,
    onSubmit:(values)=>{
      console.log("values",values)
      const data ={
      name:values.name,
      description:values.description,
      address:{
        streetAddress:values.streetAddress,
        city:values.city,
        stateProvince:values.stateProvince,
        postalCode:values.postalCode,
        country:values.country,
      },
      contactInformation:{
        email:values.email,
        mobile:values.mobile,
        twitter:values.twitter,
        instagram:values.instragram,
      },
      openingHours:values.openingHours,
      images:values.images,
      }
    console.log("data",data)
    dispatch(createRestaurant({data,jwt}))  
  }
  });
  const handleImageChange = async(e) =>{
    console.log("e.target.files[0]",e.target.files[0])
    const file = e.target.files[0];
    setUploadImage(true);
    const image = await uploadImageToCloudinary(file)
    formik.setFieldValue("images",[...formik.values.images, image])
    setUploadImage(false)

  }
  const handleRemoveImage = (index) =>{
      const updatedImages = [...formik.values.images]
      updatedImages.splice(index, 1)
      formik.setFieldValue("images",updatedImages)
  }
  return (
    <div className='py-10 lg:flex items-center justify-center min-h-screen'>
      <div className='lg:max-w-4xl py-3'>
      <h1 className='font-bold text-2xl text-center py-2'>Add New Restaurant</h1>
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
                <CloseIcon sx={{fontSize:"1rem"}}/>
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
          <Grid item xs={12} lg={6}>
          <TextField fullWidth id='cuisineType' name='cuisineType' label='CuisineType' 
          variant='outlined' onChange={formik.handleChange}
           value={formik.values.cuisineType}>
            
           </TextField>
          </Grid>
          <Grid item xs={12} lg={6}>
          <TextField fullWidth id='streetAddress' name='streetAddress' label='StreetAddress' 
          variant='outlined' onChange={formik.handleChange}
           value={formik.values.streetAddress}>
            
           </TextField>
          </Grid>
          <Grid item xs={12}>
          <TextField fullWidth id='openingHours' name='openingHours' label='OpeningHours' 
          variant='outlined' onChange={formik.handleChange}
           value={formik.values.openingHours}>
            
           </TextField>
          </Grid>
         
          <Grid item xs={12}>
          <TextField fullWidth id='city' name='city' label='City' 
          variant='outlined' onChange={formik.handleChange}
           value={formik.values.city}>
            
           </TextField>
          </Grid>
          <Grid item xs={12} lg={4}>
          <TextField fullWidth id='stateProvince' name='stateProvince' label='StateProvince' 
          variant='outlined' onChange={formik.handleChange}
           value={formik.values.stateProvince}>
            
           </TextField>
          </Grid>
          <Grid item xs={12} lg={4}>
          <TextField fullWidth id='postalCode' name='postalCode' label='PostalCode' 
          variant='outlined' onChange={formik.handleChange}
           value={formik.values.postalCode}>
            
           </TextField>
          </Grid>
          <Grid item xs={12} lg={4}>
          <TextField fullWidth id='country' name='country' label='Country' 
          variant='outlined' onChange={formik.handleChange}
           value={formik.values.country}>
            
           </TextField>
          </Grid>
          <Grid item xs={12} lg={6}>
          <TextField fullWidth id='email' name='email' label='Email' 
          variant='outlined' onChange={formik.handleChange}
           value={formik.values.email}>
            
           </TextField>
          </Grid>
          <Grid item xs={12} lg={6}>
          <TextField fullWidth id='mobile' name='mobile' label='mobile' 
          variant='outlined' onChange={formik.handleChange}
           value={formik.values.mobile}>
            
           </TextField>
          </Grid>
          <Grid item xs={12} lg={6}>
          <TextField fullWidth id='instragram' name='instragram' label='Instragram' 
          variant='outlined' onChange={formik.handleChange}
           value={formik.values.instragram}>
            
           </TextField>
          </Grid>
          <Grid item xs={12} lg={6}>
          <TextField fullWidth id='twitter' name='twitter' label='twitter' 
          variant='outlined' onChange={formik.handleChange}
           value={formik.values.twitter}>
            
           </TextField>
          </Grid>
         </Grid>
         <Button variant='contained' color='primary' type='submit'>Create Restaurant</Button>
      </form>
      </div>
    </div>
  )
}

export default CreateRestaurantForm
