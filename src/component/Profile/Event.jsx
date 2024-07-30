import React, { useEffect } from 'react'
import EventCard from './EventCard'
import { getAllEvents } from '../State/Restaurant/Action'
import { useDispatch, useSelector } from 'react-redux'

const Event = () => {
  const { restaurant } = useSelector(store => store)
  const jwt = localStorage.getItem("jwt")
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllEvents(jwt))
  },[])
  return (
    <div className='mt-5 px-3 flex flex-wrap gap-3'>
      {
        restaurant.events?.map((event) => <EventCard event={event} />)
      }
    </div>
  )
}

export default Event
