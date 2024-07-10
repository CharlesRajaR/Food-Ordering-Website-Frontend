import { Delete } from '@mui/icons-material'
import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'

const EventCard = () => {
  return (
    <div>
      <Card className='w-[18rem]'>
       <CardMedia image='http://localhost:3000/images/mug.webp' sx={{height:345}}/>
       <CardContent>
        <Typography variant='h5'>
         Indian Fast Food
        </Typography>
       </CardContent>
        <Typography variant='body2'>
         50%off on your first order 
        </Typography>
        <div className='p-2 space-y-2'>
         <p>{"Mumbai"}</p>
         <p className='text-sm text-blue-500 '>9.00AM Monday 1.1.2025</p>
         <p className='text-sm text-green-500 '>9.00AM Monday 31.1.2025</p>
         {true && <CardContent>
          <IconButton>
            <Delete/>
            </IconButton></CardContent>}
        </div>
      </Card>
     
    </div>
  )
}

export default EventCard
