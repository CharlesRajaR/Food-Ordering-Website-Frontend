 import { Field, Form, Formik } from 'formik';
 import { FormControl, InputLabel, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, MenuItem} from '@mui/material'
import { useDispatch } from 'react-redux';
import { registerUser } from '../State/Authentication/Action';

const initialValues = {
    fullName:"",
    email:"",
    password:"",
    role:""
}
const RegisterForm = () => {
     const navigate = useNavigate();
     const dispatch = useDispatch();
    const handleSubmit = (values) =>{
       dispatch(registerUser({userData:values,navigate}));
      console.log(values)
    }
  return (
     <div>
      <Typography variant='h5' className='text-center'>Register</Typography>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
            <Field as={TextField} margin='normal' name="fullName" label="fullName" fullWidth 
                                 variant='outlined'>
             </Field>
             <Field as={TextField} margin='normal' name="email" label="email" fullWidth 
                                 variant='outlined'>
             </Field>
             <Field as={TextField} margin='normal' name="password" label="password" type='password' fullWidth 
                                 variant='outlined'>
             </Field>
             <FormControl fullWidth>
                <InputLabel id='role-simple-select-label'>role</InputLabel>
                <Field as={Select} margin='normal' name="role" label="Role"  id='role-simple-select' labelId='role-simple-select-label' fullWidth 
                                 variant='outlined'>
                  <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                  <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant owner</MenuItem>
                </Field>
             </FormControl>
            
             <Button sx={{mt:2, padding:'1rem'}} fullWidth variant='contained' type='submit'>
                Register
                </Button>
                    
        </Form>
      </Formik>
      <Typography variant='body2' align='center' sx={{mt:2}}>Alredy have a account?</Typography>
      <Button size='small' onClick={()=>navigate('/account/login')}>login</Button>
    </div>
  )
}

export default RegisterForm
