import { TaskAlt } from '@mui/icons-material'
import { Button, Card } from '@mui/material'
import { green } from '@mui/material/colors'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentSuccess = () => {
    const navigate = useNavigate();
  return (
    <div className='min-h-screen px-5 border'>
        <div className="flex flex-col items-center justify-center h-[90vh]">
            <Card className='box w-full lg:w-1/4 flex flex-col items-center rounded-md p-5'>
            <TaskAlt sx={{fontSize:"5rem" ,color:green[500]}}/>
            <h1 classNmae='py-5 text-2xl font-semibold'>Order Success</h1>
            <p className='py-3 text-center text-gray-400'>Thank you for choosing our restaurant!
                we appreciate your order
            </p>
            <p className='py-2 text-center text-gray-200'>Have a great day</p>
            <Button onClick={()=>navigate('/')}>Go to Home</Button>
            </Card>
        </div>
      
    </div>
  )
}

export default PaymentSuccess
