import { Button, Grid, TextField } from '@mui/material'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo' 
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createEventAction } from '../../component/State/Restaurant/Action';



const CreateEventForm = () => {

  const initialValues ={
  image:"",
  name:"",
  location:"",
  startedAt:"",
  endedAt:""
}

const [formValues, setFormValues] = useState(initialValues);
const handleInputChange = (e) => {
  setFormValues({...formValues, [e.target.name]:e.target.value})
}
const dispatch = useDispatch()
const {  restaurant } = useSelector(store => store)
const jwt = localStorage.getItem("jwt")
const restaurantId = restaurant?.userRestaurants?.id
const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(createEventAction({data:formValues,jwt,restaurantId}))
   console.log("values", formValues)
   console.log("restaurant",restaurant)
   setFormValues(initialValues)
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
     
    <Grid container spacing={2}>
       <Grid item xs={12}>
          <TextField fullWidth label='Image' name='image' value={formValues.image} onChange={handleInputChange}/>
       </Grid>
       <Grid item xs={12}>
          <TextField fullWidth label='Location' name='location' value={formValues.location} onChange={handleInputChange}/>
       </Grid>
       <Grid item xs={12}>
          <TextField fullWidth label='Name' name='name' value={formValues.name} onChange={handleInputChange}/>
       </Grid>
       <Grid item xs={12}>
       <TextField fullWidth label='Started Date and Time' name='startedAt' value={formValues.startedAt} onChange={handleInputChange}/>
       </Grid>
       <Grid item xs={12}>
       <TextField fullWidth label='Ended Date and Time' name='endedAt' value={formValues.endedAt} onChange={handleInputChange}/>
       </Grid>
       <Button contained type='submit'>Create Event</Button>
    </Grid>
      
      </form>
    </div>
  )
}

export default CreateEventForm
