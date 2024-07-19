import React from 'react'
import { Box, Card, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer,
   TableHead, TableRow } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import DeleteIcon from '@mui/icons-material/Delete'
import { useNavigate } from 'react-router-dom'

const MenuTable = () => {
  const navigate = useNavigate();
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
          {order.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Ingredients</TableCell>
              <TableCell align="right">price</TableCell>
              <TableCell align="right">Availability</TableCell>
              <TableCell align="right"><IconButton><DeleteIcon/></IconButton></TableCell>
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
