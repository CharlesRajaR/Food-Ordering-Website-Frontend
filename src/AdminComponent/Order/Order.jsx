import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import OrderTable from './OrderTable';

const Order = () => {
  const [filterValue, setFilterValue] = useState("");
  const handleChange = (e) =>{
    console.log("e",e.target.value)
    setFilterValue(e.target.value)
    console.log("filterValue",filterValue)
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
        <RadioGroup row name='Category' value={filterValue || "All"} onChange={handleChange}>
            {
              orderStatus.map((item) =>{
                return(
                <FormControlLabel key={item.label} value={item.value} name={item.label}
                 control={<Radio/>}  label={item.label} sx={{color:"gray"}}/>
              )})
            }
        </RadioGroup>
        </FormControl>
      </Card>
      <OrderTable filterValue={filterValue}/>
    </div>
  )
}

export default Order
