import { Delete } from '@mui/icons-material'
import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteEventAction } from '../State/Restaurant/Action'

const EventCard = ({event}) => {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const deleteEvent = (eventId) => {
    console.log(eventId)
     dispatch(deleteEventAction({eventId,jwt}))
  }
  return (
    <div>
      <Card className='w-[18rem]'>
       <CardMedia image={event?.image} sx={{height:345}}/>
       <CardContent>
        <Typography variant='h5'>
         {event?.name}
        </Typography>
       </CardContent>
        <Typography variant='body2'>
         50%offfer
        </Typography>
        <div className='p-2 space-y-2'>
         <p>{event?.location}</p>
         <p className='text-sm text-blue-500 '>{event?.startedAt}</p>
         <p className='text-sm text-green-500 '>{event?.endedAt}</p>
         {true && <CardContent>
          <IconButton onClick={()=>deleteEvent(event?.id)}>
            <Delete/>
            </IconButton></CardContent>}
        </div>
      </Card>
     
    </div>
  )
}

export default EventCard
