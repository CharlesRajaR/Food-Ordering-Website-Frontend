import React, { useEffect } from 'react'
import { Box, Button, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer,
   TableHead, TableRow } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import CreateIngredientForm from './CreateIngredientForm';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsOfRestaurant, updateStockOfIngredient } from '../../component/State/Ingredients/Action';

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
const IngredientTable = () => {
  const { restaurant } = useSelector(store => store)
  const id = restaurant.userRestaurants?.id
  const jwt = localStorage.getItem("jwt")
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getIngredientsOfRestaurant({id:id, jwt:jwt}))
  },[])

  const updateIngredientStock = (ingredientId) => {
    dispatch(updateStockOfIngredient({id:ingredientId, jwt:jwt}))
  }
  const { ingredients } = useSelector(store => store)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const order = [1,1,1,1,1]
  return (
    <div>
       <Card className='mt-3'>
         <CardHeader title={"Ingredients"} sx={{pt:2, alignItems:"center"}}
         action={<IconButton onClick={handleOpen} aria-label='settings'>
            <CreateIcon/>
         </IconButton>}/>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Availability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients.ingredients?.map((item, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="right">{index+1}</TableCell>
            <TableCell align="right">{item.name}</TableCell>
            <TableCell align="right">{item.category.name}</TableCell>
            <TableCell align="right">
            <Button color='primary' onClick={()=>updateIngredientStock(item.id)} >{item.inStock?"Available":"Not-Available"}</Button>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
         </TableContainer>
        </Card>
        <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <CreateIngredientForm/>
  </Box>
</Modal>
    </div>
  )
}

export default IngredientTable
