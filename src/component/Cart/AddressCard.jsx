import { Button, Card } from '@mui/material'
import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'

const AddressCard = ({item, showButton, handleSelectAddress}) => {
  return (
    <Card className='flex gap-5 w-64 p-5'>
       <HomeRoundedIcon/>
       <div className="space-y-3 text-gry-500 ">
        <h1 className='text-semibold text-lg text-white'>Home</h1>
        <p className=''>Address</p>
        {showButton && <Button variant='contained' onClick={()=>handleSelectAddress(item)}>
            select
            </Button>}
       </div>
    </Card>
  )
}

export default AddressCard
