import { Button, TextField } from '@mui/material'
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs' 
import dayjs from 'dayjs'
import React, { useState } from 'react'

const CreateEventForm = () => {
  const initialValues = {
    image:"",
    location:"",
    name:"",
    startedAt:"",
    endedAt:null
  }
  const [formData, setFormData] = useState(initialValues)
  const handleSubmit = () =>{

  }
  const handleFormChange = (e) => {
       setFormData({...formData, [e.target.name]:e.target.value})
       console.log(e.target.value)
  }
  const handleDateChange = ({day,dateType}) =>{
    const formatedDate = dayjs(day).format("MMMM DD YYYY HH:mm:A")
    console.log("formatedDAte",formatedDate)
    setFormData({...formData, [dateType]:formatedDate})
  }
  return (
    <div>
    
       <form onSubmit={handleSubmit} className='py-3' action="">
        <TextField fullWidth id='image_url' name='image' label='Image_URL' 
          variant='outlined' onChange={handleFormChange}
           value={formData.image}>
            
           </TextField>
           <TextField fullWidth id='location' name='location' label='Location' 
          variant='outlined' onChange={handleFormChange}
           value={formData.location}>
            
           </TextField>
           <TextField fullWidth id='name' name='name' label='Name' 
          variant='outlined' onChange={handleFormChange}
           value={formData.name}>
            
           </TextField>    
           <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateTimePicker']}>
              <DateTimePicker label="StartedAt" onChange={(newValue) => handleDateChange(newValue,"startedAt")}/>
              </DemoContainer>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker']}>
            <DateTimePicker label="EndedAt" onChange={(newValue) => handleDateChange(newValue,"endedAt")}  />
          </DemoContainer>
    </LocalizationProvider> 


          <Button sx={{marginTop:"1rem"}} fullWidth variant='contained' type='submit'> Create Event</Button>
        </form>
    </div>
  )
}

export default CreateEventForm
