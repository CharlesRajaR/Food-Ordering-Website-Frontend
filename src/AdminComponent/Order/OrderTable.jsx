import { Avatar, Box, Card, CardHeader, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer,
   TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurantOrder } from '../../component/State/RestaurantOrder/action'
import { Update } from '@mui/icons-material'
import { green } from '@mui/material/colors'


const OrderTable = ({filterValue}) => {
    const order = [1,1,1,1,1]
    const { restaurant, restaurantOrder } = useSelector(store => store);
    const dispatch = useDispatch();
    const id = restaurant.userRestaurants?.id;
    const jwt = localStorage.getItem("jwt")
    const orderStatus = filterValue
    useEffect(() =>{
      console.log("id, jwt, orderStatus",id,jwt,orderStatus);
      dispatch(fetchRestaurantOrder({restaurantId:id, orderStatus, jwt}))
      console.log("restaurant order ordertable.jsx",restaurantOrder)
    },[filterValue])

    const handleUpdate = () =>{

    }
  return (
    <div>
      <Box>
        <Card className='mt-3'>
         <CardHeader title={"All Order"} sx={{pt:2, alignItems:"center"}}/>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Customer</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Ingredients</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurantOrder.restaurantOrder.map((order) => order?.items?.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{item?.id}</TableCell>
              <TableCell align="right"><Avatar src={item?.food?.images[0]} alt=""/></TableCell>
              <TableCell align="right">{order.customer?.email}</TableCell>
              <TableCell align="right">{item?.totalPrice}</TableCell>
              <TableCell align="right">{item?.food?.name}</TableCell>
              <TableCell align="right">{item?.ingredient.map((item)=><Chip label={item}/>)}</TableCell>
              <TableCell align="right">{order.orderStatus}</TableCell>
              <TableCell align='right'><IconButton onClick={handleUpdate}><Update sx={{color:green[300]}}/></IconButton></TableCell>
            </TableRow>
          )))}
        </TableBody>
      </Table>
         </TableContainer>
        </Card>
      </Box>
    </div>
  )
}

export default OrderTable
