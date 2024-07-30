import { Box, Button, Modal } from '@mui/material'
import React, { useEffect } from 'react'
import CreateEventForm from './CreateEventForm';
import { useDispatch, useSelector } from 'react-redux';
import EventCard from '../../component/Profile/EventCard';
import { getRestaurantsEvent } from '../../component/State/Restaurant/Action';

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
const Events = () => {
  const { restaurant } = useSelector(store => store)
  const jwt = localStorage.getItem("jwt")
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getRestaurantsEvent({restaurantId:restaurant.userRestaurants?.id, jwt}))
    console.log("events.jsx",restaurant)
  },[])
  
   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div className="p-5">
        <Button onClick={handleOpen} variant='contained'>Create New Event</Button>
        <div  className='mt-15 px-3 flex flex-wrap gap-3'>

        {  
          restaurant.restaurantEvents?.map((event) =>{
            return(
                      <EventCard  event={event}/>
                    )
          })
        }
        </div>
          <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
   <CreateEventForm/>
  </Box>
</Modal>
      </div>
    </div>
  )
}

export default Events
