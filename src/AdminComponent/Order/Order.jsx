import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import OrderTable from './OrderTable';

const Order = () => {
  const [filterValue, setFilterValue] = useState();
  const handleFilter = (value) =>{
    setFilterValue(value)
  }
  const orderStatus = [{label:"Pending", value:"PENDING"},
    {label:"Completed", value:"COMPLETED"},
    {label:"All", value:"ALL"}
  ]
  return (
    <div className='px-2'>
      <Card className="p-5">
        <Typography sx={{paddingBottom:"1rem"}} variant='h5'>
        OrderStatus
        </Typography>
        <FormControl>
        <RadioGroup row name='Category' value={filterValue || "All"}>
            {
              orderStatus.map((item) =>{
                return(
                <FormControlLabel key={item.label} value={filterValue}
                 control={<Radio/>}  label={item.label}  sx={{color:"gray"}}/>
              )})
            }
        </RadioGroup>
        </FormControl>
      </Card>
      <OrderTable/>
    </div>
  )
}

export default Order
