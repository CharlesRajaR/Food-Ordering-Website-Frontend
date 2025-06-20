import React, { useEffect } from 'react'
import { Box, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer,
   TableHead, TableRow} from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import CategoryForm from './CategoryForm';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantCategory } from '../../component/State/Restaurant/Action';

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
const FoodCategoryTable = () => {
  const { restaurant } = useSelector(store => store)
  const id = restaurant.userRestaurants?.id;
  const jwt = localStorage.getItem("jwt")
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const order=[1,1,1,1,1]
  useEffect(() =>{
    console.log("foodcategorytable.jsx => restaurant", restaurant)
    dispatch(getRestaurantCategory({jwt:jwt,restaurantId:id}))
    console.log("FoodCategoryTable.jsx => get restaurant category success",restaurant)
    },[])
    // const navigate = useNavigate();
  return (
    <div>
      <Card className='m-3'>
         <CardHeader title={"Food Category"} sx={{pt:2, alignItems:"center"}}
         action={<IconButton onClick={handleOpen} aria-label='settings'>
            <CreateIcon/>
         </IconButton>}/>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Name</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurant.category.map((item,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{index+1}</TableCell>
              <TableCell align="left">{item.name}</TableCell>
    
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
    <CategoryForm/>
  </Box>
</Modal>
    </div>
  )
}

export default FoodCategoryTable
