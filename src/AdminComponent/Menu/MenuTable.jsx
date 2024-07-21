import React, { useEffect } from 'react'
import { Avatar, Button, Card, CardHeader, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer,
   TableHead, TableRow } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import DeleteIcon from '@mui/icons-material/Delete'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFoodAction, getMenuItemByRestaurantId, updateMenuItemAvailability } from '../../component/State/Menu/Action'

const MenuTable = () => {
  const navigate = useNavigate();
  const { restaurant,menu } = useSelector(store => store)
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const reqData = {
    jwt:jwt,
    restaurantId:restaurant.userRestaurants?.id,
    vegetarian:false,
    nonVegetarian:false,
    seasonal:false 
  }

  const handleDeleteFood = (id) => {
      dispatch(deleteFoodAction({foodId:id, jwt:jwt}))
      console.log("food is deleted with id ",id)
  }
  const updateFoodAvailability = (id) =>{
       dispatch(updateMenuItemAvailability({foodId:id,jwt:jwt}))
       console.log("menutable.jsx => food updated")
  }
  useEffect(() => {
    dispatch(getMenuItemByRestaurantId(reqData))
    console.log("menutable.jsx =>get menu item success",menu)
  },[])
    const order =[1,1,1,1,1]
    return (
    <div>
      <Card className='m-3'>
         <CardHeader title={"Menu"} sx={{pt:2, alignItems:"center"}} 
         action={<IconButton onClick={() => navigate('/admin/restaurant/add-menu')} aria-label='settings'>
            <CreateIcon/>
         </IconButton>}/>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Ingredients</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Availability</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menu.menuItem.map((item, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right"><Avatar alt="" src={item.images[0]}/></TableCell>
              <TableCell align="right">{item.name}</TableCell>
              <TableCell align="right">{
                item.ingredients.map((ingredient) => <Chip label={ingredient.name}/>)
                }</TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">
                <Button onClick={()=>updateFoodAvailability(item.id)}>{item.available?"in_stock":"out_of_stock"}</Button></TableCell>
              <TableCell align="right"><IconButton onClick={()=>handleDeleteFood(item.id)}>
                <DeleteIcon color='primary'/></IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
         </TableContainer>
        </Card>
    </div>
  )
}

export default MenuTable
