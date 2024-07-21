import { Divider, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import CartItem from './CartItem'
import AddLocationAltSharpIcon from '@mui/icons-material/AddLocationAltSharp'
import { Button, Card } from '@mui/material'
import AddressCard from './AddressCard'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
 import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../State/Order/Action'
import { findCart, getAllCartItems } from '../State/Cart/Action'

const initialValues = {
    State:"",
    City:"",
    StreetAddress:"",
    Pincode:""
}

 const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Cart = () => {
  const {  auth, cart } = useSelector(store => store);
  const jwt = localStorage.getItem("jwt")
  const dispatch = useDispatch()
    console.log("cart.jsx cartitems",cart)
  const handleSubmit = (value) => {
    console.log(value)
      const jwt = localStorage.getItem("jwt")
      const  order = {
        restaurantId:cart.cartItems[0].food?.restaurant.id,
        delivaryAddress:{
          fullName:auth.user?.email,
          streetAddress:value.StreetAddress,
          city:value.City,
          state:value.State,
          postalCode:value.Pincode
        }
      }

     console.log("values",value)
 
    dispatch(createOrder({order,jwt}))
  }
  
  useEffect(() =>{
     dispatch(getAllCartItems({cartId:cart.cart?.id,jwt:jwt}));
     console.log("caart.jsx => find cart success",cart)
  },[])

  const [open, setOpen] = React.useState(false);
  const handleOpenAddressModel = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const createOrderUsingSelectedAddress= () => {

    }

  
    const calculateTotal = () =>{
      var total = 0;
      cart.cartItems.map((item) =>{
       total += item.totalPrice;
      })
      return total;
    }

    const totalPrice = calculateTotal();
  return (
    <div>
      <main className='lg:flex  justify-between '>
        <section className='lg:w-[30%]  lg:min-h-screen space-y-6  pt-10'>
        {  cart.cartItems.map((item) =><CartItem item={item}/>)}
        
        <Divider/>
        <div className="px-5 text-sm">
            <p className='font-extralight py-5'>
                Bill Details
            </p>
            <div className='space-y-3'>
                <div className="flex justify-between text-gray-400">
                    <p>Item Total</p>
                    <p>{totalPrice}</p>
                </div>
                </div>
                <div className='space-y-3'>
                <div className="flex justify-between text-gray-400">
                    <p>Delivery fee</p>
                    <p>5</p>
                </div>    
                </div>
                <div className='space-y-3'>
                <div className="flex justify-between text-gray-400">
                    <p>gst</p>
                    <p>5</p>
                    
                </div>
                </div>
                <Divider/>
            <div className="flex justify-between text-gray-400">
                <p>
                    Total Price
                </p>
                <p>{totalPrice+10}</p>
            </div>
            </div>
        </section>
        <Divider flexItem orientation='vertical'/>
        <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0 '>
            <div>
                    <h1 className='text-center font-semibold text-2xl py-10'>
                        Choose Delivery Address
                    </h1>
                    <div className='flex gap-5 flex-wrap justify-center'>
                     {
                        [1,1,1].map((item) => <AddressCard item={item} showButton={true} handleSelectAddress={createOrderUsingSelectedAddress}/>)
                     }
                     <Card className='flex gap-5 w-64 p-5'>
                    <AddLocationAltSharpIcon/>
                        <div className="space-y-3 text-gry-500 ">
                            <h1 className='text-semibold text-lg text-white'>Add New Address</h1>
                            <Button variant='contained' onClick={handleOpenAddressModel}>
                                 Add
                            </Button>
                         <Modal open={open}
                         onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                         aria-describedby="modal-modal-description"
                         >
                         <Box sx={style}>
                          <Formik initialValues={initialValues}
                          onSubmit={handleSubmit}>
                            <Form>
                              <Grid container spacing={2}>
                                <Grid item xs={12}>
                                 <Field as={TextField} name="State" label="State" fullWidth 
                                 variant='outlined'></Field>
                                </Grid>
                                <Grid item xs={12}>
                                 <Field as={TextField} name="City" label="City" fullWidth 
                                 variant='outlined'></Field>
                                </Grid>
                                <Grid item xs={12}>
                                 <Field as={TextField} name="StreetAddress" label="StreetAddress" fullWidth 
                                 variant='outlined'></Field>
                                </Grid>
                                <Grid item xs={12}>
                                 <Field as={TextField} name="Pincode" label="Pincode" fullWidth 
                                 variant='outlined'></Field>
                                </Grid>
                               <Grid item xs={12}>
                                 <Button variant='contained' type='submit' color='primary' fullWidth>
                                    Deliver here
                                 </Button>
                                </Grid>
                              </Grid>
                            </Form>
                          </Formik>
                         </Box>
                      </Modal>

                        </div>
                    </Card>
                    </div>
                </div>

        </section>
      </main>
      
    </div>
  )
}

export default Cart
