 import { Field, Form, Formik } from 'formik';
 import { TextField, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button} from '@mui/material'
import { useDispatch } from 'react-redux'
import { loginUser } from '../State/Authentication/Action';

const initialValues = {
    email:"",
    password:""
}
const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (values) =>{

        dispatch(loginUser({userData:values, navigate}))
    }
  return (
    <div>
      <Typography variant='h5' className='text-center'>Login</Typography>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
             <Field as={TextField} margin='normal' name="email" label="email" fullWidth 
                                 variant='outlined'>
             </Field>
             <Field as={TextField} margin='normal' name="password" label="password" type='password' fullWidth 
                                 variant='outlined'>
             </Field>
             <Button sx={{mt:2, padding:'1rem'}} fullWidth variant='contained' type='submit'>
                Login
                </Button>
                    
        </Form>
      </Formik>
      <Typography variant='body2' align='center' sx={{mt:2}}>Dont have a account?</Typography>
      <Button size='small' onClick={()=>navigate('/account/register')}>register</Button>
    </div>
  )
}

export default LoginForm
