import React, { useEffect } from 'react'
import { Box, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer,
   TableHead, TableRow } from '@mui/material'
import Create from '@mui/icons-material/Create';
import CreateIngredientCategoryForm from './CreateIngredientCategoryForm';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientCategory } from '../../component/State/Ingredients/Action';

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
const IngredientCategoryTable = () => {
  const jwt = localStorage.getItem("jwt")
  const { restaurant } = useSelector(store => store)
  const id = restaurant.userRestaurants?.id;
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getIngredientCategory({id:id, jwt:jwt}))
  },[])
  const { ingredients } = useSelector(store => store)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const order = [1,1,1,1,1]
  return (
    <div>
         <Card className='mt-3'>
         <CardHeader title={"Ingredients Category"} sx={{pt:2, alignItems:"center"}}
         action={<IconButton onClick={handleOpen} aria-label='settings'>
            <Create/>
         </IconButton>}/>
         <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients.category.map((item, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="right">{item.id}</TableCell>
            <TableCell align="right">{item.name}</TableCell>
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
    <CreateIngredientCategoryForm/>
  </Box>
</Modal>
    </div>
  )
}

export default IngredientCategoryTable
