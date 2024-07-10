import React from 'react'
import EventCard from './EventCard'

const Event = () => {
  return (
    <div className='mt-5 px-3 flex flex-wrap gap-3'>
      {
        [1,1,1].map((item) => <EventCard/>)
      }
    </div>
  )
}

export default Event
