import { Box, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer,
   TableHead, TableRow } from '@mui/material'
import React from 'react'

const OrderTable = () => {
    const order = [1,1,1,1,1]
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
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">1</TableCell>
              <TableCell align="right">image</TableCell>
              <TableCell align="right">customer</TableCell>
              <TableCell align="right">price</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Ingredients</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
         </TableContainer>
        </Card>
      </Box>
    </div>
  )
}

export default OrderTable
